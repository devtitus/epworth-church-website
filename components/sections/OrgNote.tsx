import SectionShell from "@/components/ui/SectionShell";
import SectionHeader from "@/components/ui/SectionHeader";
import ParagraphList from "@/components/ui/ParagraphList";
import GlassMediaFrame from "@/components/ui/GlassMediaFrame";

interface OrgNoteProps {
  label?: string;
  title: string;
  content: string[];
  authorName: string;
}

const OrgNote = ({
  label = "Note",
  title,
  content,
  authorName,
}: OrgNoteProps) => {
  return (
    <SectionShell id="org-note-section" labelledBy="org-note-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="order-2 lg:order-1">
          <SectionHeader
            label={label}
            title={title}
            id="org-note-heading"
            className="mb-6"
            labelSpacing="md"
          />
          <ParagraphList paragraphs={content} className="mb-8" />

          <div className="pt-6 border-t border-[var(--color-highlight)]/10">
            <p className="text-base text-[var(--color-secondary-text)] mb-1">
              By
            </p>
            <p className="text-lg font-bold text-[var(--foreground)]">
              {authorName}
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <GlassMediaFrame alt="Organization note illustration" />
        </div>
      </div>
    </SectionShell>
  );
};

export default OrgNote;
