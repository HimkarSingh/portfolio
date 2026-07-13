"use client";

import {useClickSound} from "@/hooks/use-click-sound";
import {useHapticFeedback} from "@/hooks/use-haptic-feedback";
import {useUmami} from "@/hooks/use-umami";
import {ArrowUp} from "lucide-react";
import React from "react";

import {Button} from "../ui/button";

export default function BackToTop() {
  const {triggerHaptic, isMobile} = useHapticFeedback();
  const {trackEvent} = useUmami();
  const playClick = useClickSound();

  const handleClick = () => {
    playClick();
    window.scrollTo({top: 0, behavior: "smooth"});

    trackEvent({
      name: "button_click",
      data: {buttonId: "back_to_top", section: "global"},
    });

    if (isMobile()) {
      triggerHaptic("light");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed right-6 bottom-6 z-50 bg-background md:right-10"
      onClick={handleClick}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="size-4" />
    </Button>
  );
}
