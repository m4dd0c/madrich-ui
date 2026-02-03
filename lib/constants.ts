import React from "react";
import AccordionDemo from "@/renders/component/AccordionDemo";
import ButtonDemo, { ButtonDemo2, ButtonDemo3 } from "@/renders/component/ButtonDemo";
import AlertDialogDemo from "@/renders/component/AlertDialogDemo";
import CheckboxDemo from "@/renders/component/CheckboxDemo";
import AvatarDemo, { AvatarGroupCountExample, AvatarGroupExample } from "@/renders/component/AvatarDemo";
import ImageCardDemo from "@/renders/component/ImageCardDemo";
import InputDemo, { InputDisabledDemo, InputFileDemo, InputWithLabelDemo, InputWithButtonDemo } from "@/renders/component/InputDemo";
import ProgressDemo from "@/renders/component/ProgressDemo";
import SelectDemo, { SelectDemo2, SelectDemo3, SelectDemo4 } from "@/renders/component/SelectDemo";
import SwitchDemo from "@/renders/component/SwitchDemo";

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

  Avatar: {
    title: "Avatar",
    slug: "avatar",
    excerpt:
      "An image element with a fallback for representing the user.",
    sections: {
      preview: {
        render: AvatarDemo,
        code: `
import {Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'

const AvatarDemo = () => {
  return (
   <>
   <Avatar className='outline-foreground'>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
   </>
  )
}
export default AvatarDemo



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

import * as AvatarPrimitive from "@radix-ui/react-avatar"

import * as React from "react"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-12 shrink-0 overflow-hidden rounded-full outline-2 outline-background",
        className,
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}


function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "*:data-[slot=avatar]:ring-background group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2",
        className
      )}
      {...props}
    />
  )
}



function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-secondary-background text-foreground font-base",
        className,
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "bg-hero text-foreground ring-background relative flex size-12 shrink-0 items-center justify-center rounded-full text-sm ring-2 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage,AvatarGroup, AvatarFallback, AvatarGroupCount }

        `,
      },
      usage: {
        code: [
          `import {Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
`,

          `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

`,
        ],
      },
      example: {
        AvatarGroup: {
          render: AvatarGroupExample,
          code: `
import { AvatarGroup,Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'

export function AvatarGroupExample() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}



        `,
        },
        AvatarGroupCount: {
          render: AvatarGroupCountExample,
          code: `
import { AvatarGroup,Avatar, AvatarFallback,AvatarGroupCount, AvatarImage } from '@/registry/new-york/ui/avatar'

export function AvatarGroupCountExample() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  )
}



        `,
        },
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
import { Button } from "@/registry/new-york/ui/button"


export function ButtonDemo2() {
  return <Button variant="neutral">Button</Button>
}

        `,
        },
        NoShadow: {
          render: ButtonDemo3,
          code: `
import { Button } from "@/registry/new-york/ui/button"

export function ButtonDemo3() {
  return <Button variant="noShadow">Button</Button>
}

        `,
        },
      },

    },
  },

  Checkbox: {
    title: "Checkbox",
    slug: "checkbox",
    excerpt:
      "A control that allows the user to toggle between checked and not checked.",
    sections: {
      preview: {
        render: CheckboxDemo,
        code: `
import { Checkbox } from '@/registry/new-york/ui/checkbox'

const CheckboxDemo = () => {
    return (
        <> <Checkbox />  </>
    )
}

export default CheckboxDemo
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

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import * as React from "react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-5 shrink-0 outline-2 outline-foreground ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-hero data-[state=checked]:text-foreground",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="size-4 text-main-foreground" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }


        `,
      },
      usage: {
        code: [
          `import { Checkbox } from '@/registry/new-york/ui/checkbox'
`,

          `<Checkbox />
`,
        ],
      },

    },
  },

  ImageCard: {
    title: "Image Card",
    slug: "image-card",
    excerpt:
      "A card component optimized for displaying images with captions.",
    sections: {
      preview: {
        render: ImageCardDemo,
        code: `
import ImageCard from '@/registry/new-york/ui/image-card'

const ImageCardDemo = () => {
  return (
   <>
    <ImageCard
      caption="Image"
      imageUrl="https://storage.googleapis.com/pod_public/750/270384.jpg"
    ></ImageCard>
   </>
  )
}

export default ImageCardDemo



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
import { cn } from "@/lib/utils"

type Props = {
  imageUrl: string
  caption: string
  className?: string
}

export default function ImageCard({ imageUrl, caption, className }: Props) {
  return (
    <figure
      className={cn(
        "w-[250px] overflow-hidden rounded-base border-2 border-foreground font-base shadow-neo",
        className,
      )}
    >
      <img className="w-full aspect-4/3 object-cover object-top " src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-main-foreground border-foreground p-4">
        {caption}
      </figcaption>
    </figure>
  )
}


        `,
      },
      usage: {
        code: [
          `import ImageCard from '@/registry/new-york/ui/image-card'
`,

          ` <ImageCard
        caption="Image"
        imageUrl="https://storage.googleapis.com/pod_public/750/270384.jpg">
</ImageCard>
`,
        ],
      },

    },
  },

  Input: {
    title: "Input",
    slug: "input",
    excerpt:
      "Displays a form input field or a component that looks like an input field.",
    sections: {
      preview: {
        render: InputDemo,
        code: `
import { Input } from '@/registry/new-york/ui/input'

const InputDemo = () => {
  return (
    <>
    <Input className="w-[200px]" type="email" placeholder="Email" />
    </>
  )
}
export default InputDemo



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
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex shadow-neo h-10 w-full rounded-base border-2 border-foreground bg-secondary-background selection:bg-main selection:text-main-foreground px-3 py-2 text-sm font-base text-foreground file:border-0 file:bg-transparent file:text-sm file:font-heading placeholder:text-foreground/50 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

export { Input }


        `,
      },
      usage: {
        code: [
          `import { Input } from '@/registry/new-york/ui/input'
`,

          `<Input className="w-[200px]" type="email" placeholder="Email" />
`,
        ],
      },
      example: {
        File: {
          render: InputFileDemo,
          code: `
import { Input } from '@/registry/new-york/ui/input'

export const InputFileDemo = () => {
  return (
    <div className="grid w-full max-w-64 items-center gap-1.5">
      <label className='font-semibold' htmlFor="picture">Picture</label>
      <Input id="picture" type="file" />
    </div>
  )
}



        `,
        },
        Disabled: {
          render: InputDisabledDemo,
          code: `
import { Input } from '@/registry/new-york/ui/input'

export const InputDisabledDemo = () => {
  return (
    <Input
      className="max-w-[200px]"
      type="email"
      placeholder="Email"
      disabled
    />
  )
}


        `,
        },
        WithLabel: {
          render: InputWithLabelDemo,
          code: `
import { Input } from '@/registry/new-york/ui/input'

export const InputWithLabelDemo = () => {
  return (
    <div className="grid max-w-[200px] items-center gap-1.5">
      <label className='font-semibold' htmlFor="email">Email</label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}



        `,
        },

        WithButton: {
          render: InputWithButtonDemo,
          code: `
import { Button } from "@/registry/new-york/ui/button"
import { Input } from '@/registry/new-york/ui/input'

export  const InputWithButtonDemo = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-4">
      <Input type="email" placeholder="Email" />
      <Button variant="default" type="submit">
        Subscribe
      </Button>
    </div>
  )
}


        `,
        },
      },

    },
  },

  Progress: {
    title: "Progress",
    slug: "progress",
    excerpt:
      "Displays an indicator showing the completion progress of a task.",
    sections: {
      preview: {
        render: ProgressDemo,
        code: `
"use client"

import * as React from "react"
import { Progress } from "@/registry/new-york/ui/progress"


const ProgressDemo = () => {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            <Progress value={progress} className="w-[60%]" />
        </>
    )
}

export default ProgressDemo



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

import * as ProgressPrimitive from "@radix-ui/react-progress"

import * as React from "react"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  value?: number
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full  border-2 border-foreground bg-secondary-background",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 border-r-2 border-foreground bg-hero rounded-full transition-all"
        style={{ transform: "translateX(-" + (100 - (value || 0)) + "%)" }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

        `,
      },
      usage: {
        code: [
          `import * as React from "react"
import { Progress } from "@/registry/new-york/ui/progress"
`,

          `const [progress, setProgress] = React.useState(13)

        React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
`,
          `<Progress value={progress} className="w-[60%]" />
`
        ],
      },

    },
  },

  Select: {
    title: "Select",
    slug: "select",
    excerpt:
      "Displays a list of options for the user to pick from.",
    sections: {
      preview: {
        render: SelectDemo,
        code: `
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"


const SelectDemo = () => {
  return (
      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectDemo


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

import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import * as React from "react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex h-10 w-full shadow-neo items-center justify-between rounded-base border-2 border-foreground bg-hero gap-2 px-3 py-2 text-sm font-base text-foreground placeholder:text-foreground/50 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="size-4" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up"
      className={cn(
        "flex cursor-default text-main-foreground font-base items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronUp className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down"
      className={cn(
        "flex cursor-default text-main-foreground font-base items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronDown className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50  max-h-96 min-w-[8rem] overflow-hidden rounded-base border-2 border-foreground bg-hero text-main-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
          position === "popper" &&
            "data-[side=bottom]:translate-y-3 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "border-2 border-transparent py-1.5 pr-8 pl-2 text-sm font-base text-main-foreground/80",
        className,
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center gap-2 rounded-base py-1.5 pr-8 pl-2 text-sm border-2 border-transparent font-base outline-none focus:border-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("-mx-1 my-1 h-px bg-hero", className)}
      {...props}
    />
  )
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}


        `,
      },
      usage: {
        code: [
          `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
`,

   ` <Select>
      <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
</Select>
`,
        ],
      },
      example: {
        LargeList: {
          render: SelectDemo2,
          code: `
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"


export  function SelectDemo2() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Large List" />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 100 }).map((_, i) => (
          <SelectItem key={i} value={"item-" + i}>
            Item {i}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}


        `,
        },
        Disabled: {
          render: SelectDemo3,
          code: `
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

export  function SelectDemo3() {
  return (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>
          Grapes
        </SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  )
}



        `,
        },

          WithIcon: {
          render: SelectDemo4,
          code: `
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CircleDashed,
} from "lucide-react"

export  function SelectDemo4() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={
            <>
              <CircleDashed />
              With Icon
            </>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="line">
          <ChartLineIcon />
          Line
        </SelectItem>
        <SelectItem value="bar">
          <ChartBarIcon />
          Bar
        </SelectItem>
        <SelectItem value="pie">
          <ChartPieIcon />
          Pie
        </SelectItem>
      </SelectContent>
    </Select>
  )
}


        `,
        },
      },

    },
  },

  Switch: {
    title: "Switch",
    slug: "switch",
    excerpt:
      "A toggle switch alternative to a checkbox.",
    sections: {
      preview: {
        render: SwitchDemo,
        code: `
import React from 'react'
import { Switch } from "@/registry/new-york/ui/switch"

const SwitchDemo = () => {
  return (
      <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode" className='font-semibold'>Airplane Mode</label>
    </div>
  )
}

export default SwitchDemo



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

import * as SwitchPrimitive from "@radix-ui/react-switch"

import * as React from "react"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-12  shrink-0 cursor-pointer items-center rounded-full border-2 border-foreground bg-secondary-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-hero data-[state=unchecked]:bg-secondary-background",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background border-2 border-foreground ring-0 transition-transform duration-200 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1",
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }

        `,
      },
      usage: {
        code: [
          `
import { Switch } from "@/registry/new-york/ui/switch"
`,

          ` <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode" className='font-semibold'>Airplane Mode</label>
</div>
`,
        ],
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



