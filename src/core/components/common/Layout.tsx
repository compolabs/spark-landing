import { ChildrenType } from "core/types";

import { Footer } from '@/core/components/common/Footer';

import { Header } from "./Header";

type PropsTypes = {
  children?: ChildrenType;
};

export default function Layout({ children }: PropsTypes) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
