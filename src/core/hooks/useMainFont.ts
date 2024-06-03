import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });

export default function useMainFont() {
  const { className } = syne;
  return className;
}
