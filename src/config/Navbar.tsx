export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  navItems: [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Work', href: '/work' },
  { label: 'Resume', href: '/resume' },
] as NavItem[],
};
