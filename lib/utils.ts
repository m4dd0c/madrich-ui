import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { url } from "./const";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formRegistryUrl = (component: string, registry: string) => {
  switch (registry) {
    case "pnpm":
      return `pnpm dlx shadcn@latest add ${url}r/${component}.json`;
    case "npm":
      return `npx shadcn@latest add ${url}r/${component}.json`;
    case "yarn":
      return `yarn shadcn@latest add ${url}r/${component}.json`;
    case "bun":
      return `bunx --bun shadcn@latest add ${url}r/${component}.json`;
    default:
      return `npx shadcn@latest add ${url}r/${component}.json`;
  }
};

export const formRegistryUrlsObject = (component: string) => {
  return {
    pnpm: formRegistryUrl(component, "pnpm"),
    npm: formRegistryUrl(component, "npm"),
    yarn: formRegistryUrl(component, "yarn"),
    bun: formRegistryUrl(component, "bun"),
  };
};
