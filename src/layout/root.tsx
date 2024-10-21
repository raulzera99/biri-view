import { ReactNode } from "react";
import { Navbar } from "@/components/common/nav-bar";
import Footer from "@/components/common/footer";

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col flex-1" style={{ paddingTop: '6rem' }}>
        <main className="flex-1 ">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
