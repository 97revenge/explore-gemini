"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
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
} from "lucide-react";

import { wx, W } from "windstitch";
import { useContext } from "react";
import { useThemeContext } from "@/lib/providers/theme";

const callBackTheme = (theme: string) => {
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

export const styles: { [key: string]: string } = {
  vanilla: callBackTheme(
    "bg-white transition-all ransition-colors  flex flex-col min-h-dvh bg-background px-6"
  ),
  midnight: callBackTheme(
    "bg-black transition-all ransition-colors  flex flex-col min-h-dvh bg-background px-6"
  ),
  tropical: callBackTheme(
    "bg-yellow-500 transition-all ransition-colors  flex flex-col min-h-dvh bg-background px-6"
  ),
  streets: callBackTheme(
    "bg-gray-500 transition-all ransition-colors  flex flex-col min-h-dvh bg-background px-6"
  ),
};

export function LandingContainer() {
  const { theme, switchTheme } = useThemeContext();

  return (
    <div className={styles[theme]}>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <AnvilIcon className="size-6" />
          <span className="sr-only">Gemini AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Models
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Unlock the Power of Gemini 1.5 AI Models
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Discover the next generation of AI-powered solutions that
                revolutionize your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <CpuIcon className="mr-2 inline-block h-6 w-6 text-themes" />
                    Gemini 1.5 GPT
                  </CardTitle>
                  <CardDescription>
                    Advanced language processing for intelligent communication.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="inline-block h-4 w-4 text-themes" />
                      <span>
                        Contextual understanding and natural language generation
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="inline-block h-4 w-4 text-themes" />
                      <span>Multilingual support for global communication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="inline-block h-4 w-4 text-themes" />
                      <span>Customizable for domain-specific applications</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Learn More</Button>
                </CardFooter>
              </Card>
              <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <LayersIcon className="mr-2 inline-block h-6 w-6 text-themes" />
                    Gemini 1.5 Vision
                  </CardTitle>
                  <CardDescription>
                    Powerful computer vision for intelligent image analysis.
                  </CardDescription>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                      <DotIcon className="w-6 h-6 text-themes-foreground" />
                      <span className="text-sm font-medium">
                        Object Detection
                      </span>
                    </div>
                    <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                      <SectionIcon className="w-6 h-6 text-themes-foreground" />
                      <span className="text-sm font-medium">
                        Image Segmentation
                      </span>
                    </div>
                    <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                      <CodeIcon className="w-6 h-6 text-themes-foreground" />
                      <span className="text-sm font-medium">
                        Image Classification
                      </span>
                    </div>
                    <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                      <SettingsIcon className="w-6 h-6 text-themes-foreground" />
                      <span className="text-sm font-medium">
                        Scene Understanding
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="inline-block h-4 w-4 text-themes" />
                      <span>Object detection and classification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="inline-block h-4 w-4 text-themes" />
                      <span>Image segmentation and scene understanding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="inline-block h-4 w-4 text-themes" />
                      <span>Customizable for industry-specific use cases</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Learn More</Button>
                </CardFooter>
              </Card>
              <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <SettingsIcon className="mr-2 inline-block h-6 w-6 text-themes" />
                    Gemini 1.5 Multimodal
                  </CardTitle>
                  <CardDescription>
                    Integrated AI for seamless cross-domain intelligence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="inline-block h-4 w-4 text-themes" />
                      <span>
                        Combines language, vision, and other modalities
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="inline-block h-4 w-4 text-themes" />
                      <span>
                        Enables advanced reasoning and decision-making
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="inline-block h-4 w-4 text-themes" />
                      <span>
                        Customizable for complex enterprise applications
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Learn More</Button>
                </CardFooter>
              </Card>
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
    </div>
  );
}
