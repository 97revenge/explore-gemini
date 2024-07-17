import { wx } from "windstitch";

export const callBackTheme = (theme: string) => {
  const content = wx({
    variants: {
      themes: {
        theme,
      },
    },
  });

  return content({
    themes: "theme",
  });
};


export type StylesSet = {
  [key: string]: {
    [key: string]: string;
  };
};