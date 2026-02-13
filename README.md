<p align="center">
  <h1 align="center">🎨 Madrich UI</h1>
  <p align="center">
    <strong>The neo-brutalist UI library for developers who build bold.</strong>
  </p>
  <p align="center">
    A collection of stunning, accessible, and fully customizable React components with a neo-brutalism design aesthetic — built on <a href="https://nextjs.org">Next.js 15</a>, <a href="https://tailwindcss.com">Tailwind CSS v4</a>, <a href="https://www.radix-ui.com">Radix UI</a>, and <a href="https://ui.shadcn.com">shadcn/ui</a>.
  </p>
  <p align="center">
    <a href="https://x.com/h4rich_"><img src="https://img.shields.io/badge/𝕏-@h4rich_-000?style=for-the-badge&logo=x" alt="Twitter" /></a>
    <a href="https://github.com/h4rich"><img src="https://img.shields.io/badge/GitHub-h4rich-181717?style=for-the-badge&logo=github" alt="GitHub" /></a>
  </p>
</p>

---

## ✨ Features

- **Neo-Brutalism Design** — Hard borders, sharp shadows, high contrast, and bold colors that refuse to be subtle
- **13+ Components** — Accordion, AlertDialog, Avatar, Button, Checkbox, Image Card, Input, Profile Selector, Progress, Select, Switch, Textarea, Tooltip Card
- **Dark / Light Mode** — Built-in theme toggling via `next-themes` with smooth transitions
- **Global Search** — Command dialog (⌘K / Ctrl+K) for fast component navigation
- **Fully Responsive** — Mobile-first layouts with adaptive sidebar, drawer navigation, and touch support
- **Accessible** — Built on Radix UI primitives with proper ARIA attributes and keyboard navigation
- **Code Previews** — Live component previews with syntax-highlighted source code via Prism.js
- **Tailwind CSS v4** — Uses the latest Tailwind with CSS-first configuration and custom design tokens
- **shadcn Registry Compatible** — Components can be distributed via the `shadcn` CLI

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/m4dd0c/madrich-ui.git
cd madrich-ui

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The app will start at **http://localhost:3000** with Turbopack for fast HMR.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📂 Project Structure

```
madrich-ui/
├── app/                        # Next.js App Router
│   ├── (home)/                 # Landing page (Hero, Features, Show, QnA, Contact)
│   │   ├── privacy-policy/     # Privacy policy page
│   │   └── term-condition/     # Terms & conditions page
│   ├── components/             # Component documentation pages
│   │   ├── layout.tsx          # Sidebar + header layout for docs
│   │   └── [...slug]/          # Dynamic route for individual components
│   ├── globals.css             # Global styles, design tokens, custom utilities
│   ├── prism.css               # Syntax highlighting styles
│   └── layout.tsx              # Root layout with fonts & theme provider
├── components/
│   ├── Layout/                 # Page-level layout components
│   │   ├── Header.tsx          # Main navbar with search, theme toggle, socials
│   │   ├── Hero.tsx            # Landing hero section
│   │   ├── Features.tsx        # "Why This Library Exists" feature grid
│   │   ├── Show.tsx            # Component showcase section
│   │   ├── QnA.tsx             # FAQ / Q&A section
│   │   ├── Contact.tsx         # Contact section
│   │   ├── Footer.tsx          # Site footer with links & socials
│   │   ├── LeftSidebar.tsx     # Component docs sidebar navigation
│   │   ├── ComponentHeader.tsx # Component page header
│   │   ├── SearchCommand.tsx   # Global search command dialog
│   │   └── CreatorCard.tsx     # Creator profile card
│   └── shared/                 # Shared doc section renderers
│       ├── Preview.tsx         # Live component preview
│       ├── Installation.tsx    # Installation code snippets
│       ├── Usage.tsx           # Usage examples
│       ├── Example.tsx         # Additional examples
│       ├── RenderCode.tsx      # Syntax-highlighted code block
│       └── Header.tsx          # Section headers
├── registry/new-york/ui/       # The actual UI component source files
│   ├── accordion.tsx
│   ├── alertdialog.tsx
│   ├── avatar.tsx
│   ├── button.tsx
│   ├── checkbox.tsx
│   ├── image-card.tsx
│   ├── input.tsx
│   ├── profile-selector.tsx
│   ├── progress.tsx
│   ├── select.tsx
│   ├── switch.tsx
│   ├── textarea.tsx
│   └── tooltip-card.tsx
├── renders/component/          # Demo components for live previews
├── lib/
│   ├── constants.ts            # Component metadata, code samples & config
│   └── utils.ts                # cn() utility (clsx + tailwind-merge)
├── public/                     # Static assets and images
├── components.json             # shadcn CLI configuration
├── registry.json               # shadcn registry definition
└── package.json
```

---

## 🧩 Components

| Component            | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| **Accordion**        | Collapsible content panels with animated expand/collapse          |
| **Alert Dialog**     | Modal confirmation dialogs with action/cancel buttons             |
| **Avatar**           | User profile images with fallback initials and group display      |
| **Button**           | Versatile button with multiple variants and sizes                 |
| **Checkbox**         | Toggle checkboxes with neo-brutal styling                         |
| **Image Card**       | Cards optimized for displaying images with captions               |
| **Input**            | Text input fields with file, disabled, label, and button variants |
| **Profile Selector** | Interactive avatar-based profile picker with selection list       |
| **Progress**         | Draggable progress bar with percentage thumb indicator            |
| **Select**           | Dropdown selection with search, groups, and labels                |
| **Switch**           | Toggle switches for boolean settings                              |
| **Textarea**         | Multi-line text input fields                                      |
| **Tooltip Card**     | Hoverable tooltip cards with rich content                         |

---

## 🎨 Design System

Madrich UI uses a custom design token system defined in `globals.css`:

- **Hero color**: `#ae7aff` — the signature purple accent
- **Shadow**: `shadow-neo` → `5px 5px 0px 0px #000` — the iconic neo-brutal box shadow
- **Border**: Thick 2-3px borders with `border-foreground`
- **Hover effect**: `translate + shadow removal` for that satisfying press interaction
- **Fonts**: Space Grotesk (body), Press Start 2P (retro accents), Geist (system)
- **Dark mode**: Full oklch-based color palette with automatic switching

---

## 🛠️ Tech Stack

| Technology          | Purpose                             |
| ------------------- | ----------------------------------- |
| **Next.js 15**      | React framework with App Router     |
| **React 19**        | UI rendering                        |
| **Tailwind CSS v4** | Utility-first styling               |
| **Radix UI**        | Accessible headless primitives      |
| **shadcn/ui**       | Component registry system           |
| **next-themes**     | Dark/light mode switching           |
| **Prism.js**        | Syntax highlighting for code blocks |
| **Lucide React**    | Icon library                        |
| **Zod**             | Schema validation                   |
| **Turbopack**       | Fast development server bundler     |
| **Husky**           | Git hooks for code quality          |
| **Prettier**        | Code formatting                     |

---

## 📜 Scripts

| Command               | Description                         |
| --------------------- | ----------------------------------- |
| `pnpm dev`            | Start dev server with Turbopack     |
| `pnpm build`          | Build for production                |
| `pnpm start`          | Start production server             |
| `pnpm lint`           | Run ESLint                          |
| `pnpm registry:build` | Build the shadcn component registry |
| `pnpm pretty:fix`     | Format code with Prettier           |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

---

## 📄 License

© 2025 Madrich UI. All rights reserved.

---

<p align="center">
  Built with 💜 by <a href="https://github.com/h4rich">h4rich</a>
</p>
