import React from "react";

import useWindowWidth from "@/core/hooks/useWindowWidth";

import bg from "./../../../../public/images/FrameBackground.png";

// TODO: try to refactor using Next Image
export default function Background() {
  const width = useWindowWidth();
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
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
