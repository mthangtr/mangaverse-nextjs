import React from "react";
import Sidebar from "@/components/Layouts/Sidebar/Sidebar";

const SidebarLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="flex">
    <main className="lg:max-w-4xl">{children}</main>
    <Sidebar />
  </div>
);

export default SidebarLayout;
