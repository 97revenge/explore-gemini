import { Helpers } from "./lib/Helpers";



export const approvedRoute = ["/chat/github", "/chat/math"]

export const routeConfig: { [key: string]: string } = {
  "github": Helpers.github.system as string,
  "math": Helpers.math.system as string,
};


