import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";
import { getVariants } from "@/lib/variants";

export default function FAQ() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="flex flex-col items-center pb-8 lg:pb-16"
    >
      <motion.h1
        viewport={{ once: true }}
        variants={getVariants()}
        className="flex items-center font-bold tracking-tight scroll-m-20 text-5xl lg:text-6xl text-center gap-6"
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.p
        viewport={{ once: true }}
        variants={getVariants({ delay: 0.3 })}
        className="my-7 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center"
      >
        Find answers to your questions about using <b>Le-AI</b>
      </motion.p>
      <motion.div
        viewport={{ once: true }}
        variants={getVariants({ delay: 0.5 })}
        className="w-[570px] max-w-[calc(100vw-2rem)]"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I use it for free?</AccordionTrigger>
            <AccordionContent>
              Yes. Le-AI permanently supports free usage. You just need to
              configure the OpenAI locally and you can use it for free
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I use GPT-4/DALL-E-3?</AccordionTrigger>
            <AccordionContent>
              If your OpenAI API Key has the permissions for GPT-4/DALL-E-3, you
              can use it for free. You can also try purchasing Le-AI Premium to
              unlock features like GPT-4/DALL-E-3.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Will it leak my privacy and data?
            </AccordionTrigger>
            <AccordionContent>
              All data of Le-AI is stored locally on the browser/client and will
              never be actively uploaded.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.div>
  );
}
