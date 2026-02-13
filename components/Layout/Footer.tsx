import Link from "next/link";
import { Social } from "./Header";
import { CreatorCard } from "./CreatorCard";

const links = [
  {
    name: "Components",
    href: "/components",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/term-condition",
  },
];

const Footer = () => {
  return (
    <footer className="w-full font-grotesk border-t-4 border-foreground bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h1 className="text-xl md:text-2xl bg-background font-black cursor-pointer border-[3px] border-foreground p-1.5 px-3 shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150  tracking-wide">
                Madrich UI
              </h1>
            </Link>
            <p className="font-bold text-lg max-w-sm">
              The neo-brutalist UI library for developers who build bold.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <CreatorCard />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-end gap-12 md:gap-24">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-black uppercase border-b-4 border-foreground pb-2 inline-block w-fit">
              Links
            </h3>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold hover:underline hover:text-hero transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-black uppercase border-b-4 border-foreground pb-2 inline-block w-fit">
              Socials
            </h3>
            <Social />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-4 border-foreground bg-foreground p-4">
        <div className="max-w-[1400px] mx-auto flex justify-center items-center gap-4 text-background">
          <p className="font-bold text-sm uppercase tracking-wide">
            © {new Date().getFullYear()} Madrich UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
