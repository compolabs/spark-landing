import useMainFont from "@/core/hooks/useMainFont";

export const Footer = () => {
  const syne = useMainFont();
  return <div className={syne}>Footer rg</div>;
};
