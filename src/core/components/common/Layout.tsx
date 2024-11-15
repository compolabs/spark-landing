import { ChildrenType } from "core/types";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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
