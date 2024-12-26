"use client"
import HeaderSearch from "@/components/layout/header/HeaderSearch";
import HeaderNotification from "@/components/layout/header/HeaderNotification";
import {SidebarTrigger} from "@/components/ui/sidebar";

function Header() {
  return (
    <div className="w-full grid grid-cols-2 border-b h-[80px] p-4">
      <div className="h-fit flex flex-row items-center gap-2">
        <SidebarTrigger/>
        <HeaderSearch/>
      </div>
      <div className="justify-self-end">
        <HeaderNotification/>
      </div>
    </div>
  );
}

export default Header;
