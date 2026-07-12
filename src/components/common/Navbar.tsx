import {navbarConfig} from "@/config/Navbar";

import Container from "./Container";
import {ThemeToggleButton} from "./ThemeSwitch";
import {TrackedLink} from "./TrackedLink";

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 py-5 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 text-sm">
          {navbarConfig.navItems.map((item) => (
            <TrackedLink
              className="text-foreground/80 transition-colors hover:text-foreground"
              key={item.label}
              href={item.href}
              track={{
                name: "button_click",
                data: {buttonId: item.label, section: "navbar"},
              }}
            >
              {item.label}
            </TrackedLink>
          ))}
        </div>
        <ThemeToggleButton variant="circle" start="top-right" blur />
      </div>
    </Container>
  );
}