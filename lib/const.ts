import {
  FileText,
  Scale,
  AlertTriangle,
  Users,
  Ban,
  RefreshCw,
  Gavel,
  Eye,
  Database,
  Lock,
  Globe,
  Bell,
  UserCheck,
} from "lucide-react";

const termsAndConditionsSections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    color: "bg-[#80C551]",
    content: [
      "By accessing and using the Madrich UI website and component library, you accept and agree to be bound by these Terms and Conditions.",
      "If you do not agree to these terms, you should discontinue use of our services immediately.",
      "We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of any changes.",
    ],
  },
  {
    icon: Scale,
    title: "Use License",
    color: "bg-[#FFC900]",
    content: [
      "Madrich UI components are provided for both personal and commercial use in your projects.",
      "You may use, modify, and distribute the components in your own applications without restriction.",
      "You may not redistribute the component library itself as a competing product or template.",
      "Attribution is appreciated but not required when using individual components.",
    ],
  },
  {
    icon: Users,
    title: "User Responsibilities",
    color: "bg-card-surface",
    content: [
      "You agree to use the website and its components in a lawful manner and in compliance with all applicable regulations.",
      "You are responsible for ensuring that your use of our components does not infringe on any third-party intellectual property rights.",
      "You agree not to attempt to disrupt, hack, or compromise the security of our website or services.",
      "Any content you submit through our contact form must not contain malicious, defamatory, or illegal material.",
    ],
  },
  {
    icon: Ban,
    title: "Prohibited Activities",
    color: "bg-[#FF7051]",
    content: [
      "Scraping, crawling, or using automated tools to extract content from the website for competitive purposes.",
      "Impersonating Madrich UI or its creators in any capacity.",
      "Using our services to distribute malware, spam, or any harmful content.",
      "Attempting to reverse engineer, decompile, or extract the source code of proprietary parts of the platform.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Disclaimer of Warranties",
    color: "bg-[#E9DCFE] dark:bg-card-surface",
    content: [
      'Madrich UI components are provided "as is" without any warranties, express or implied.',
      "We do not guarantee that the components will be error-free, uninterrupted, or compatible with all environments.",
      "You assume all responsibility and risk for the use of our components in your applications.",
      "We are not liable for any damages arising from the use or inability to use our components.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Modifications & Updates",
    color: "bg-[#80C551]",
    content: [
      "We may update, modify, or discontinue any part of the Madrich UI library at any time without prior notice.",
      "Component APIs and styling may change between versions. We recommend pinning specific versions in production.",
      "These Terms and Conditions may be revised periodically. The latest version will always be available on this page.",
    ],
  },
  {
    icon: Gavel,
    title: "Governing Law",
    color: "bg-card-surface",
    content: [
      "These terms shall be governed by and construed in accordance with applicable laws.",
      "Any disputes arising from these terms shall be resolved through good-faith negotiation before pursuing formal legal action.",
      "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full effect.",
    ],
  },
];

const primaryPolicySections = [
  {
    icon: Eye,
    title: "Information We Collect",
    color: "bg-[#FFC900]",
    content: [
      "We may collect personal information such as your name and email address when you use our contact form or subscribe to updates.",
      "We automatically collect certain technical data, including browser type, device information, and IP address, to improve our services.",
      "Usage data such as pages visited, time spent, and interactions with components may be collected via analytics tools.",
    ],
  },
  {
    icon: Database,
    title: "How We Use Your Data",
    color: "bg-[#80C551]",
    content: [
      "To respond to inquiries submitted through our contact form.",
      "To improve and optimize the Madrich UI website and component library.",
      "To send occasional updates about new components, features, or releases (only if you opt in).",
      "To analyze usage patterns and enhance user experience.",
    ],
  },
  {
    icon: Lock,
    title: "Data Protection",
    color: "bg-[#E9DCFE] dark:bg-card-surface",
    content: [
      "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction.",
      "Your data is never sold to third parties. We may share anonymized, aggregate data for analytics purposes.",
      "All data transmissions are encrypted using SSL/TLS protocols.",
    ],
  },
  {
    icon: Globe,
    title: "Cookies & Tracking",
    color: "bg-[#FF7051]",
    content: [
      "We use essential cookies to ensure the website functions properly, including theme preferences (dark/light mode).",
      "Analytics cookies may be used to understand how visitors interact with our site. You can opt out of non-essential cookies at any time.",
      "We do not use cookies for advertising or cross-site tracking.",
    ],
  },
  {
    icon: Bell,
    title: "Third-Party Services",
    color: "bg-card-surface",
    content: [
      "Our website may use third-party services such as analytics providers and hosting platforms.",
      "These services have their own privacy policies, and we encourage you to review them.",
      "We use GitHub for version control and community interaction. GitHub's privacy policy applies to interactions on their platform.",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    color: "bg-[#FFC900]",
    content: [
      "You have the right to access, correct, or delete your personal data at any time.",
      "You may opt out of any marketing communications by clicking the unsubscribe link in our emails.",
      "You can request a copy of the data we hold about you by contacting us directly.",
      "If you believe your data has been mishandled, you have the right to lodge a complaint with a supervisory authority.",
    ],
  },
];

export { termsAndConditionsSections, primaryPolicySections };
