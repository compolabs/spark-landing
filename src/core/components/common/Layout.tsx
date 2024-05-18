import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChildrenType } from "core/types";

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
