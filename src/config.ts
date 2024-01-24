import {z} from "astro:content";

export const SITE_TITLE = "Robin Marillia | Portfolio.";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const TopicsEnum = z.enum([
    "experiment",
    "project",
    "article",
    "design",
    "code",
    "nextjs",
    "strapi",
    "figma",
    "sveltekit",
    "svelte",
    "solidjs",
    "typescript",
    "planetscale",
]);

const greenClasses = "bg-lime-100 text-lime-800 border-lime-300";
const grayClasses = "bg-slate-200 text-slate-800 border-slate-300";
const blueClasses = "bg-blue-200 text-blue-800 border-blue-300";
const yellowClasses = "bg-yellow-100 text-yellow-800 border-yellow-300";

export const PILLS_DATA = {
  [TopicsEnum.enum.experiment]: {
    title: "Experiment",
    classes: yellowClasses,
  },
  [TopicsEnum.enum.project]: {
    title: "Project",
    classes: greenClasses,
  },
  [TopicsEnum.enum.design]: {
    title: "Design",
    classes: grayClasses,
  },
  [TopicsEnum.enum.code]: {
    title: "Code",
    classes: grayClasses,
  },
  [TopicsEnum.enum.nextjs]: {
    title: "Nextjs",
    classes: grayClasses,
  },
  [TopicsEnum.enum.strapi]: {
    title: "Strapi",
    classes: grayClasses,
  },
  [TopicsEnum.enum.figma]: {
    title: "Figma",
    classes: grayClasses,
  },
  [TopicsEnum.enum.sveltekit]: {
    title: "Svelte kit",
    classes: grayClasses,
  },
  [TopicsEnum.enum.svelte]: {
    title: "Svelte",
    classes: grayClasses,
  },
  [TopicsEnum.enum.solidjs]: {
    title: "Solidjs",
    classes: grayClasses,
  },
  [TopicsEnum.enum.typescript]: {
    title: "Typescript",
    classes: grayClasses,
  },
  [TopicsEnum.enum.planetscale]: {
    title: "Planetscale",
    classes: grayClasses,
  },
  [TopicsEnum.enum.article]: {
    title: "Article",
    classes: blueClasses,
  },
};
