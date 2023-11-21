import React from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getVariants, getSlideVariants } from "@/lib/variants";
import Download from "./download";
import Features from "./features";
import ApiProxy from "./apiProxy";
import FAQ from "./faq";
import Pricing from "./pricing";
import Divider from "../divider";
import Pkg from "../../../package.json";

export function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = React.useCallback(
    ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      const bounds = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - bounds.left);
      mouseY.set(clientY - bounds.top);
    },
    [mouseX, mouseY]
  );

  const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color) 0%, transparent 85%)`;

  return (
    <div className="bg-zinc-50 dark:bg-black relative [--spotlight-color:rgba(14,165,233,0.15)] [--action-color:rgba(68,68,68,0.3)] dark:[--action-color:rgba(153,153,153,0.3)]">
      <div className="pointer-events-none fixed inset-0 select-none bg-[url('/grid-black.svg')] bg-top bg-repeat dark:bg-[url('/grid.svg')] [mask-image:radial-gradient(white,transparent_95%)]"></div>
      <div className="bg-hero dark:bg-heroDark pt-24 mb-6">
        <div className="flex flex-col items-center">
          <motion.h1
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={getVariants()}
            className="font-extrabold tracking-tight scroll-m-20 text-5xl lg:text-6xl text-center"
          >
            AI Assitant Hub
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={getVariants()}
            className="font-extrabold tracking-tight scroll-m-20 text-4xl lg:text-5xl text-center mt-4 flex gap-3"
          >
            <div>With</div>
            <div className="cursor-pointer flex font-extrabold text-transparent items-center select-none">
              <span className="bg-clip-text bg-logo bg-[size:400%] animate-flow">
                Le-AI
              </span>
            </div>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={getVariants({ delay: 0.3 })}
            className="mt-8 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center"
          >
            Le-AI is an open-source LLM conversation assistant designed to help
            you improve learning, work, and life efficiency.
            <br />
            It supports <b>Web</b>, <b>Mac</b>, <b>Windows</b> and <b>Linux</b>
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={getVariants({ delay: 0.6 })}
          className="flex justify-center gap-6 my-6 h-24 items-center"
        >
          <Button
            className={cn(
              "rounded-full h-12 px-7 gap-2 text-base md:w-[220px]",
              "bg-[rgb(23,23,23)] hover:bg-[rgb(56,56,56)]",
              "dark:bg-[rgb(237,237,237)] dark:hover:bg-[rgb(204,204,204)] dark:text-[rgb(10,10,10)]"
            )}
          >
            Get Started
            <span className="i-mdi-web w-5 h-5 lg:w-6 lg:h-6" />
          </Button>
          <Button
            className={cn(
              "rounded-full h-12 px-7 gap-2 text-base group hidden lg:flex border-none w-[220px]",
              "hover:bg-[hsla(0,0%,95%,1)] text-[hsla(0,0%,9%,1)] shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px,rgba(0,0,0,0.04)_0px_2px_2px_0px]",
              "dark:bg-[#0a0a0a] dark:hover:bg-[#1e1e1e] dark:text-[hsla(0,0%,93%,1)] dark:shadow-[rgba(255,255,255,0.145)_0px_0px_0px_1px,rgba(0,0,0,0.16)_0px_1px_2px_0px]"
            )}
            variant="outline"
          >
            Download <b>v{Pkg.version}</b>
            <span className="i-mdi-download w-5 h-5 lg:w-6 lg:h-6 group-hover:animate-bounce" />
          </Button>
        </motion.div>
        <Download />
      </div>
      <div className="mx-auto max-w-6xl px-4 text-[hsla(0,0%,9%,1)] dark:text-[hsla(0,0%,95%,1)] [perspective:2000px]">
        <div className="flex justify-center mt-6 relative animate-imageRotate">
          <Image
            className="rounded-xl max-w-[calc(100vw-2rem)] w-full dark:hidden block"
            src="/snapshot-dark.png"
            alt="snapshot-dark"
            width={2560}
            height={1362}
            priority
          />
          <Image
            className="rounded-md max-w-[calc(100vw-2rem)] w-full dark:block hidden"
            src="/snapshot.png"
            alt="snapshot"
            width={2560}
            height={1362}
          />
        </div>
        <Divider />
        <motion.div
          initial="hidden"
          whileInView="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            viewport={{ once: true }}
            variants={getVariants()}
            className="flex items-center font-bold tracking-tight scroll-m-20 text-5xl lg:text-6xl text-center gap-6"
          >
            <span>Based on</span>
            <Image
              className="mt-1 lg:mt-3 dark:hidden"
              src="/openai.svg"
              alt="openai"
              width={118}
              height={32}
            />
            <Image
              className="mt-1 lg:mt-3 hidden dark:block"
              src="/openai-dark.svg"
              alt="openai-dark"
              width={118}
              height={32}
            />
          </motion.h1>
          <motion.p
            viewport={{ once: true }}
            variants={getVariants({ delay: 0.3 })}
            className="my-7 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center"
          >
            <b>OpenAI</b> can provide the best user experience and the most{" "}
            <b>feature-rich</b> API. Currently, all of our products are built on
            OpenAI.
          </motion.p>
          <div className="w-full grid lg:grid-cols-2 gap-4 lg:gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={getSlideVariants({ delay: 0.5 })}
              className={cn(
                "flex flex-col justify-between border rounded-xl overflow-hidden p-6 lg:p-8 shadow-xl ring-1 relative group select-none",
                "border-[#ebeaeb] dark:border-[#1e1e1e] text-[#666666] dark:text-[#a1a1a1]",
                "shadow-zinc-500/10 ring-zinc-200/30 dark:shadow-zinc-700/10 dark:ring-zinc-700/30"
              )}
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background }}
                aria-hidden="true"
              />
              <div>
                <div className="font-bold text-2xl">GPT-3.5/4</div>
                <div className="mt-2.5">
                  Supports the latest GPT-3.5 and GPT-4 models simultaneously,
                  and responds quickly to help you solve most problems.
                </div>
              </div>
              <div className="mt-8 opacity-90">
                <Image
                  className="rounded-lg dark:hidden pointer-events-none"
                  src="/gpt-3.5-4.png"
                  alt="gpt-3.5-4"
                  width={1534}
                  height={758}
                />
                <Image
                  className="rounded-lg hidden dark:block pointer-events-none"
                  src="/gpt-3.5-4-dark.png"
                  alt="gpt-3.5-4-dark"
                  width={1534}
                  height={758}
                />
              </div>
            </motion.div>
            <motion.div
              initial="right"
              whileInView="visible"
              viewport={{ once: true }}
              variants={getSlideVariants({ delay: 0.7 })}
              className={cn(
                "border rounded-xl overflow-hidden p-6 lg:p-8 shadow-xl ring-1 select-none relative group",
                "border-[#ebeaeb] dark:border-[#1e1e1e] text-[#666666] dark:text-[#a1a1a1]",
                "shadow-zinc-500/10 ring-zinc-200/30 dark:shadow-zinc-700/10 dark:ring-zinc-700/30"
              )}
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background }}
                aria-hidden="true"
              />
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
                  className="rounded-lg dark:hidden pointer-events-none"
                  src="/dall-e-3.png"
                  alt="dall-e-3"
                  width={1534}
                  height={758}
                />
                <Image
                  className="rounded-lg hidden dark:block pointer-events-none"
                  src="/dall-e-3-dark.png"
                  alt="dall-e-3-dark"
                  width={1534}
                  height={758}
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={getSlideVariants({ delay: 0.9 })}
              className={cn(
                "border rounded-xl overflow-hidden p-6 lg:p-8 shadow-xl ring-1 select-none relative group",
                "border-[#ebeaeb] dark:border-[#1e1e1e] text-[#666666] dark:text-[#a1a1a1]",
                "shadow-zinc-500/10 ring-zinc-200/30 dark:shadow-zinc-700/10 dark:ring-zinc-700/30"
              )}
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background }}
                aria-hidden="true"
              />
              <div className="font-bold text-2xl">Text to speech</div>
              <div className="mt-2.5">
                Text-to-speech, 6 different emotionally rich tones to help you
                find the tone you need
              </div>
              <div className="mt-8 opacity-90">
                <Image
                  className="rounded-lg dark:hidden pointer-events-none"
                  src="/tts.png"
                  alt="tts"
                  width={1534}
                  height={758}
                />
                <Image
                  className="rounded-lg hidden dark:block pointer-events-none"
                  src="/tts-dark.png"
                  alt="tts-dark"
                  width={1534}
                  height={758}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <Divider />
        <Features />
        <Divider />
        <ApiProxy />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
      </div>
    </div>
  );
}
