"use client";

import { useEffect, useState } from "react";
import { useThemeContext } from "@/lib/providers/theme";
import { getCookie } from "cookies-next";
import { callBackTheme, StylesSet } from "@/lib/themes/callbackTheme";
import Link from "next/link";
import { AnvilIcon } from "lucide-react";

export const styles: StylesSet = {
  container: {
    vanilla: callBackTheme(
      "transition-all transition-colors max-w-[700px] mx-auto text-muted-foreground md:text-xl text-blue-800"
    ),
    midnight: callBackTheme(
      "transition-all transition-colors max-w-[700px] mx-auto text-muted-foreground md:text-xl text-gray-500"
    ),
    tropical: callBackTheme(
      "transition-all transition-colors max-w-[700px] mx-auto text-muted-foreground md:text-xl text-green-800"
    ),
    streets: callBackTheme(
      "transition-all transition-colors max-w-[700px] mx-auto text-muted-foreground md:text-xl text-white"
    ),
  },
};

export const IntroParagraph = ({ ...props }) => {
  const [main, setMain] = useState<string>("");
  const { theme, switchTheme } = useThemeContext();

  useEffect(() => {
    const _theme = getCookie("theme");

    setMain(String(_theme || "vanilla"));
  }, [switchTheme]);

  return (
    <>
      <p className={styles.container[main]} {...props}></p>
    </>
  );
};
