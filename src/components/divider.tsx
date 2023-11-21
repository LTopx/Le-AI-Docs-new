import React from "react";
import { motion, type Variants } from "framer-motion";

const FADE_UP_ANIMATION_VARIANTS_4: Variants = {
  hidden: { opacity: 0.001, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.25 } },
};

export default function Divider() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS_4}
      className="my-16 flex items-center gap-2"
    >
      <div className="flex-1 h-[1px] bg-[#ebeaeb] dark:bg-[#1e1e1e]" />
      <span className="i-simple-icons-openai text-2xl text-[#a8a8a8] dark:text-[#878787]" />
      <div className="flex-1 h-[1px] bg-[#ebeaeb] dark:bg-[#1e1e1e]" />
    </motion.div>
  );
}
