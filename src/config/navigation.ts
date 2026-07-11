export interface NavigationItem {
  title: string;
  href: string;
  showInNavbar: boolean;
  showInFooter: boolean;
}

export const navigation = [
  {
    title: "About",
    href: "/about",
    showInNavbar: true,
    showInFooter: true,
  },
  {
    title: "Projects",
    href: "/projects",
    showInNavbar: true,
    showInFooter: true,
  },
  {
    title: "Blog",
    href: "/blog",
    showInNavbar: true,
    showInFooter: true,
  },
  {
    title: "Contact",
    href: "/contact",
    showInNavbar: true,
    showInFooter: true,
  },
] satisfies NavigationItem[];
