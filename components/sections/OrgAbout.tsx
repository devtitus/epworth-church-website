import SectionShell from "@/components/ui/SectionShell";
import SectionHeader from "@/components/ui/SectionHeader";
import ParagraphList from "@/components/ui/ParagraphList";
import GlassMediaFrame from "@/components/ui/GlassMediaFrame";

interface OrgAboutProps {
  title: string;
  content: string[];
}

const OrgAbout = ({ title, content }: OrgAboutProps) => {
  return (
    <SectionShell id="org-about-section" labelledBy="org-about-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
        <div className="order-1 md:order-1">
          <SectionHeader
            label="About Us"
            title={title}
            id="org-about-heading"
            className="mb-6"
            labelSpacing="md"
          />
          <ParagraphList paragraphs={content} className="mb-8" />
        </div>

        <div className="order-2 md:order-2">
          <GlassMediaFrame alt="About organization illustration" />
        </div>
      </div>
    </SectionShell>
  );
};

export default OrgAbout;
