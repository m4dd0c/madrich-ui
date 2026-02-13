import { termsAndConditionsSections } from "@/lib/const";
import { Gavel, Mail } from "lucide-react";

export default function TermConditionPage() {
  return (
    <div className="min-h-screen bg-primary-bg font-grotesk pt-24 md:pt-28">
      <section className="relative w-full py-16 md:py-24 px-6 bg-[#FFC900] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="absolute top-8 left-10 w-16 h-16 bg-[#FF7051] rotate-45 border-3 border-foreground shadow-neo-4 hidden md:block"></div>
        <div className="absolute bottom-8 right-12 w-20 h-20 bg-hero rounded-full border-3 border-foreground shadow-neo-4 hidden md:block"></div>
        <div className="absolute top-1/2 right-[15%] w-12 h-12 bg-[#80C551] border-3 border-foreground shadow-neo-sm hidden lg:block"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-card-surface border-2 border-foreground px-4 py-1.5 shadow-neo-4 transform rotate-1 mb-8">
            <Gavel className="w-4 h-4" />
            <span className="font-bold text-sm tracking-wider uppercase">
              Legal Stuff
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase text-foreground mb-6 leading-none">
            Terms &{" "}
            <span className="bg-foreground text-background px-3 inline-block rotate-1">
              Conditions
            </span>
          </h1>

          <p className="text-lg md:text-xl font-bold max-w-2xl mx-auto">
            The rules of engagement for using Madrich UI. Straightforward, no
            legal jargon — just the essentials.
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

        <div className="absolute top-40 left-[-20px] w-24 h-24 bg-[#E9DCFE] rounded-full border-3 border-foreground shadow-neo-4 hidden lg:block"></div>
        <div className="absolute bottom-40 right-[-15px] w-20 h-20 bg-[#FFC900] rotate-12 border-3 border-foreground shadow-neo-4 hidden lg:block"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-8">
            {termsAndConditionsSections.map((section, index) => (
              <div
                key={index}
                className={`${section.color} border-3 border-foreground p-6 md:p-8 shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-4 transition-all duration-200 relative`}
              >
                <div className="absolute -top-4 -left-3 w-10 h-10 bg-foreground text-background border-2 border-foreground rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#ae7aff]">
                  <span className="font-black text-sm">{index + 1}</span>
                </div>

                <div className="flex items-center gap-3 mb-5 pt-1">
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
          </div>

          <div className="mt-8 bg-foreground text-background border-3 border-foreground p-6 md:p-8 shadow-[6px_6px_0px_0px_#FFC900]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FFC900] w-12 h-12 border-2 border-background flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
                <Mail className="h-6 w-6 stroke-[2.5] text-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase">
                Get in Touch
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <a
                href="mailto:harishsuthar739@gmail.com"
                className="underline text-[#FFC900] font-bold hover:text-hero transition-colors"
              >
                harishsuthar739@gmail.com
              </a>
              . We&apos;re happy to clarify anything and ensure a smooth
              experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
