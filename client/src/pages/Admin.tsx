import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { type Inquiry } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, Trash2, Clock, User, MessageSquare, Inbox, Lock, LogOut } from "lucide-react";
import { useState } from "react";

function useAdminToken() {
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem("admin_token"));

  const login = (password: string) => {
    sessionStorage.setItem("admin_token", password);
    setToken(password);
  };

  const logout = () => {
    sessionStorage.removeItem("admin_token");
    setToken(null);
  };

  return { token, login, logout };
}

function LoginScreen({ onLogin }: { onLogin: (password: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        onLogin(password);
      } else {
        setError("Invalid password");
      }
    } catch {
      setError("Connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-border p-10 w-full max-w-md shadow-lg"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary text-white flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-primary" data-testid="text-login-title">Admin Access</h1>
          <p className="text-secondary text-sm mt-2">Enter your password to view messages</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-none h-12 border-gray-300 focus:border-accent"
            data-testid="input-admin-password"
          />
          {error && <p className="text-red-500 text-sm" data-testid="text-login-error">{error}</p>}
          <Button
            type="submit"
            disabled={loading || !password}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-none font-bold uppercase tracking-wider text-sm"
            data-testid="button-admin-login"
          >
            {loading ? "Verifying..." : "Enter"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}

function InboxView({ token, onLogout }: { token: string; onLogout: () => void }) {
  const { toast } = useToast();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const { data: inquiries, isLoading } = useQuery<Inquiry[]>({
    queryKey: ['/api/inquiries'],
    queryFn: async () => {
      const res = await fetch('/api/inquiries', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        onLogout();
        throw new Error("Session expired");
      }
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/inquiries'] });
      toast({ title: "Deleted", description: "Inquiry removed successfully." });
    },
    onError: () => {
      toast({ variant: "destructive", title: "Error", description: "Failed to delete inquiry." });
    },
  });

  const formatDate = (date: string | Date | null) => {
    if (!date) return "Unknown";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-padding">
        <div className="mb-10 flex items-start justify-between">
          <div>
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Admin</span>
            <h1 className="font-heading text-4xl font-bold text-primary flex items-center gap-3" data-testid="text-admin-title">
              <Inbox className="w-9 h-9" />
              Message Inbox
            </h1>
            <p className="text-secondary mt-2">
              {inquiries?.length ?? 0} message{(inquiries?.length ?? 0) !== 1 ? 's' : ''} received
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-none text-xs uppercase tracking-wider font-bold mt-2"
            onClick={onLogout}
            data-testid="button-admin-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-border p-6 animate-pulse">
                <div className="h-5 bg-gray-200 rounded w-1/3 mb-3" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        ) : !inquiries?.length ? (
          <div className="bg-white border border-border p-16 text-center">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-xl text-primary mb-2" data-testid="text-no-messages">No Messages Yet</h3>
            <p className="text-secondary">When someone submits the contact form, their message will appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {[...inquiries].reverse().map((inquiry, index) => (
              <motion.div
                key={inquiry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-border hover:border-accent/30 transition-all duration-200"
                data-testid={`card-inquiry-${inquiry.id}`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedId(expandedId === inquiry.id ? null : inquiry.id)}
                  data-testid={`button-expand-${inquiry.id}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-lg text-primary truncate" data-testid={`text-subject-${inquiry.id}`}>
                          {inquiry.subject}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
                        <span className="flex items-center gap-1.5" data-testid={`text-name-${inquiry.id}`}>
                          <User className="w-3.5 h-3.5" />
                          {inquiry.name}
                        </span>
                        <span className="flex items-center gap-1.5" data-testid={`text-email-${inquiry.id}`}>
                          <Mail className="w-3.5 h-3.5" />
                          {inquiry.email}
                        </span>
                        <span className="flex items-center gap-1.5" data-testid={`text-date-${inquiry.id}`}>
                          <Clock className="w-3.5 h-3.5" />
                          {formatDate(inquiry.createdAt)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`mailto:${inquiry.email}?subject=Re: ${inquiry.subject}`}
                        onClick={(e) => e.stopPropagation()}
                        data-testid={`link-reply-${inquiry.id}`}
                      >
                        <Button variant="outline" size="sm" className="rounded-none text-xs uppercase tracking-wider font-bold">
                          Reply
                        </Button>
                      </a>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteMutation.mutate(inquiry.id);
                        }}
                        disabled={deleteMutation.isPending}
                        data-testid={`button-delete-${inquiry.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {expandedId === inquiry.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-6 pb-6 border-t border-border"
                  >
                    <p className="text-foreground leading-relaxed pt-4 whitespace-pre-wrap" data-testid={`text-message-${inquiry.id}`}>
                      {inquiry.message}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Admin() {
  const { token, login, logout } = useAdminToken();

  if (!token) {
    return <LoginScreen onLogin={login} />;
  }

  return <InboxView token={token} onLogout={logout} />;
}
