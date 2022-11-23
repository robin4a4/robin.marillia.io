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
}

export const PROJECTS = {
  [Project.Jsimple]: {
    title: "jSimple",
    text: "Reactive javascript library inspired from jQuery, Solid.js and alpine.js. It was design as a companion library for frameworks like Django or laravel.",
    topics: [ProjectPill.Experiment, ProjectPill.Code],
    isLarge: true,
  },
  [Project.Solidjs]: {
    title: "Solidjs docs redesign",
    text: "Redesign of the futur Solidjs docs.",
    topics: [ProjectPill.Project, ProjectPill.Design, ProjectPill.Solidjs],
    isLarge: false,
  },
  [Project.BagstackFigma]: {
    title: "Bagstack figma plugin",
    text: "Creation of a figma plugin that extracts code from figma components.",
    topics: [ProjectPill.Experiment, ProjectPill.Typescript],
    isLarge: true,
  },
  [Project.BagstackCli]: {
    title: "Bagstack-cli",
    text: "CLI that helps bootstrap a front-end typescript project using React, Solid or Svelte.",
    topics: [ProjectPill.Experiment, ProjectPill.Typescript],
    isLarge: false,
  },
  [Project.NathalieMura]: {
    title: "Nathalie-mura.fr",
    text: "Refactoring of Nathalie Mura's website using Nextjs and Strapi CMS.",
    topics: [ProjectPill.Project, ProjectPill.Nextjs, ProjectPill.Strapi],
    isLarge: false,
  },
  [Project.Techwatch]: {
    title: "Techwatch",
    text: "Little app that stores useful links and resources about design and computing.",
    topics: [ProjectPill.Project, ProjectPill.Nextjs, ProjectPill.Strapi],
    isLarge: false,
  },
  [Project.Randomart]: {
    title: "Randomart",
    text: "Random art ideas generator from mokups to instagram stories.",
    topics: [ProjectPill.Project, ProjectPill.Svelte],
    isLarge: false,
  },
};

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
};
