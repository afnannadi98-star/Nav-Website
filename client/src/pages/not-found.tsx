import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md border-border shadow-lg">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-bold font-heading text-primary">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-secondary">
            The architectural plan you are looking for does not exist. It may have been moved or deleted.
          </p>

          <div className="mt-8">
            <Link href="/">
              <Button className="w-full bg-primary text-white rounded-none uppercase font-bold tracking-wider">
                Return Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
