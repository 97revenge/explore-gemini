"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AnvilIcon,
  CpuIcon,
  CheckIcon,
  LayersIcon,
  DotIcon,
  SectionIcon,
  CodeIcon,
  SettingsIcon,
  BoltIcon,
  RocketIcon,
  DollarSignIcon,
  FileQuestionIcon,
  FootprintsIcon,
  MoonIcon,
  SunIcon,
  UmbrellaIcon,
} from "lucide-react";

import { useThemeContext } from "@/lib/providers/theme";
import { DropdownTheme } from "./dropdown-theme";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { LayoutContainer as Container } from "../Layouts/LayoutContainer";
import { HeaderAnchor } from "../Anchor/HeaderAnchor";
import { OptionsAnchor as Options } from "../Anchor/OptionsAnchor";
import { IntroTitle } from "../Titles/IntroTitle";
import { IntroParagraph } from "../Paragraph/IntroParagraph";
import { CardTopic } from "../Topics/CardTopic";
import { PrimaryCard } from "../Cards/PrimaryCard";
import { CardTitle } from "../Titles/CardTitle";
import { SVGProps } from "react";
import { IceBreaker } from "./ice-breaker";

export function LandingContainer() {
  const { theme, switchTheme } = useThemeContext();

  return (
    <Container>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <div className="w-[100px]">
          <DropdownTheme>
            <DropdownMenuItem>
              <Button
                onClick={() => switchTheme("vanilla")}
                className="flex items-center gap-2"
              >
                <SunIcon className="h-5 w-5" />
                <span>Vanilla</span>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={() => switchTheme("midnight")}
                className="flex items-center gap-2"
              >
                <MoonIcon className="h-5 w-5" />
                <span>Midnight</span>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={() => switchTheme("tropical")}
                className="flex items-center gap-2"
              >
                <UmbrellaIcon className="h-5 w-5" />
                <span>Tropical</span>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={() => switchTheme("streets")}
                className="flex items-center gap-2"
              >
                <FootprintsIcon className="h-5 w-5" />
                <span>Streets</span>
              </Button>
            </DropdownMenuItem>
          </DropdownTheme>
        </div>
        <HeaderAnchor />
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Options>Models</Options>
          <Options>Pricing</Options>
          <Options>About</Options>
          <Options>Contact</Options>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <IntroTitle>
                Personalize a Gemini com instruções e habilidades em um
                assistente só !
              </IntroTitle>
              <IntroParagraph>
                Descubra e crie versões personalizadas do ChatGPT que combinam
                instruções, conhecimento extra e qualquer combinação de
                habilidades
              </IntroParagraph>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full max-w-[350px]">
                <PrimaryCard>
                  <CardHeader>
                    <PhMathOperationsDuotone />
                    <CardTitle>Matemática</CardTitle>
                    <CardDescription>
                      <CardTopic>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta minus illo quae, voluptate veniam ex a aliquam.
                        Perspiciatis nesciunt delectus debitis alias neque
                        dolorem culpa perferendis, soluta placeat rem ipsa!
                      </CardTopic>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4 text-muted-foreground ">
                      <div className="flex items-center gap-2">
                        <CheckIcon className="inline-block h-4 w-6 text-themes current fill text-green-400  " />
                        <CardTopic>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </CardTopic>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="inline-block h-4 w-6 text-themes current fill text-green-400  " />
                        <CardTopic>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </CardTopic>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="inline-block h-4 w-6 text-themes current fill text-green-400  " />
                        <CardTopic>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </CardTopic>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Learn More</Button>
                  </CardFooter>
                </PrimaryCard>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Unleash the Potential of Gemini 1.5 AI
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Discover how our advanced AI models can transform your business
                and unlock new opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <BoltIcon className="w-12 h-12 text-themes" />
                <h3 className="text-xl font-bold">Unparalleled Performance</h3>
                <p className="text-muted-foreground">
                  Gemini 1.5 AI models deliver industry-leading accuracy and
                  efficiency, powered by cutting-edge deep learning algorithms.
                </p>
              </div>
              <div className="space-y-4">
                <SettingsIcon className="w-12 h-12 text-themes" />
                <h3 className="text-xl font-bold">Customizable Solutions</h3>
                <p className="text-muted-foreground">
                  Tailor our AI models to your specific needs and integrate them
                  seamlessly into your existing workflows.
                </p>
              </div>
              <div className="space-y-4">
                <RocketIcon className="w-12 h-12 text-themes" />
                <h3 className="text-xl font-bold">Accelerate Innovation</h3>
                <p className="text-muted-foreground">
                  Leverage the power of Gemini 1.5 AI to drive transformative
                  change and stay ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    What is Gemini 1.5 AI?
                  </h3>
                  <div className="bg-themes rounded-full p-2 text-themes-foreground">
                    <CpuIcon className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Gemini 1.5 AI is the latest generation of our advanced AI
                  models, offering enhanced capabilities in language processing,
                  computer vision, and multimodal intelligence.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    How can Gemini 1.5 AI benefit my business?
                  </h3>
                  <div className="bg-themes rounded-full p-2 text-themes-foreground">
                    <SettingsIcon className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Gemini 1.5 AI can help streamline your operations, improve
                  decision-making, and unlock new opportunities for growth and
                  innovation across a wide range of industries.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm">
                    Explore Benefits
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    What is the pricing for Gemini 1.5 AI?
                  </h3>
                  <div className="bg-themes rounded-full p-2 text-themes-foreground">
                    <DollarSignIcon className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Our pricing is tailored to your specific needs and use case.
                  Please contact our sales team to discuss a custom plan that
                  fits your budget and requirements.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm">
                    Contact Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Frequently Asked Questions
                  </h3>
                  <div className="bg-themes rounded-full p-2 text-themes-foreground">
                    <FileQuestionIcon className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-base font-semibold">
                      What is the difference between Gemini 1.5 and previous
                      versions?
                    </h4>
                    <p>
                      Gemini 1.5 offers significant improvements in accuracy,
                      efficiency, and cross-domain capabilities compared to
                      earlier versions of our AI models.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">
                      How long does it take to integrate Gemini 1.5 into my
                      systems?
                    </h4>
                    <p>
                      The integration process is highly customizable and can be
                      tailored to your specific requirements. Our team will work
                      closely with you to ensure a smooth and efficient
                      integration.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">
                      Do you offer any training or support for using Gemini 1.5?
                    </h4>
                    <p>
                      Yes, we provide comprehensive training and ongoing support
                      to help you get the most out of our AI models. Our experts
                      are available to assist you every step of the way.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get Started with Gemini 1.5 AI
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Fill out the form below to request a demo or learn more about
                our AI models.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4">
              <form className="grid gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="max-w-lg flex-1"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="max-w-lg flex-1"
                />
                <Textarea
                  placeholder="Message"
                  rows={4}
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Request Demo</Button>
              </form>
            </div>
            <div className="bg-card text-card-foreground shadow-md rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CpuIcon className="h-8 w-8 text-themes" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Gemini 1.5 AI Status
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Current status of the Gemini 1.5 AI models.
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-md p-4 flex items-center gap-4">
                  <div className="bg-themes rounded-full p-2 text-themes-foreground">
                    <CpuIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">GPT Model</h4>
                    <p className="text-sm text-muted-foreground">
                      Status: Online, Operational
                    </p>
                  </div>
                </div>
                <div className="bg-muted rounded-md p-4 flex items-center gap-4">
                  <div className="bg-themes rounded-full p-2 text-themes-foreground">
                    <LayersIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">Vision Model</h4>
                    <p className="text-sm text-muted-foreground">
                      Status: Online, Operational
                    </p>
                  </div>
                </div>
                <div className="bg-muted rounded-md p-4 flex items-center gap-4">
                  <div className="bg-themes rounded-full p-2 text-themes-foreground">
                    <SettingsIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">
                      Multimodal Model
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Status: Online, Operational
                    </p>
                  </div>
                </div>
                <div className="bg-muted rounded-md p-4 flex items-center gap-4">
                  <div className="bg-themes rounded-full p-2 text-themes-foreground">
                    <BoltIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">Performance</h4>
                    <p className="text-sm text-muted-foreground">
                      Status: Optimal, Exceeding Targets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Gemini AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            GitHub
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Twitter
          </Link>
        </nav>
      </footer>
    </Container>
  );
}

export function PhMathOperationsDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="currentColor">
        <path
          d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16"
          opacity=".2"
        ></path>
        <path d="M112 72a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 104H80v-24a8 8 0 0 0-16 0v24H40a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16m48 0h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m64 16h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-61.66-90.34a8 8 0 0 0 11.32 0L184 83.31l18.34 18.35a8 8 0 0 0 11.32-11.32L195.31 72l18.35-18.34a8 8 0 0 0-11.32-11.32L184 60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L172.69 72l-18.35 18.34a8 8 0 0 0 0 11.32"></path>
      </g>
    </svg>
  );
}
