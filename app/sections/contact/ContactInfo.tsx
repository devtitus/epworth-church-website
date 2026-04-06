import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactDetail {
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
  action?: string;
}

const ContactInfo = () => {
  const details: ContactDetail[] = [
    {
      icon: <MapPin className="w-6 h-6 text-[var(--color-highlight)]" />,
      label: "Our Location",
      value: (
        <>
          123 Epworth Avenue<br />
          Navi Mumbai, Maharashtra 400703
        </>
      ),
    },
    {
      icon: <Phone className="w-6 h-6 text-[var(--color-highlight)]" />,
      label: "Phone Number",
      value: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: <Mail className="w-6 h-6 text-[var(--color-highlight)]" />,
      label: "Email Address",
      value: "hello@epworthmtc.org",
      action: "mailto:hello@epworthmtc.org"
    },
    {
      icon: <Clock className="w-6 h-6 text-[var(--color-highlight)]" />,
      label: "Service Timings",
      value: "Sunday: 8:30 AM & 10:30 AM"
    }
  ];

  return (
    <div className="space-y-8 lg:space-y-12">
      <div className="space-y-6">
        {details.map((detail, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--border-highlight)] transition-colors hover:bg-[var(--card-shade)]" style={{ background: 'rgba(211, 213, 215, 0.1)' }}>
            <div className="flex-shrink-0 p-3 rounded-full bg-[var(--accent-5)] text-[var(--accent-1)]">
              {detail.icon}
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary-text)] mb-1">
                {detail.label}
              </p>
              {detail.action ? (
                <a href={detail.action} className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--color-highlight)] transition-colors">
                  {detail.value}
                </a>
              ) : (
                <div className="text-lg font-medium text-[var(--foreground)]">
                  {detail.value}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Map Container */}
      <div className="rounded-3xl border border-[var(--border-highlight)] overflow-hidden h-[300px] shadow-sm relative filter grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120612.98394432296!2d72.9515082158694!3d19.141543789523295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1bfe7465369%3A0xc3fecff08ebd92ac!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
