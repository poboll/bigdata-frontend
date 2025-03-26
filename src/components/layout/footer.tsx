import Link from "next/link";
import { IconMail, IconQuestionMark, IconStar } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between text-center">
          {/* Contact */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-full bg-card/50 mb-4">
              <IconMail size={32} className="text-foreground/80" />
            </div>
            <p className="text-foreground/80 mb-4 text-center">
              If you have any questions or issues with our project, please contact us
            </p>
            <a href="mailto:i@caiths.com" className="text-foreground hover:text-primary transition-colors">
              i@caiths.com
            </a>
          </div>

          {/* Project Info */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-full bg-card/50 mb-4">
              <IconQuestionMark size={32} className="text-foreground/80" />
            </div>
            <Link
              href="/changelog"
              className="bg-card/80 border border-border px-6 py-2 text-foreground hover:bg-card/100 transition-colors mb-4"
            >
              PROJECT CHANGELOG
            </Link>
            <Link
              href="/privacypolicy"
              className="bg-card/80 border border-border px-6 py-2 text-foreground hover:bg-card/100 transition-colors"
            >
              PRIVACY POLICY
            </Link>
          </div>

          {/* Ratings */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4 gap-2">
              <IconStar size={32} className="text-yellow-500" fill="currentColor" />
              <IconStar size={32} className="text-yellow-500" fill="currentColor" />
              <IconStar size={32} className="text-yellow-500" fill="currentColor" stroke={0.5} />
            </div>
            <p className="text-foreground/80 mb-4">
              Give us rating
            </p>
            <Link
              href="/project-rating"
              className="bg-card/80 border border-border px-6 py-2 text-foreground hover:bg-card/100 transition-colors"
            >
              RATE
            </Link>
          </div>
        </div>

        {/* Cookie Notice */}
        <div className="text-center mt-6 text-foreground/60 text-sm">
          <p>
            By continuing to use this site, you agree to the use of cookies, which store some of your data for a better experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
