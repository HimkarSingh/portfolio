import Link from "next/link";

import {experiences} from "@/config/experience";
import ExperienceItem from "@/components/experience/ExperienceItem";

const PREVIEW_COUNT = 2;

export default function Experience() {
  const preview = experiences.slice(0, PREVIEW_COUNT);

  return (
    <section id="experience">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-7 space-y-7">
          {preview.map((experience) => (
            <ExperienceItem key={experience.role} experience={experience} />
          ))}
        </div>
        {experiences.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/work"
              className="rounded-md border px-6 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Show all work experiences
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
