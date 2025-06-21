"use client";

import type { ThemeConfig } from "antd";
import { ConfigProvider } from "antd";
import {
  getFontSizePx,
  getHexWithOpacity,
  getTailwindValueFromCss,
  oklchToHex,
  remToPx,
} from "atomv2/util/widgetHelper";
import { useEffect, useState } from "react";

function useBrandThemeDefaults() {
  const [colorPrimary, setColorPrimary] = useState("#d1f863");
  const [fontSize, setFontSize] = useState(16);
  const [borderRadius, setBorderRadius] = useState(6);
  const [placeholderColor, setPlaceholderColor] = useState("6B72804C");

  useEffect(() => {
    const colorPrimary = oklchToHex(getTailwindValueFromCss("--color-brand"));
    const baseFont = getFontSizePx(getTailwindValueFromCss("--text-brand"));
    const borderRadius = remToPx(
      getTailwindValueFromCss("--radius-brand"),
      baseFont
    );
    const placeholderColor = getHexWithOpacity(
      String(oklchToHex(getTailwindValueFromCss("--color-muted"))),
      30
    );

    setColorPrimary(colorPrimary || "#d1f863");
    setFontSize(baseFont || 16);
    setBorderRadius(borderRadius || 6);
    setPlaceholderColor(placeholderColor || "#6B72804C");
  }, []);

  return { colorPrimary, fontSize, borderRadius, placeholderColor };
}

export default function AntdThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colorPrimary, fontSize, borderRadius, placeholderColor } =
    useBrandThemeDefaults();

  // console.log("AntdThemeProvider brandColor:", {
  //   colorPrimary: colorPrimary,
  //   fontSize,
  // });

  const theme: ThemeConfig = {
    token: {
      fontFamily: `'Roboto', 'sans-serif'`,
      colorPrimary: colorPrimary,
      colorPrimaryBorder: colorPrimary,
      colorPrimaryActive: colorPrimary,
      colorPrimaryHover: colorPrimary,
      borderRadius: borderRadius,
      fontSize,
      colorTextPlaceholder: placeholderColor,
      controlHeight: 40,
    },
    components: {
      Radio: {
        buttonSolidCheckedActiveBg: colorPrimary,
        buttonSolidCheckedBg: colorPrimary,
        buttonSolidCheckedHoverBg: colorPrimary,
      },
      Input: {
        // paddingBlock: 8, //дээр доороос
        // paddingInline: 12, //хажуу тал
        controlHeight: 40,
      },
    },
  };

  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}
