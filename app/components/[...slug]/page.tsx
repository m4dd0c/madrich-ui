"use client";

import React, { useCallback, useEffect, useState } from "react";
import Example from "@/components/shared/Example";
import Header from "@/components/shared/Header";
import Installation from "@/components/shared/Installation";
import Preview from "@/components/shared/Preview";
import Usage from "@/components/shared/Usage";
import { components } from "@/lib/ui-components";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

const Page = ({ params }: PageProps) => {
  const { slug } = React.use(params);

  const [comp, setComp] = useState<ComponentDetails | null>(null);

  useEffect(() => {
    const slugString = slug.join("/");
    // alert-dialog to AlertDialog
    const slugStringToComponentName = () => {
      return slugString
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    };

    const res = components[slugStringToComponentName()];
    setComp(res ?? null);
  }, [slug]);

  if (!comp) return null;

  return (
    <div className="flex flex-col min-h-screen items-center mt-6 sm:mt-8 md:mt-12 mb-8 sm:mb-10 md:mb-12 gap-4 px-4 sm:px-6 md:px-8">
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
