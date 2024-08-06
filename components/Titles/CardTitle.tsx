"use client";

import { SVGProps, useEffect, useState } from "react";
import { useThemeContext } from "@/lib/providers/theme";
import { getCookie } from "cookies-next";
import { callBackTheme, StylesSet } from "@/lib/themes/callbackTheme";

export const styles: StylesSet = {
  container: {
    vanilla: callBackTheme(
      "transition-all transition-colors py-1 text-md text-start  font-bold tracking-tighter text-4xl  md:text-4xl bg-gradient-to-t from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent"
    ),
    midnight: callBackTheme(
      " transition-all transition-colors py-1 text-md text-start  font-bold tracking-tighter text-4xl  md:text-4xl bg-gradient-to-t from-gray-500 via-grat-600 to-gray-700 bg-clip-text text-transparent"
    ),
    tropical: callBackTheme(
      "transition-all transition-colors py-1 text-md text-start  font-bold tracking-tighter text-4xl  md:text-4xl bg-gradient-to-t from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent"
    ),
    streets: callBackTheme(
      " transition-all transition-colors py-1 text-md text-start  font-bold tracking-tighter text-4xl  md:text-4xl bg-gradient-to-t from-gray-600 via-gray-200 to-white bg-clip-text text-transparent"
    ),
  },
};

export const CardTitle = ({ ...props }) => {
  const [main, setMain] = useState<string>("");
  const { theme, switchTheme } = useThemeContext();

  useEffect(() => {
    const _theme = getCookie("theme");

    setMain(String(_theme || "vanilla"));
  }, [switchTheme]);

  return (
    <>
      <span className={styles.container[main]} {...props}></span>
    </>
  );
};
