import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactInfoSection } from "@/data/contactInfoSection";

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-6 h-6 text-[var(--color-highlight)]" />,
  Phone: <Phone className="w-6 h-6 text-[var(--color-highlight)]" />,
  Mail: <Mail className="w-6 h-6 text-[var(--color-highlight)]" />,
  Clock: <Clock className="w-6 h-6 text-[var(--color-highlight)]" />,
};

const ContactInfo = () => {
  return (
    <div className="space-y-6 md:space-y-8 lg:space-y-12">
      <div className="space-y-6">
        {contactInfoSection.details.map((detail, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--border-highlight)] transition-colors hover:bg-[var(--card-shade)]"
            style={{ background: "rgba(211, 213, 215, 0.1)" }}
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-[var(--accent-5)] text-[var(--accent-1)]">
              {iconMap[detail.icon]}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary-text)] mb-1">
                {detail.label}
              </p>
              {detail.action ? (
                <a
                  href={detail.action}
                  className="text-base sm:text-lg font-medium text-[var(--foreground)] hover:text-[var(--color-highlight)] transition-colors break-words"
                >
                  {Array.isArray(detail.value)
                    ? detail.value.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < detail.value.length - 1 && <br />}
                        </span>
                      ))
                    : detail.value}
                </a>
              ) : (
                <div className="text-base sm:text-lg font-medium text-[var(--foreground)] break-words">
                  {Array.isArray(detail.value)
                    ? detail.value.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < detail.value.length - 1 && <br />}
                        </span>
                      ))
                    : detail.value}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Map Container */}
      <div className="rounded-3xl border border-[var(--border-highlight)] overflow-hidden h-[250px] sm:h-[300px] shadow-sm relative filter grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src={contactInfoSection.map.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={contactInfoSection.map.title}
        />
      </div>
    </div>
  );
};

export default ContactInfo;