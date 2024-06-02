import { ChildrenType } from "core/types";

import { Footer } from "@/core/components/common/Footer";

import { Header } from "./Header/Header";

type PropTypes = {
  children?: ChildrenType;
};

export default function Layout({ children }: PropTypes) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
