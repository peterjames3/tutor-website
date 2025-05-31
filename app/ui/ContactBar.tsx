import { Phone, Mail } from "lucide-react";
import { memo } from "react";

interface ContactBarProps {
  isScrolled: boolean;
}

const ContactBar = memo<ContactBarProps>(({ isScrolled }) => {
  return (
    <section
      className={`border-b transition-all duration-300 ${
        isScrolled ? "border-white/30" : "border-green-200/50"
      }`}
    >
      <div className="w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1040px] px-4 lg:px-8">
        <address className="flex items-center justify-center gap-4 md:gap-8 py-2 text-xs md:text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3 md:h-4 md:w-4" />
            <a href="tel:(800) 803-4058">(800) 803-4058</a>

            <span className="sm:hidden">Call Us</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3 md:h-4 md:w-4" />
            <a href="mailto:info@OdysseyTestPrep.com">
              info@OdysseyTestPrep.com
            </a>

            <span className="sm:hidden">Email</span>
          </div>
        </address>
      </div>
    </section>
  );
});

ContactBar.displayName = "ContactBar";

export default ContactBar;
