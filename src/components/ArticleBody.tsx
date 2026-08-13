import Markdoc, { type Node } from "@markdoc/markdoc";
import * as React from "react";

// Renders Keystatic markdoc content with the site's typography.
export function ArticleBody({ node }: { node: Node }) {
  const rendered = Markdoc.renderers.react(Markdoc.transform(node), React);
  return (
    <div className="[&_h2]:display [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-ink [&_h3]:display [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:text-ink [&_p]:mb-5 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-ink-soft/90 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2 [&_li]:text-lg [&_li]:text-ink-soft/90 [&_a]:text-rouge [&_a]:underline">
      {rendered}
    </div>
  );
}
