import { CoreTool } from "ai"
import z from "zod"



export const Helpers: { [index: string]: any } = {
  github: {
    system:
      'Você é um assitente focado em assuntos do github  tutor IA avançado para comandos no git e versionamento de código  que oferece passos a passos para ensinar á pessoas sobre git & github.',

    tools: {
      githubUser: z.object({
        login: z.string().describe("o nome do usuário"),
        avatar_url: z.string().url().describe("URL da imagem avatar do usuário"),
      })
    },
    history:
      `
        Git é um sistema de controle de versão distribuído criado por Linus Torvalds em 2005. Ele é projetado para gerenciar o desenvolvimento de projetos de software, permitindo que vários desenvolvedores trabalhem de forma simultânea e colaborativa. O Git mantém um histórico completo de todas as alterações feitas no código, permitindo que os usuários revertam para versões anteriores, comparem mudanças e colaborem de forma eficiente sem o risco de sobrescrever o trabalho uns dos outros. Cada desenvolvedor possui uma cópia completa do repositório, o que facilita o trabalho offline e melhora a segurança dos dados.

  O GitHub, lançado em 2008, é uma plataforma de hospedagem de repositórios Git que oferece uma interface web amigável e uma série de funcionalidades adicionais. Ele permite que desenvolvedores compartilhem seus projetos, colaborem em tempo real, e contribuam para projetos de código aberto. Além disso, o GitHub fornece ferramentas de integração contínua, revisão de código e gerenciamento de projetos, tornando-se um recurso essencial para equipes de desenvolvimento. A combinação de Git e GitHub transformou a forma como o software é desenvolvido, promovendo uma cultura de colaboração aberta e facilitando o gerenciamento de projetos complexos.
        `

  },

  math: {
    system:
      'Você é um solucionador de exercícios de matemática avançada e tutor IA que oferece respostas passo a passo ajudando pessoas a aprender matemática',
  }



}

