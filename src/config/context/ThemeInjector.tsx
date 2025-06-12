"use client";

import { useDomain } from "./DomainContext";

export function ThemeInjector({ children }: { children: React.ReactNode }) {
  const { domain } = useDomain();
  const cssVars = getCSSVariableStyle(domain);

  return (
    <>
      <style>{`:root { ${cssVars} }`}</style>
      {children}
    </>
  );
}

function getCSSVariableStyle(domain: string): string {
  try {
    const tokens =
      require(`src/components/domains/${domain}/Theme/tokens`).themeTokens;
    return Object.entries(tokens)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ");
  } catch {
    return "";
  }
}

// "use client";

// import { useDomain } from "./DomainContext";

// export function ThemeInjector({ children }: { children: React.ReactNode }) {
//   const { domain } = useDomain();

//   return (
//     // <div data-block="ThemeInjector" style={getCSSVariables(domain)}>
//     <div data-block="ThemeInjector" className={`theme-${domain}`}>
//       {children}
//     </div>
//   );
// }

// function getCSSVariables(domain: string): React.CSSProperties {
//   try {
//     const tokens =
//       require(`src/components/domains/${domain}/Theme/token`).themeTokens;
//     return tokens;
//   } catch {
//     return {};
//   }
// }
