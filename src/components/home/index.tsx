import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Download from "./download";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <div className="bg-hero dark:bg-heroDark pt-24 mb-6">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold tracking-tight scroll-m-20 text-5xl lg:text-6xl text-center">
            AI Assitant Hub
          </h1>
          <p className="mt-8 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center">
            Le-AI is an open-source LLM conversation assistant designed to help
            you improve learning, work, and life efficiency.
            <br />
            It supports <b>Web</b>, <b>Mac</b>, <b>Windows</b> and <b>Linux</b>
          </p>
        </div>
        <div className="flex justify-center gap-6 my-6 h-24 items-center">
          <Button
            className={cn(
              "rounded-full h-12 px-7 gap-2 text-base group",
              "bg-[rgb(23,23,23)] hover:bg-[rgb(56,56,56)]",
              "dark:bg-[rgb(237,237,237)] dark:hover:bg-[rgb(204,204,204)] dark:text-[rgb(10,10,10)]"
            )}
          >
            Get Started
            <span className="i-mdi-web w-5 h-5 lg:w-6 lg:h-6" />
          </Button>
          <Button
            className={cn(
              "rounded-full h-12 px-7 gap-2 text-base group hidden lg:flex border-none",
              "hover:bg-[hsla(0,0%,95%,1)] text-[hsla(0,0%,9%,1)] shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px,rgba(0,0,0,0.04)_0px_2px_2px_0px]",
              "dark:bg-[#0a0a0a] dark:hover:bg-[#1e1e1e] dark:text-[hsla(0,0%,93%,1)] dark:shadow-[rgba(255,255,255,0.145)_0px_0px_0px_1px,rgba(0,0,0,0.16)_0px_1px_2px_0px]"
            )}
            variant="outline"
          >
            Download
            <span className="i-mdi-download w-5 h-5 lg:w-6 lg:h-6 group-hover:animate-bounce" />
          </Button>
        </div>
        <Download />
      </div>
      <div className="mx-auto h-[2000px] max-w-6xl px-4 text-[hsla(0,0%,9%,1)] dark:text-[hsla(0,0%,95%,1)]">
        <div className="flex justify-center mt-6 relative">
          <Image
            className="rounded-xl max-w-[calc(100vw-2rem)] w-full dark:hidden block"
            src="/snapshot-dark.png"
            alt="snapshot-dark"
            width={2560}
            height={1362}
          />
          <Image
            className="rounded-md max-w-[calc(100vw-2rem)] w-full dark:block hidden"
            src="/snapshot.png"
            alt="snapshot"
            width={2560}
            height={1362}
          />
        </div>
        <div className="my-16 flex items-center gap-2">
          <div className="flex-1 h-[1px] bg-[#ebeaeb] dark:bg-[#1e1e1e]" />
          <span className="i-simple-icons-openai text-2xl text-[#a8a8a8] dark:text-[#878787]" />
          <div className="flex-1 h-[1px] bg-[#ebeaeb] dark:bg-[#1e1e1e]" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="flex items-center font-bold tracking-tight scroll-m-20 text-5xl lg:text-6xl text-center gap-6">
            <span>Based on</span>
            <Image
              className="mt-1 lg:mt-3"
              src="/openai.svg"
              alt="openai"
              width={118}
              height={32}
            />
          </h1>
          <p className="my-7 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center">
            <b>OpenAI</b> can provide the best user experience and the most{" "}
            <b>feature-rich</b> API. Currently, all of our products are built on
            OpenAI.
          </p>
          <div className="w-full grid lg:grid-cols-2 gap-4 lg:gap-8">
            <div className="flex flex-col justify-between border rounded-xl border-[#ebeaeb] dark:border-[#1e1e1e] text-[#666666] dark:text-[#a1a1a1] overflow-hidden p-6 lg:p-8">
              <div>
                <div className="font-bold text-2xl">GPT-3.5/4</div>
                <div className="mt-2.5">
                  Supports the latest GPT-3.5 and GPT-4 models simultaneously,
                  and responds quickly to help you solve most problems.
                </div>
              </div>
              <div className="mt-8 opacity-90">
                <Image
                  className="rounded-lg dark:hidden"
                  src="/gpt-3.5-4.png"
                  alt="gpt-3.5-4"
                  width={1534}
                  height={758}
                />
                <Image
                  className="rounded-lg hidden dark:block"
                  src="/gpt-3.5-4-dark.png"
                  alt="gpt-3.5-4-dark"
                  width={1534}
                  height={758}
                />
              </div>
            </div>
            <div className="border rounded-xl border-[#ebeaeb] dark:border-[#1e1e1e] text-[#666666] dark:text-[#a1a1a1] overflow-hidden p-6 lg:p-8">
              <div className="text-2xl">
                <span className="font-bold">DALL-E-3</span>/
                <span>GPT-4V(Coming soon)</span>
              </div>
              <div className="mt-2.5">
                Supports DALL-E-3, allowing you to easily transform your ideas
                into extremely accurate images. Subsequent support for
                GPT-4-Vision will also be provided.
              </div>
              <div className="mt-8 opacity-90">
                <Image
                  className="rounded-lg dark:hidden"
                  src="/dall-e-3.png"
                  alt="dall-e-3"
                  width={1534}
                  height={758}
                />
                <Image
                  className="rounded-lg hidden dark:block"
                  src="/dall-e-3-dark.png"
                  alt="dall-e-3-dark"
                  width={1534}
                  height={758}
                />
              </div>
            </div>
            <div className="border rounded-xl border-[#ebeaeb] dark:border-[#1e1e1e] text-[#666666] dark:text-[#a1a1a1] overflow-hidden p-6 lg:p-8">
              <div className="font-bold text-2xl">Text to speech</div>
              <div className="mt-2.5">
                Text-to-speech, 6 different emotionally rich tones to help you
                find the tone you need
              </div>
              <div className="mt-8 opacity-90">
                <Image
                  className="rounded-lg dark:hidden"
                  src="/tts.png"
                  alt="tts"
                  width={1534}
                  height={758}
                />
                <Image
                  className="rounded-lg hidden dark:block"
                  src="/tts-dark.png"
                  alt="tts-dark"
                  width={1534}
                  height={758}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
