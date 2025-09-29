import { Check, Terminal } from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export const PackageCopyButton = ({ name }: { name: string }) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          {isCopied ? <Check /> : <Terminal />}
          <span className="ml-1">Copy</span>
          {/* <span>npx shadcn add {item.name}</span> */}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            onClick={() => {
              copyToClipboard(`npx shadcn@latest add ${process.env.NEXT_PUBLIC_APP_URL}/r/${name}`);
            }}
          >
            npm
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem
            onClick={() => {
              copyToClipboard(`bunx --bun shadcn@latest add ${process.env.NEXT_PUBLIC_APP_URL}/r/${name}`);
            }}
          >
            bun
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem
            onClick={() => {
              copyToClipboard(`yarn shadcn@latest add ${process.env.NEXT_PUBLIC_APP_URL}/r/${name}`);
            }}
          >
            yarn
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem
            onClick={() => {
              copyToClipboard(`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_APP_URL}/r/${name}`);
            }}
          >
            pnpm
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
