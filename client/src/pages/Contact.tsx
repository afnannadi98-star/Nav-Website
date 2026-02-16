import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const mutation = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Get In Touch</span>
              <h1 className="font-heading text-5xl font-bold text-primary mb-6">Let's Discuss Your Project</h1>
              <p className="text-lg text-secondary leading-relaxed">
                Whether you need a quote for BIM services or want to join our team, we're here to answer your questions.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Headquarters", content: "123 Innovation Drive, Tech District, NY 10001" },
                { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
                { icon: Mail, title: "Email", content: "info@navbim.com" },
                { icon: Clock, title: "Business Hours", content: "Mon - Fri: 9:00 AM - 6:00 PM" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-white flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary text-lg">{item.title}</h3>
                    <p className="text-secondary mt-1">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="h-64 bg-gray-100 w-full relative border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 border border-border shadow-lg"
          >
            <h2 className="font-heading text-2xl font-bold text-primary mb-8">Send Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wide font-bold text-secondary">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="rounded-none h-12 border-gray-300 focus:border-accent" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wide font-bold text-secondary">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" className="rounded-none h-12 border-gray-300 focus:border-accent" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wide font-bold text-secondary">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Inquiry" className="rounded-none h-12 border-gray-300 focus:border-accent" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wide font-bold text-secondary">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project requirements..." className="rounded-none min-h-[150px] border-gray-300 focus:border-accent resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-none font-bold uppercase tracking-wider text-sm"
                >
                  {mutation.isPending ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
