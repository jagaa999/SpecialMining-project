import { twMerge } from "tailwind-merge";
import { generalTheme } from "src/components/special/generalConfig";

export default function PanelMain({ children }: any) {
  return (
    <section
      className={twMerge(
        generalTheme?.containerMain,
        "max-w-4xl py-20",
        generalTheme?.textMain
      )}>
      {children}
    </section>
  );
}
