import React from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { getVariants } from "@/lib/variants";
import { Button } from "@/components/ui/button";

export default function ApiProxy() {
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

  const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, var(--action-color) 0%, transparent 85%)`;

  const lists = [
    {
      icon: "i-mingcute-dashboard-3-line",
      title: "Dashboard",
      content:
        "Record your personal information, token balance, and monthly consumption in detail",
    },
    {
      icon: "i-mingcute-key-2-line",
      title: "Own API Key",
      content: "Create your own API Key to manage and use Le-AI",
    },
    {
      icon: "i-mdi-gas-station-in-use-outline",
      title: "Usage",
      content:
        "Store your API call records for easy review of token consumption",
    },
  ];

  return (
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
        API Proxy
      </motion.h1>
      <motion.p
        viewport={{ once: true }}
        variants={getVariants({ delay: 0.3 })}
        className="my-7 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center"
      >
        Provide reliable <b>OpenAI API Proxy</b> services for users who are
        unable or unable to effectively use an API Key or access the API
      </motion.p>
      <div className="flex flex-col gap-4 lg:gap-8">
        {lists.map((item, index) => (
          <motion.div
            viewport={{ once: true }}
            variants={getVariants({ delay: 0.5 + index * 0.2 })}
            key={item.icon}
            className={cn(
              "border rounded-xl overflow-hidden p-6 lg:p-8 shadow-xl ring-1 relative group flex flex-col-reverse md:flex-row",
              "border-[#ebeaeb] dark:border-[#1e1e1e] text-[#666666] dark:text-[#a1a1a1]",
              "shadow-zinc-500/10 ring-zinc-200/30 dark:shadow-zinc-700/10 dark:ring-zinc-700/30"
            )}
          >
            <div className="flex flex-col justify-center mt-10 md:mt-0">
              <div className="font-bold text-2xl flex items-center gap-2">
                <span className={cn("w-7 h-7", item.icon)} />
                {item.title}
              </div>
              <div className="mt-2.5">{item.content}</div>
              <Button
                className={cn(
                  "rounded-full h-12 px-7 gap-2 text-base md:w-[220px] group/action mt-6 relative",
                  "bg-actionBtn hover:bg-actionBtn border border-[rgba(0,0,0,.1)] text-black",
                  "dark:bg-actionBtnDark dark:hover:bg-actionBtnDark dark:border-[rgba(255,255,255,.1)] dark:text-white"
                )}
                onMouseMove={handleMouseMove}
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 z-10 rounded-full opacity-0 transition-opacity duration-500 group-hover/action:opacity-100"
                  style={{ background }}
                  aria-hidden="true"
                />
                Try it now
                <span className="i-mingcute-arrow-right-circle-line w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover/action:-rotate-45" />
              </Button>
            </div>
            <Image
              className="w-full md:w-2/3 rounded-lg"
              src={`/api-${index + 1}.png`}
              alt={`api-${index + 1}`}
              width={2726}
              height={1322}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
