import React from "react";
import Image from "next/image";

import useWindowWidth from "@/core/hooks/useWindowWidth";

export default function Background() {
  const width = useWindowWidth();
  return (
    <Image
      src={"./images/FrameBackground.png"}
      alt="rocket"
      width={100}
      height={100}
      priority
      css={{
        position: "absolute",
        top: 0,
        zIndex: -1,
        backgroundPosition: "center",
        width: "100%",
        height: `calc(${width}px / 1.45 )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
}
