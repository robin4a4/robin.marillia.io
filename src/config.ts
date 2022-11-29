export const SITE_TITLE = "Robin Marillia | Portfolio.";
export const SITE_DESCRIPTION = "Welcome to my website!";

export enum Project {
  Jsimple = "jsimple",
  Solidjs = "solidjs",
  BagstackCli = "bagstack-cli",
  BagstackFigma = "bagstack-figma",
  NathalieMura = "nathalie-mura",
  Techwatch = "techwatch",
  Randomart = "randomart",
}

export enum ProjectPill {
  Experiment = "experiment",
  Project = "project",
  Design = "design",
  Code = "code",
  Nextjs = "nextjs",
  Strapi = "strapi",
  Figma = "figma",
  Sveltekit = "sveltekit",
  Svelte = "svelte",
  Solidjs = "solidjs",
  Typescript = "typescript",
  Planetscale = "planetscale",
}

const greenClasses = "bg-lime-100 text-lime-800 border-lime-300";
const grayClasses = "bg-slate-200 text-slate-800 border-slate-300";
const yellowClasses = "bg-yellow-100 text-yellow-800 border-yellow-300";

export const PILLS_DATA = {
  [ProjectPill.Experiment]: {
    title: "Experiment",
    classes: yellowClasses,
  },
  [ProjectPill.Project]: {
    title: "Project",
    classes: greenClasses,
  },
  [ProjectPill.Design]: {
    title: "Design",
    classes: grayClasses,
  },
  [ProjectPill.Code]: {
    title: "Code",
    classes: grayClasses,
  },
  [ProjectPill.Nextjs]: {
    title: "Nextjs",
    classes: grayClasses,
  },
  [ProjectPill.Strapi]: {
    title: "Strapi",
    classes: grayClasses,
  },
  [ProjectPill.Figma]: {
    title: "Figma",
    classes: grayClasses,
  },
  [ProjectPill.Sveltekit]: {
    title: "Svelte kit",
    classes: grayClasses,
  },
  [ProjectPill.Svelte]: {
    title: "Svelte",
    classes: grayClasses,
  },
  [ProjectPill.Solidjs]: {
    title: "Solidjs",
    classes: grayClasses,
  },
  [ProjectPill.Typescript]: {
    title: "Typescript",
    classes: grayClasses,
  },
  [ProjectPill.Planetscale]: {
    title: "Planetscale",
    classes: grayClasses,
  },
};
