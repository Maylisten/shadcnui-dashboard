import {Bell} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

function HeaderNotification() {
  const notifications = [
    {id: 1, text: "This a notification", date: "02-01-2015", read: true},
    {id: 2, text: "This a notification", date: "02-01-2015", read: false},
    {id: 3, text: "This a notification", date: "02-01-2015", read: false},
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <div className="relative">
            <Bell/>
            <div className={"absolute rounded-full w-[8px] aspect-square bg-green-400 -top-1 -right-1"}></div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="px-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        {notifications.map(({id, text, date, read}) => (
          <DropdownMenuItem key={id} className="flex flex-row gap-4 items-center max-w-[200px]">
            <div className="w-fit">
              <div className={cn("rounded-full w-[16px] aspect-square", {
                "bg-gray-400": !read,
                "bg-green-400": read,
              })}></div>
            </div>
            <div className="flex-1 flex flex-col">
              <span className="text-base">{text}</span>
              <span className="text-sm">{date}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HeaderNotification;
