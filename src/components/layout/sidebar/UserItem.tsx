import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

function UserItem() {
  return (
    <div className="flex flex-row  h-[70px] items-center rounded shadow p-2 border gap-4">
      <Avatar className="w-[50px] h-[50px]">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-sm">
        <div className="text-xl font-bold">May</div>
        <div className="text-sm text-neutral-500">1062993405@qq.com</div>
      </div>
    </div>
  );
}

export default UserItem;
