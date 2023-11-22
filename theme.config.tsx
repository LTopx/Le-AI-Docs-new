import React from "react";
import Image from "next/image";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Language from "@/components/language";
import Footer from "@/components/footer";

const logo = (
  <div className="flex h-14 text-2xl gap-2 items-center logo">
    <Image
      className="cursor-pointer"
      src="/logo.png"
      alt="logo"
      width={30}
      height={30}
    />
    <div className="cursor-pointer flex font-extrabold text-transparent items-center select-none">
      <span className="bg-clip-text bg-logo bg-[size:400%] animate-flow">
        Le-AI
      </span>
    </div>
    <style jsx>{`
      .logo {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      .logo:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </div>
);

const config: DocsThemeConfig = {
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta
          name="viewport"
          content="height=device-height ,width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="og:title"
          content={title ? title + " – Le-AI Docs" : "Le-AI Docs"}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        {!!process.env.UMAMI_WEBSITE_ID && (
          <script
            async
            src="https://umami.ltopx.com/script.js"
            data-website-id={process.env.UMAMI_WEBSITE_ID}
          ></script>
        )}
      </>
    );
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  logo,
  project: {
    link: "https://github.com/LTopx/Le-AI",
  },
  chat: {
    link: "https://discord.com",
  },
  // useNextSeoProps() {
  //   const { asPath } = useRouter();
  //   if (asPath !== "/") {
  //     return {
  //       titleTemplate: "%s – LX-UI",
  //     };
  //   }
  // },
  navbar: {
    extraContent: Language,
  },
  footer: {
    component: <Footer />,
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
  ],
};

export default config;
