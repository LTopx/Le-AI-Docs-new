import React from "react";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
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
  logo,
  project: {
    link: "https://github.com/LTopx/Le-AI",
  },
  chat: {
    link: "https://discord.com",
  },
  // main: ({ children }) => {
  //   return <div className={GeistSans.className}>{children}</div>;
  // },
  // useNextSeoProps() {
  //   const { asPath } = useRouter();
  //   if (asPath !== "/") {
  //     return {
  //       titleTemplate: "%s – LX-UI",
  //     };
  //   }
  // },
  footer: {
    // text: "Nextra Docs Template",
    component: <Footer />,
  },
};

export default config;
