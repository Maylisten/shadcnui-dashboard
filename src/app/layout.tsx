import "./globals.css";
import {ReactNode} from "react";
import {SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/sidebar/AppSidebar";
import Header from "@/components/layout/header/Header";
import {FullDiv} from "@/components/FullDiv";

export default function RootLayout({children}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <SidebarProvider>
      <AppSidebar/>
      <main className="flex-1 flex flex-col">
        <Header/>
        <div className="flex-1">
          <FullDiv>
            {children}
          </FullDiv>
        </div>
      </main>
    </SidebarProvider>
    </body>
    </html>
  );
}
