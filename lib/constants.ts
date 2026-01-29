import React from "react";
import AccordionDemo from "@/renders/component/AccordionDemo";
import ButtonDemo, { ButtonDemo2, ButtonDemo3 } from "@/renders/component/ButtonDemo";
import AlertDialogDemo from "@/renders/component/AlertDialogDemo";

const components: ComponentsMap = {
  Accordion: {
    title: "Accordion",
    slug: "accordion",
    excerpt:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    sections: {
      preview: {
        render: AccordionDemo,
        code: `
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/registry/new-york/ui/accordion"

const AccordionDemo = () => {
    return (
        <>
            <Accordion type="single" collapsible className="w-full max-w-lg">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='bg-hero'>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default AccordionDemo
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
        "rounded-base overflow-hidden border-2 border-foreground border-b-2 shadow-neo",
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
          "flex flex-1 items-center justify-between text-left text-base text-main-foreground border-foreground focus-visible:ring-[3px] bg-main p-4 font-heading transition-all [&[data-state=open]>svg]:rotate-180 data-[state=open]:rounded-b-none data-[state=open]:border-b-2 disabled:pointer-events-none disabled:opacity-50",
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
} from "@/registry/new-york/ui/accordion"`,

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
    },
  },

  AlertDialog: {
    title: "Alert Dialog",
    slug: "alert-dialog",
    excerpt:
      "A modal dialog that interrupts the user with important content and expects a response.",
    sections: {
      preview: {
        render: AlertDialogDemo,
        code: `
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/new-york/ui/alertdialog"
import { Button } from "@/registry/new-york/ui/button"

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Open</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
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

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import * as React from "react"

import { buttonVariants } from "@/registry/new-york/ui/button"

import { cn } from "@/lib/utils"

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/80 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-center-1/2 data-[state=open]:slide-in-from-center-1/2 fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-base border-2 border-foreground p-6 shadow-neo duration-200",
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-heading", className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-sm font-base text-foreground", className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "neutral" }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
        `,
      },
      usage: {
        code: [
          `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/new-york/ui/alertdialog"
import { Button } from "@/registry/new-york/ui/button"
`,

          ` <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Open</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
`,
        ],
      },
    },
  },

  Button: {
    title: "Button",
    slug: "button",
    excerpt:
      "Displays a button or a component that looks like a button.",
    sections: {
      preview: {
        render: ButtonDemo,
        code: `
import { Button } from "@/registry/new-york/ui/button"

export default function ButtonDemo() {
  return <Button>Button</Button>
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
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-main-foreground bg-hero border-2 border-foreground shadow-neo",
        noShadow: "text-foreground bg-background border-2 border-foreground",
        neutral:
          "bg-secondary-background text-foreground border-2 border-foreground shadow-neo",
        reverse:
          "text-main-foreground bg-main border-2 border-foreground shadow-neo",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

        `,
      },
      usage: {
        code: [
          `import { Button } from '@/components/ui/button'
`,

          `<Button>Default</Button>
`,
        ],
      },
      example: {
        Neutral: {
          render: ButtonDemo2,
          code: `
import { Button } from "@/components/ui/button"

export function ButtonDemo2() {
  return <Button variant="neutral">Button</Button>
}

        `,
        },
        NoShadow: {
          render: ButtonDemo3,
          code: `
import { Button } from "@/components/ui/button"

export function ButtonDemo3() {
  return <Button variant="noShadow">Button</Button>
}

        `,
        },
      },
      
    },
  },





};

interface ComponentsList {
  title: string;
  slug: string;
}

const componentsList: ComponentsList[] = [];

for (const component in components) {
  componentsList.push({
    title: components[component].title,
    slug: components[component].slug,
  });
}

export { components, componentsList };



