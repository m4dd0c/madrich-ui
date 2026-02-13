import {
  Palette,
  Layers,
  Square,
  Code2,
  Zap,
  Layout,
  Box,
  Type,
} from "lucide-react";

const features = [
  {
    title: "Tailwind CSS",
    description:
      "Utility-first styling for rapid, flexible, and brutally simple customization.",
    icon: Palette,
    color: "bg-[#FFC900]",
    className: "md:col-span-2",
  },
  {
    title: "Shadcn/UI",
    description:
      "Built on accessible primitives with full ownership—no locked-in styles.",
    icon: Layers,
    color: "bg-card-surface",
  },
  {
    title: "Neo-Brutalism",
    description:
      "Hard borders, sharp corners, and high contrast. Design that refuses to be subtle.",
    icon: Square,
    color: "bg-[#80C551]",
  },
  {
    title: "Developer First",
    description:
      "Clean markup and predictable structure you can drop straight into production.",
    icon: Code2,
    color: "bg-[#E9DCFE] dark:bg-card-surface",
    className: "md:col-span-2",
  },
  {
    title: "Responsive",
    description: "Layouts that adapt perfectly to any device size.",
    icon: Layout,
    color: "bg-card-surface",
  },
  {
    title: "Typography",
    description: "Bold fonts that make a statement.",
    icon: Type,
    color: "bg-[#FF7051]",
    showTypography: true,
  },
  {
    title: "Lightning Fast",
    description:
      "Zero-dependency components with optimized rendering. No bloat, no lag — just speed.",
    icon: Zap,
    color: "bg-[#FFC900]",
  },
];

function Features() {
  return (
    <section className="relative font-grotesk px-6 pt-40 pb-24 overflow-hidden">
      {/* Background decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-foreground mb-6">
            Why This{" "}
            <span className="bg-[#FFC900] px-2 shadow-neo-md border-2 border-foreground inline-block -rotate-2">
              Library
            </span>{" "}
            Exists
          </h2>
          <p className="text-xl font-bold max-w-2xl mx-auto border-2 border-foreground p-4 bg-card-surface shadow-neo-4">
            We stripped away the polish to give you raw, unopinionated, and bold
            building blocks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                                group relative border-3 border-foreground p-8 shadow-neo-lg 
                                hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-4 
                                transition-all duration-200 flex flex-col justify-between
                                ${feature.color} ${feature.className || ""}
                            `}
            >
              <div className="mb-6">
                <div className="bg-card-surface w-14 h-14 border-2 border-foreground flex items-center justify-center shadow-neo-4 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="font-bold text-lg leading-relaxed opacity-90">
                  {feature.description}
                </p>
              </div>

              <div className="self-end">
                <Box className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
