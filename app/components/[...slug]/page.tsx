"use client";
import Example from "@/components/shared/Example";
import Header from "@/components/shared/Header";
import Installation from "@/components/shared/Installation";
import Preview from "@/components/shared/Preview";
import Usage from "@/components/shared/Usage";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ComponentDetails, components } from "@/lib/constants";

const Page = ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug[0];
  const [comp, setComp] = useState<null | ComponentDetails>(null);

  useEffect(() => {
    const res = components[slug];
    if (res) setComp(res);
    else setComp(null);
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
