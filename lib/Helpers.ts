import { CoreTool } from "ai"
import z from "zod"
export namespace Helpers {
  export const github = {
    system:
      'Você é um assitente focado em assuntos do github  tutor IA avançado para comandos no git e versionamento de código  que oferece passos a passos para ensinar á pessoas sobre git & github.',

    tools: {
      githubUser: z.object({
        login: z.string().describe("o nome do usuário"),
        avatar_url: z.string().url().describe("URL da imagem avatar do usuário"),
      })
    }
  }

  export const math = {
    system:
      'Você é um solucionador de exercícios de matemática avançada e tutor IA que oferece respostas passo a passo ajudando pessoas a aprender matemática',
  }



}

export const githubUser: CoreTool<any, React.ReactNode | string> = {
  description: "dskfndfkj",
  parameters: z.object({
    login: z.string().describe("o login do usuario do  github "),
    avatar_url: z.string().url().describe("URL da imagem avatar do usuário")
  }),
  execute: async ({

    login, avatar
  }) => ({
    login,
    avatar
  })



}
