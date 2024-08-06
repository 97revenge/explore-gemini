"use client";

import { useEffect, useState } from "react";
import { useThemeContext } from "@/lib/providers/theme";
import { getCookie } from "cookies-next";
import { callBackTheme, StylesSet } from "@/lib/themes/callbackTheme";

export const styles: StylesSet = {
  container: {
    vanilla: callBackTheme(
      "transition-all transition-colors shadow-md  hover:shadow-lg transition-shadow rounded-xl max-h-[700px]"
    ),
    midnight: callBackTheme(
      "transition-all transition-colors shadow-md  hover:shadow-lg transition-shadow rounded-xl"
    ),
    tropical: callBackTheme(
      "transition-all transition-colors bg-card  bg-lime-300 text-card-foreground shadow-md hover:shadow-lg transition-shadow rounded-xl"
    ),
    streets: callBackTheme(
      "transition-all transition-colors shadow-md bg-[#030712] hover:shadow-lg transition-shadow rounded-xl"
    ),
  },
};

export const PrimaryCard = ({ ...props }) => {
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
