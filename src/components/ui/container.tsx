import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

const Container = ({ children }: Children) => {
  return <div className="w-full h-screen max-w-5xl  mx-auto">{children}</div>;
};

export default Container;
