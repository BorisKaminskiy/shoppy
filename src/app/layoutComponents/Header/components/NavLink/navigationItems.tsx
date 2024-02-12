export enum ELinks {
  main,
  shop,
  about,
}

export type TNavLink = keyof typeof ELinks;

export type INavigationItem = {
  link: TNavLink;
  title: string;
  href: string;
};

// const asLinkTypes = <T,>(et: { [K in keyof T]: INavigationItem }) => et;

export const navigationItems = [
  {
    link: "main",
    title: "Главная",
    href: "/",
  },
  {
    link: "shop",
    title: "Магазин",
    href: "/shop",
  },
  {
    link: "about",
    title: "О нас",
    href: "/about",
  },
] as INavigationItem[];
