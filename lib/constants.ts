import React from "react";
import ButtonDemo from "../renders/component/ButtonDemo";

const components: ComponentsMap = {
  accordion: {
    title: "Accordion",
    excerpt:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    sections: {
      preview: {
        render: ButtonDemo,
        code: `
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
        `,
      },
      installation: {
        cli: {
          pnpm: "pnpm dlx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          npm: "npx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          yarn: "npx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          bun: "bunx --bun shadcn@latest add https://neobrutalism.dev/r/accordion.json",
        },
        code: `
"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-base overflow-hidden border-2 border-b border-border shadow-shadow",
        className,
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between text-left text-base text-main-foreground border-border focus-visible:ring-[3px] bg-main p-4 font-heading transition-all [&[data-state=open]>svg]:rotate-180 data-[state=open]:rounded-b-none data-[state=open]:border-b-2 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="pointer-events-none size-5 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden rounded-b-base bg-secondary-background text-sm font-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("p-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

AccordionContent.displayName = AccordionPrimitive.Content.displayName
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
        `,
      },
      usage: {
        code: [
          `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"`,

          `<Accordion type="single" collapsible className="w-full max-w-xl">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
        ],
      },
      example: {
        default: {
          render: ButtonDemo,
          code: `
import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return <Button>Button</Button>
}
        `,
        },
      },
    },
  },
};

const componentsList = Object.keys(components)
export { components, componentsList };



