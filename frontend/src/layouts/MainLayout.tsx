import type { ReactNode } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({
  children,
}: MainLayoutProps) => {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "0",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;