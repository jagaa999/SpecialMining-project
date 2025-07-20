// useHtmlTransform.ts
import {
  workingOnHTMLLightBoxItems,
  workingOnHTMLDetailHeadingH3,
  workingOnHTMLDetailCollapsibleH3,
  workingOnHTMLDetailCollapsible,
} from "atomv2/util/atomHelperV2";
import { decode } from "html-entities";

export function useHtmlTransform({ rawHtml, detailHeading, collapsible }: any) {
  const decoded = decode(rawHtml || "");
  const withLightbox = workingOnHTMLLightBoxItems({ value: decoded });

  const { resultHtml: headingHtml, headingList }: any = detailHeading
    ? workingOnHTMLDetailHeadingH3({ value: withLightbox })
    : { resultHtml: withLightbox, headingList: [] };

  const withCollapsible = collapsible
    ? workingOnHTMLDetailCollapsibleH3({ value: headingHtml })
    : headingHtml;

  const fullyProcessed = workingOnHTMLDetailCollapsible({
    value: withCollapsible,
  });

  return { transformedHtml: fullyProcessed, headingList };
}
