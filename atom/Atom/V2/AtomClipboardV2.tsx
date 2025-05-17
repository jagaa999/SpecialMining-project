import { ObjectLight } from "atom/engineBox/types/widgetType";
import _ from "lodash";
import { useState } from "react";
import { useCopyToClipboard } from "react-use";

export default function AtomClipboardV2({
  clipboard,
  value,
}: {
  clipboard?: {
    value?: string;
    objectLight?: ObjectLight;
  };
  value?: any;
}) {
  if (_.isEmpty(clipboard)) return null;

  const [, copyToClipboard] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <i
      className={`far ${
        isCopied ? "fa-clipboard-check" : "fa-clipboard"
      } cursor-pointer ${clipboard?.objectLight?.className}`}
      onClick={() => {
        copyToClipboard(clipboard?.value || value);
        handleCopyClick();
      }}></i>
  );
}
