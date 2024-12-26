"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import {Bell, Cookie, Inbox, MessageSquare, Receipt, Settings, User} from "lucide-react";
import UserItem from "@/components/layout/sidebar/UserItem";

const menus = [
  {
    group: "General",
    items: [
      {link: '/home', text: "Profile", icon: <User/>},
      {link: '/home', text: "Inbox", icon: <Inbox/>},
      {link: '/home', text: "Billing", icon: <Receipt/>},
      {link: '/home', text: "Notifications", icon: <Bell/>},
    ]
  },
  {
    group: "Settings",
    items:
      [
        {link: '/home', text: "General Settings", icon: <Settings/>},
        {link: '/home', text: "Privacy", icon: <Cookie/>},
        {link: '/home', text: "Logs", icon: <MessageSquare/>},
      ]
  }
]

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <UserItem/>
      </SidebarHeader>
      <SidebarContent>
        {menus.map(menu => (
          <SidebarGroup key={menu.group}>
            <SidebarGroupLabel>m{menu.group}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menu.items.map((item) => (
                  <SidebarMenuItem key={item.text}>
                    <SidebarMenuButton asChild>
                      <a href={item.link}>
                        {item.icon}
                        <span>{item.text}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup/>
      </SidebarContent>
      <SidebarFooter>foot</SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
