'use client';

import {useState, useEffect, useRef} from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

interface IpInfo {
  ip: string;
  region: string;
  country: string;
  org: string;
}

export default function ScrambledIP() {
  const [text, setText] = useState("New Delhi, IN");
  const [info, setInfo] = useState<IpInfo | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const frameRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    fetch("http://ip-api.com/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const ip = data.query;
          const isV6 = ip.includes(":");

          if (isV6) {
            fetch("https://api.ipify.org?format=json")
              .then((r) => r.json())
              .then((d) => {
                setInfo({ip: `${ip} / ${d.ip}`, region: data.city, country: data.country, org: data.isp});
              })
              .catch(() => {
                setInfo({ip, region: data.city, country: data.country, org: data.isp});
              });
          } else {
            setInfo({ip, region: data.city, country: data.country, org: data.isp});
          }
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (isHovered && info) {
      frameRef.current = 0;
      const target = info.ip;
      const maxFrames = 20;

      intervalRef.current = setInterval(() => {
        frameRef.current++;
        const progress = frameRef.current / maxFrames;
        const revealCount = Math.floor(target.length * Math.min(progress, 1));

        setText(
          target
            .split("")
            .map((char, i) =>
              i < revealCount
                ? char
                : CHARS[Math.floor(Math.random() * CHARS.length)],
            )
            .join(""),
        );

        if (frameRef.current >= maxFrames) {
          setText(target);
          clearInterval(intervalRef.current);
        }
      }, 50);

      return () => clearInterval(intervalRef.current);
    } else {
      setText("New Delhi, IN");
    }
  }, [isHovered, info]);

  return (
    <TooltipProvider>
    <Tooltip open={isHovered && !!info}>
      <TooltipTrigger
        className="mt-1 inline-block cursor-default text-sm text-muted-foreground transition-colors hover:text-foreground"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        sideOffset={8}
        className="w-fit min-w-44 border border-border/50 bg-card/95 backdrop-blur-md shadow-lg shadow-primary/5"
      >
        {info && (
          <div className="space-y-2 py-1">
            <div className="flex items-center gap-1.5 border-b border-border/30 pb-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">
                Live
              </span>
            </div>
            <div className="space-y-1 font-mono text-xs">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-muted-foreground/60">Location</span>
                <span className="text-foreground">{info.region}, {info.country}</span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-muted-foreground/60">Provider</span>
                <span className="text-foreground">{info.org}</span>
              </div>
            </div>
          </div>
        )}
      </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  );
}
