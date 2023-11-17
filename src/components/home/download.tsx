import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Item = {
  platform: string;
  icon: string;
};

export default function Download() {
  const [isHover, setIsHover] = React.useState(false);

  const lists: Item[] = [
    {
      platform: "Mac",
      icon: "i-mingcute-appstore-fill",
    },
    {
      platform: "Windows",
      icon: "i-mingcute-windows-fill",
    },
    {
      platform: "Linux",
      icon: "i-mingcute-linux-fill",
    },
  ];

  const onClick = (item: Item) => {
    if (item.platform === "Mac") setIsHover(!isHover);
  };

  return (
    <div className="hidden lg:block">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {lists.map((item, index) => (
          <div
            key={item.platform}
            className="relative w-[240px] lg:w-[200px] h-12"
            onClick={() => onClick(item)}
          >
            <span
              className={cn(
                "absolute w-full h-full rounded-full -z-2 before:content-[''] before:border-[12px] before:border-transparent before:bg-clip-padding before:blur-[36px] before:w-full before:h-full before:opacity-80 before:absolute before:-z-[1]",
                "bg-download1 before:bg-download1",
                {
                  "animate-download1": index === 0,
                  "animate-download2": index === 1,
                  "animate-download3": index === 2,
                }
              )}
            />
            <span
              className={cn(
                "absolute w-full h-full rounded-full -z-2 before:content-[''] before:border-[12px] before:border-transparent before:bg-clip-padding before:blur-[36px] before:w-full before:h-full before:opacity-80 before:absolute before:-z-[1]",
                "bg-download2 before:bg-download2",
                {
                  "animate-download2": index === 0,
                  "animate-download3": index === 1,
                  "animate-download1": index === 2,
                }
              )}
            />
            <span
              className={cn(
                "absolute w-full h-full rounded-full -z-2 before:content-[''] before:border-[12px] before:border-transparent before:bg-clip-padding before:blur-[36px] before:w-full before:h-full before:opacity-80 before:absolute before:-z-[1]",
                "bg-download3 before:bg-download3",
                {
                  "animate-download3": index === 0,
                  "animate-download1": index === 1,
                  "animate-download2": index === 2,
                }
              )}
            />
            <div
              className={cn(
                "bg-clip-padding select-none w-full h-full relative border rounded-full border-transparent transition-all cursor-pointer flex justify-center items-center gap-3 font-medium hover:bg-transparent",
                "shadow-[0_4px_4px_0_#00000010] bg-white hover:text-white",
                "dark:shadow-[0_4px_4px_0_#00000040] dark:bg-black dark:hover:text-black dark:hover:bg-transparent",
                { "!bg-transparent": isHover && item.platform === "Mac" }
              )}
            >
              <span className={cn("w-7 h-7", item.icon)} />
              <span>{item.platform}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div
          className={cn(
            "overflow-hidden h-0 transition-all duration-500 will-change-[height] flex gap-4",
            {
              "h-14": isHover,
            }
          )}
        >
          <Button
            className="rounded-full h-10 px-4 gap-2 text-base group hover:bg-[rgb(242,242,242)] text-[rgb(23,23,23)]"
            variant="outline"
          >
            <span className="w-6 h-6 i-mingcute-appstore-fill" />
            Intel Chip
          </Button>
          <Button
            className="rounded-full h-10 px-4 gap-2 text-base group hover:bg-[rgb(242,242,242)] text-[rgb(23,23,23)]"
            variant="outline"
          >
            <span className="w-6 h-6 i-mingcute-appstore-fill" />
            Apple Chip
          </Button>
        </div>
      </div>
    </div>
  );
}
