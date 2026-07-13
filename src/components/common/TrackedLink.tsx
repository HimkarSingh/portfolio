"use client";

import {useClickSound} from "@/hooks/use-click-sound";
import {useUmami} from "@/hooks/use-umami";
import type {AnalyticsEvent} from "@/types/analytics";
import Link from "next/link";
import * as React from "react";

type LinkProps = React.ComponentProps<typeof Link>;

export function TrackedLink({
  track,
  onClick,
  ...props
}: LinkProps & {track?: AnalyticsEvent}) {
  const {trackEvent} = useUmami();
  const playClick = useClickSound();

  return (
    <Link
      {...props}
      onClick={(event) => {
        playClick();
        if (track) {
          trackEvent(track);
        }
        onClick?.(event);
      }}
    />
  );
}
