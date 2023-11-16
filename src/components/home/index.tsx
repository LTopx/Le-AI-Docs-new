import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900">
      <div className="bg-hero pt-[54px]">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold tracking-tight text-4xl scroll-m-20 lg:text-5xl">
            Your AI Assitant Hub
          </h1>
          <p className="mt-9 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center">
            Le-AI is an open-source LLM conversation assistant designed to help
            you improve learning, work, and life efficiency.
            <br />
            It supports <b>Web</b>, <b>Mac</b>, <b>Windows</b> and <b>Linux</b>
          </p>
        </div>
        <div className="flex justify-center gap-4 my-6 h-24 items-center">
          <Button className="rounded-full h-12 px-6 gap-2 text-base group bg-[rgb(23,23,23)] hover:bg-[rgb(56,56,56)]">
            Get Started
            <ArrowRightCircle className="-rotate-45 group-hover:rotate-0 transition-transform" />
          </Button>
          <Button
            className="rounded-full h-12 px-6 gap-2 text-base group hover:bg-[rgb(242,242,242)] text-[rgb(23,23,23)]"
            variant="outline"
          >
            Download
            <Download className="group-hover:animate-bounce" />
          </Button>
        </div>
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
      </div>
    </div>
  );
}
