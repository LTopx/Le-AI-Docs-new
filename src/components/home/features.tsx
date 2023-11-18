import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0.001, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.2 } },
};

export default function Features() {
  const list = [
    {
      icon: "i-mdi-account-off-outline",
      title: "No Login Required",
      content: "No need to log in, can be used directly",
    },
    {
      icon: "i-mdi-coffee-outline",
      title: "Free",
      content: "Provide your OpenAI API Key and you can use it for free",
    },
    {
      icon: "i-mingcute-safety-certificate-line",
      title: "Data Security",
      content: "All data is stored on your device and will be no leakage",
    },
    {
      icon: "i-mingcute-transfer-line",
      title: "Transfer API Service",
      content: "Provide transit API services for convenient use",
    },
    {
      icon: "i-mingcute-chat-2-line",
      title: "Chat Everywhere",
      content: "Includes multi-platform clients can be used in most scenarios",
    },
    {
      icon: "i-mdi-language-markdown-outline",
      title: "Perfect formatting",
      content: "Provides good support for markdown format",
    },
    {
      icon: "i-mdi-update",
      title: "Continuous updates",
      content: "Will continue to iterate and constantly add new features",
    },
    {
      icon: "i-mdi-comment-quote-outline",
      title: "Quick response",
      content: "Respond to feedback in the first instance",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center font-bold tracking-tight scroll-m-20 text-5xl lg:text-6xl text-center gap-6"
      >
        Features
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="my-7 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center"
      >
        <b>Le-AI</b> helps you do more
      </motion.p>
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-y-16 w-full mt-8">
        {list.map((item, index) => (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            key={index}
            className="flex gap-4"
          >
            <div
              className={cn(
                "rounded border w-[30px] h-[30px] flex justify-center items-center flex-shrink-0",
                "border-black/5 bg-black/5 dark:border-white/10 dark:bg-white/10"
              )}
            >
              <span
                className={cn("w-5 h-5", item.icon || "i-mingcute-alert-fill")}
              />
            </div>
            <div>
              <div className="text-lg mb-2 font-medium">{item.title}</div>
              <div className="text-sm text-muted-foreground">
                {item.content}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
