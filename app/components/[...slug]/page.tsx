"use client";

import React, { useEffect, useState } from "react";
import Example from "@/components/shared/Example";
import Header from "@/components/shared/Header";
import Installation from "@/components/shared/Installation";
import Preview from "@/components/shared/Preview";
import Usage from "@/components/shared/Usage";
import { components } from "@/lib/constants";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

const Page = ({ params }: PageProps) => {
  const { slug } = React.use(params);

  const [comp, setComp] = useState<ComponentDetails | null>(null);

  useEffect(() => {
    const res = components[slug.join("/")];
    setComp(res ?? null);
  }, [slug]);

  if (!comp) return null;

  return (
    <div className="flex flex-col min-h-screen mt-20">
      <Header title={comp.title} excerpt={comp.excerpt} />
      <Preview
        render={comp.sections.preview.render}
        code={comp.sections.preview.code}
      />
      <Installation
        cli={comp.sections.installation.cli}
        code={comp.sections.installation.code}
      />
      <Usage code={comp.sections.usage.code} />
      <Example examples={comp.sections.example} />
    </div>
  );
};

export default Page;
