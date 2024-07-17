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
      "transition-all transition-colors text-sm font-medium hover:underline underline-offset-4 text-blue-500"
    ),
    midnight: callBackTheme(
      " transition-all transition-colors text-sm font-medium hover:underline underline-offset-4 text-gray-200"
    ),
    tropical: callBackTheme(
      "transition-all transition-colors text-sm font-medium hover:underline underline-offset-4 text-green-600"
    ),
    streets: callBackTheme(
      " transition-all transition-colors text-sm font-medium hover:underline underline-offset-4 text-blue-200"
    ),
  },
};

export const OptionsAnchor = ({ ...props }) => {
  const [main, setMain] = useState<string>("");
  const { theme, switchTheme } = useThemeContext();

  useEffect(() => {
    const _theme = getCookie("theme");

    setMain(String(_theme || "vanilla"));
  }, [switchTheme]);

  return (
    <>
      <Link
        href="#"
        className={styles.container[main]}
        prefetch={false}
        {...props}
      ></Link>
    </>
  );
};
