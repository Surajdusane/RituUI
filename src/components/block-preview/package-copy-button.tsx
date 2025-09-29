import { Check } from "lucide-react";

import { motion } from "framer-motion";

import { Copy } from "lucide-react";

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
        <MenubarTrigger className="relative">
          <motion.div
        className="absolute"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isCopied ? 0 : 1, scale: isCopied ? 0 : 1 }}
      >
        <Copy className="text-foreground size-4" />
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isCopied ? 1 : 0, scale: isCopied ? 1 : 0 }}
      >
        <Check className="text-foreground size-4" />
      </motion.div>
          <span className="ml-5">Copy</span>
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
