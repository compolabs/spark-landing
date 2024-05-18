import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export const Footer = () => {
  return <div className={syne.className}>Footer rg</div>;
};
