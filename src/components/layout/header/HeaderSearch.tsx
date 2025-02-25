import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@/components/ui/command";
import {useState} from "react";

function HeaderSearch() {

  const [open, setOpen] = useState(false)
  return (
    <Command className="rounded-lg border md:min-w-[450px] shadow-sm">
      <CommandInput placeholder="Type a command or search..."/>
      {open && <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
              <CommandItem>
                  <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                  <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                  <span>Calculator</span>
              </CommandItem>
          </CommandGroup>
          <CommandSeparator/>
          <CommandGroup heading="Settings">
              <CommandItem>
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
          </CommandGroup>
      </CommandList>}
    </Command>
  );
}

export default HeaderSearch;
