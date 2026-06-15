"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextarea";
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
      className="p-5 sm:p-8 md:p-12 rounded-3xl border border-[var(--border-highlight)] shadow-lg backdrop-blur-md relative overflow-hidden"
      style={{ background: "var(--surface-paper)" }}
    >
      <h3 className="font-bold text-[var(--foreground)] mb-2">
        Send us a Message
      </h3>
      <p className="text-[var(--color-secondary-text)] mb-8">
        We'd love to hear from you. Fill out the form below and we'll get back
        to you as soon as possible.
      </p>

      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
          <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
          <h4 className="font-bold text-[var(--foreground)] mb-2">
            Message Sent Successfully!
          </h4>
          <p className="text-[var(--color-secondary-text)]">
            Thank you for reaching out. A member of our team will correspond
            with you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Full Name"
              id="name"
              placeholder="John Doe"
              required
            />
            <FormInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="contact@example.com"
              required
            />
          </div>

          <FormInput
            label="Subject"
            id="subject"
            placeholder="How can we help?"
            required
          />

          <FormTextarea
            label="Message"
            id="message"
            placeholder="Your message here..."
            required
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;