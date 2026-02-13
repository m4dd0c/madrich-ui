import { Box, Code, Layers, MousePointer2 } from "lucide-react";
import { Button } from "@/registry/new-york/ui/button";

import AccordionDemo from "@/renders/component/AccordionDemo";
import { AvatarGroupExample } from "@/renders/component/AvatarDemo";
import CheckboxDemo from "@/renders/component/CheckboxDemo";
import ImageCardDemo from "@/renders/component/ImageCardDemo";
import SelectDemo from "@/renders/component/SelectDemo";
import SwitchDemo from "@/renders/component/SwitchDemo";
import { Input } from "@/registry/new-york/ui/input";

function Show() {
  return (
    <section className="relative w-full min-h-screen font-grotesk bg-primary-bg overflow-hidden py-24 px-6 md:px-12">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Title & Info */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-8 lg:sticky lg:top-24 h-fit">
          <div className="inline-flex w-fit items-center text-black gap-2 border-2 border-foreground bg-[#E9DCFE] px-4 py-1.5 text-sm font-bold shadow-neo-4">
            <Box className="h-4 w-4" />
            <span>COMPONENT LIBRARY</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold uppercase leading-[0.9] tracking-tight">
            Built for <br />
            <span className="bg-[#FFC900] px-2 shadow-neo-md border-2 border-foreground inline-block mt-2 rotate-[-2deg]">
              Speed
            </span>{" "}
            &{" "}
            <span className="text-stroke-2 text-transparent md:text-foreground">
              Scale
            </span>
          </h2>

          <p className="text-xl font-medium md:max-w-md border-l-4 border-foreground pl-6 py-2">
            A complete set of neo-brutalist components ready to drop into your
            next project. Accessible, responsive, and boldly different.
          </p>

          <div className="mt-12 p-6 border-2 border-foreground bg-card-surface shadow-neo-lg relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-2 bg-foreground text-background font-bold text-xs">
              NEW
            </div>
            <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
              <Code className="h-5 w-5" />
              Developer Experience
            </h3>
            <p className="text-sm font-medium text-muted-neo mb-4">
              Copy-paste code, customize with Tailwind, and ship faster than
              ever.
            </p>
            <div className="w-full h-2 bg-foreground/15 rounded-full overflow-hidden border border-foreground">
              <div className="h-full bg-[#11A365] w-[85%]"></div>
            </div>
            <div className="mt-2 text-xs font-bold text-right">
              85% COMPLETE
            </div>
          </div>
        </div>

        {/* Right Column: Component Showcase Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Input & Forms */}
          <div className="flex flex-col gap-6 p-6 md:p-8 bg-card-surface border-2 border-foreground shadow-neo-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-4 transition-all duration-200">
            <div className="flex items-center justify-between border-b-2 border-foreground pb-4 mb-2">
              <h4 className="font-bold text-lg uppercase flex items-center gap-2">
                <MousePointer2 className="h-5 w-5" /> Forms
              </h4>
              <div className="flex gap-1">
                <span className="h-3 w-3 rounded-full bg-[#FF7051] border border-foreground"></span>
                <span className="h-3 w-3 rounded-full bg-[#FFC900] border border-foreground"></span>
                <span className="h-3 w-3 rounded-full bg-[#11A365] border border-foreground"></span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid w-full items-center gap-1.5">
                <label className="font-bold text-sm" htmlFor="name">
                  Full Name
                </label>
                <Input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="flex items-center gap-4">
                <CheckboxDemo />
                <span className="font-bold text-sm">Agree to terms</span>
              </div>
              <SwitchDemo />
              <Button className="w-full">Submit</Button>
            </div>
          </div>

          {/* Card 2: Interactive & Feedback */}
          <div className="flex flex-col gap-6 p-6 md:p-8 bg-[#E9DCFE] dark:bg-card-surface border-2 border-foreground shadow-neo-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-4 transition-all duration-200">
            <div className="flex items-center justify-between border-b-2 border-foreground pb-4 mb-2">
              <h4 className="font-bold text-lg uppercase flex items-center gap-2">
                <Layers className="h-5 w-5" /> Feedback
              </h4>
            </div>
            <div className="space-y-6 py-2">
              <div className="p-4 bg-[#80C551] border-2 border-foreground shadow-neo-4">
                <p className="font-bold text-foreground">Action Successful!</p>
                <p className="text-sm font-medium mt-1">
                  Your changes have been saved.
                </p>
              </div>

              <div className="p-4 bg-[#FF7051] border-2 border-foreground shadow-neo-4">
                <p className="font-bold text-foreground">Error</p>
                <p className="text-sm font-medium mt-1">
                  Please check your internet connection.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Content & Layout */}
          <div className="md:col-span-2 flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-[#FFC900] border-2 border-foreground shadow-neo-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-4 transition-all duration-200">
            <div className="md:w-1/2 space-y-6">
              <div className="bg-card-surface p-4 border-2 border-foreground shadow-neo-4">
                <AccordionDemo />
              </div>
              <SelectDemo />
            </div>
            <div className="md:w-1/2 space-y-6 flex flex-col justify-between">
              <div className="bg-card-surface p-6 border-2 border-foreground shadow-neo-4 flex flex-col items-center justify-center gap-4">
                <AvatarGroupExample />
                <p className="text-center text-sm font-bold text-muted-neo">
                  happy developers
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Media */}
          <div className="md:col-span-2 p-6 md:p-8 bg-card-surface border-2 border-foreground shadow-neo-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-4 transition-all duration-200">
            <div className="flex items-center justify-between border-b-2 border-foreground pb-4 mb-6">
              <h4 className="font-bold text-lg uppercase">Media Cards</h4>
            </div>
            <div className="flex justify-center">
              <ImageCardDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Show;
