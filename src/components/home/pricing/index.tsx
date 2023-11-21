import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Tokens from "./tokens";

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0.001, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.2 } },
};

export default function Pricing() {
  return (
    <div className="flex flex-col items-center pb-8 lg:pb-16">
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center font-bold tracking-tight scroll-m-20 text-5xl lg:text-6xl text-center gap-6"
      >
        Pricing
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="my-7 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center"
      >
        <b>Unlock</b> features, Support future development
      </motion.p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="border border-[#eaeaea] dark:border-[#333] bg-white dark:bg-black p-8 rounded-lg flex flex-col justify-between gap-20 lg:mt-8"
        >
          <div>
            <div className="text-xl font-bold">Hobby</div>
            <div className="text-4xl font-bold mt-4">$0</div>
            <div className="mt-8 text-[#666666] dark:text-[#a1a1a1] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0" />
                <span>
                  <b>Free</b> to use
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0" />
                <span>Use your own API Key</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0" />
                <span>Basic Chat Features</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0" />
                <div>
                  <Link href="" className="underline">
                    Use Le-AI API
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0" />
                <span>
                  Register and get 20,000 Tokens for free, Access to{" "}
                  <b>GPT-3.5</b>
                </span>
              </div>
            </div>
          </div>
          <Button
            className={cn(
              "rounded-full w-full text-base h-12 flex items-center gap-2.5 group",
              "bg-white border-black border text-black hover:text-white",
              "dark:bg-black dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white"
            )}
          >
            Get stared for free
            <span className="i-mdi-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </Button>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="border border-[#eaeaea] dark:border-[#333] bg-white dark:bg-black p-8 rounded-lg flex flex-col justify-between gap-20"
        >
          <div>
            <div className="text-xl font-bold">Premium</div>
            <div className="flex items-end gap-1 mt-4">
              <div className="text-4xl font-bold flex">
                <div>$16.99</div>
              </div>
              <div className="text-muted-foreground line-through">$36.99</div>
            </div>
            <div className="mt-8 text-[#666666] dark:text-[#a1a1a1] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0" />
                <span>All Hobby Plan features</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0" />
                <span>
                  Gifted <b>500,000</b> Le-AI API Tokens
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0" />
                <span>
                  Purchase Tokens and receive an <b>additional 20%</b> as a
                  bonus
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0" />
                <span>
                  <b>GPT-4</b> is available
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0" />
                <span>Lifetime license</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Button
              className={cn(
                "rounded-full w-full text-base h-12 flex items-center gap-2.5 group relative z-10",
                "bg-[#161616] hover:bg-white border border-[#161616] hover:text-[#161616]",
                "dark:bg-[#ededed] dark:text-[rgb(10,10,10)] dark:hover:bg-black dark:hover:text-white"
              )}
            >
              <span className="relative">Get stared</span>
              <span className="i-mdi-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </Button>
            <div className="absolute inset-0 rounded-full blur-[7px] bg-black opacity-50 dark:bg-white dark:opacity-60" />
          </div>
        </motion.div>
        <Tokens />
      </div>
    </div>
  );
}
