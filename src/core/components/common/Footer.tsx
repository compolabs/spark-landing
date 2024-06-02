import useMainFont from "@/core/hooks/useMainFont";

export const Footer = () => {
  const syne = useMainFont();
  return <div className={syne}>Footer 123 rg</div>;
};
