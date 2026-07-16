import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { resumeConfig } from '@/config/Resume';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.fullName}`,
  description: `View and download ${siteConfig.fullName}'s resume.`,
};

export default function ResumePage() {
  return (
    <Container className="pt-8 pb-10">
      <div className="space-y-5">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base">
            My resume.
          </p>
        </div>
        <Separator />
        <div className="mx-auto max-w-2xl">
          <iframe
            src={resumeConfig.url}
            className="min-h-screen w-full"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
