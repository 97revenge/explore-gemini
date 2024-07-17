"use client";

import { useEffect, useState } from "react";
import { useThemeContext } from "@/lib/providers/theme";
import { getCookie } from "cookies-next";
import { callBackTheme, StylesSet } from "@/lib/themes/callbackTheme";

export const styles: StylesSet = {
  container: {
    vanilla: callBackTheme(
      "bg-white transition-all transition-colors flex flex-col min-h-screen bg-background px-6"
    ),
    midnight: callBackTheme(
      "bg-black transition-all transition-colors flex flex-col min-h-screen bg-background px-6"
    ),
    tropical: callBackTheme(
      "bg-yellow-200 transition-all transition-colors flex flex-col min-h-screen bg-background px-6"
    ),
    streets: callBackTheme(
      "bg-gray-500 transition-all transition-colors flex flex-col min-h-screen bg-background px-6"
    ),
  },
};

export const LayoutContainer = ({ ...props }) => {
  const [main, setMain] = useState<string>("");
  const { theme, switchTheme } = useThemeContext();

  useEffect(() => {
    const _theme = getCookie("theme");

    setMain(String(_theme || "vanilla"));
  }, [switchTheme]);

  return (
    <>
      <div className={styles.container[main]} {...props}></div>
    </>
  );
};
