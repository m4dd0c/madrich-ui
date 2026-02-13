import { primaryPolicySections } from "@/lib/const";
import { Mail, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary-bg font-grotesk pt-24 md:pt-28">
      <section className="relative w-full py-16 md:py-24 px-6 bg-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="absolute top-6 right-10 w-20 h-20 bg-[#FFC900] rotate-12 border-3 border-foreground shadow-neo-4 hidden md:block"></div>
        <div className="absolute bottom-6 left-10 w-16 h-16 bg-[#80C551] rounded-full border-3 border-foreground shadow-neo-4 hidden md:block"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-card-surface border-2 border-foreground px-4 py-1.5 shadow-neo-4 transform -rotate-2 mb-8">
            <Shield className="w-4 h-4" />
            <span className="font-bold text-sm tracking-wider uppercase">
              Your Data Matters
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase text-foreground mb-6 leading-none">
            Privacy{" "}
            <span className="bg-foreground text-background px-3 inline-block -rotate-1">
              Policy
            </span>
          </h1>

          <p className="text-lg md:text-xl font-bold max-w-2xl mx-auto">
            We believe in transparency. Here&apos;s exactly how we handle your
            information at Madrich UI.
          </p>

          <div className="mt-6 inline-block bg-card-surface/80 border-2 border-foreground px-4 py-2 shadow-neo-sm">
            <p className="text-sm font-bold text-foreground/70">
              Last Updated: February 13, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        ></div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          {primaryPolicySections.map((section, index) => (
            <div
              key={index}
              className={`${section.color} border-3 border-foreground p-6 md:p-8 shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-4 transition-all duration-200`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-card-surface w-12 h-12 border-2 border-foreground flex items-center justify-center shadow-neo-sm">
                  <section.icon className="h-6 w-6 stroke-[2.5]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-base md:text-lg font-medium leading-relaxed"
                  >
                    <span className="mt-1.5 w-3 h-3 bg-foreground rounded-full border border-foreground flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-foreground text-background border-3 border-foreground p-6 md:p-8 shadow-[6px_6px_0px_0px_#ae7aff]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-hero w-12 h-12 border-2 border-background flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
                <Mail className="h-6 w-6 stroke-[2.5] text-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase">
                Questions?
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium leading-relaxed">
              If you have any questions about this Privacy Policy, feel free to
              reach out to us at{" "}
              <a
                href="mailto:harishsuthar739@gmail.com"
                className="underline text-hero font-bold hover:text-[#FFC900] transition-colors"
              >
                harishsuthar739@gmail.com
              </a>
              . We are committed to protecting your privacy and will respond to
              your inquiry promptly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
