import React from "react";

import useWindowWidth from "@/core/hooks/useWindowWidth";

export default function Background() {
  const width = useWindowWidth();
  return (
    <div
      style={{
        backgroundImage: `url(./images/frameBackground.png)`,
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
