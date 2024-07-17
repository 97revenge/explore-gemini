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
      "transition-all transition-colors min-w-md text-black"
    ),
    midnight: callBackTheme(
      "transition-all transition-colors min-w-md text-white"
    ),
    tropical: callBackTheme(
      "transition-all transition-colors min-w-md text-black"
    ),
    streets: callBackTheme(
      "transition-all transition-colors min-w-md text-white"
    ),
  },
};

export const CardTopic = ({ ...props }) => {
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
