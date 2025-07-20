import { useCounter, useToggle } from "react-use";
import Lightbox, { Plugin as YARLPlugin } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import RenderAtom from "../Atoms/RenderAtom";
import { processCloudinaryImage } from "atomv2/util/imagehelper";

const plugins: YARLPlugin[] = [Captions, Fullscreen, Thumbnails, Zoom];

export default function BlockLightbox2({
  title = "",
  htmlContent,
  children,
}: {
  title?: string;
  htmlContent: string;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useToggle(false);
  const [current, { set: setIndex }] = useCounter(0);

  const images = extractImagesFromHTML(htmlContent, title);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLImageElement;
    if (target?.tagName === "IMG") {
      const src = target.getAttribute("src");
      const idx = images.findIndex(
        (img) =>
          processCloudinaryImage(img.src, "w_500") === src || img.src === src
      );
      if (idx >= 0) {
        setIndex(idx);
        setIsOpen(true);
      }
    }
  };

  return (
    <>
      <div onClick={handleClick}>{children}</div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={current}
        slides={images}
        plugins={plugins}
        carousel={{ finite: true }}
        animation={{ fade: 250, swipe: 500 }}
        render={{
          thumbnail: ({ slide }) => (
            <RenderAtom
              value={slide.src}
              type="image"
              cloudinaryParam="w_250"
            />
          ),
        }}
      />
    </>
  );
}

function extractImagesFromHTML(html: string, title: string) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const nodes = doc.querySelectorAll("img");
  return Array.from(nodes).map((img) => ({
    src: img.src,
    alt: img.alt || "",
    title: title || img.alt || "",
  }));
}
