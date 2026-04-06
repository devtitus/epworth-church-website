"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div 
      className="p-8 md:p-12 rounded-3xl border border-[var(--border-highlight)] shadow-lg backdrop-blur-md relative overflow-hidden"
      style={{ background: "var(--surface-paper)" }}
    >
      <h3 className="text-2xl lg:text-3xl font-bold text-[var(--foreground)] mb-2">Send us a Message</h3>
      <p className="text-[var(--color-secondary-text)] mb-8">
        We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>

      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
          <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
          <h4 className="text-xl font-bold text-[var(--foreground)] mb-2">Message Sent Successfully!</h4>
          <p className="text-[var(--color-secondary-text)]">Thank you for reaching out. A member of our team will correspond with you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[var(--foreground)]">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-highlight)] bg-transparent outline-none focus:border-[var(--color-highlight)] focus:ring-1 focus:ring-[var(--color-highlight)] transition-all text-[var(--foreground)]"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="contact@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-highlight)] bg-transparent outline-none focus:border-[var(--color-highlight)] focus:ring-1 focus:ring-[var(--color-highlight)] transition-all text-[var(--foreground)]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-[var(--foreground)]">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="How can we help?"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-highlight)] bg-transparent outline-none focus:border-[var(--color-highlight)] focus:ring-1 focus:ring-[var(--color-highlight)] transition-all text-[var(--foreground)]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-[var(--foreground)]">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Your message here..."
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-highlight)] bg-transparent outline-none focus:border-[var(--color-highlight)] focus:ring-1 focus:ring-[var(--color-highlight)] transition-all text-[var(--foreground)] resize-none"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
