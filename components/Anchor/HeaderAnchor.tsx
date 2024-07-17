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
      "transition-all transition-colors current-fill text-blue-500  size-6"
    ),
    midnight: callBackTheme(
      "transition-all transition-colors current-fill text-gray-200  size-6"
    ),
    tropical: callBackTheme(
      "transition-all transition-colors current-fill text-green-500  size-6"
    ),
    streets: callBackTheme(
      "transition-all transition-colors current-fill text-white  size-6"
    ),
  },
};

export const HeaderAnchor = ({ ...props }) => {
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
        className="flex items-center justify-center"
        prefetch={false}
      >
        <AnvilIcon className={styles.container[main]} />
        <span className="sr-only">Explore Gemini</span>
      </Link>
    </>
  );
};
