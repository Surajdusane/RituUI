"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/registry/ritu/blocks/copy-button-01/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  className?: string;
};

export function CopyInput({ value = "Thanks me letter for my work", className }: Props) {
  const [isCopied, setCopied] = useState(false);
  const [, copy] = useCopyToClipboard();

  const handleClipboard = () => {
    setCopied(true);

    copy(value);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button type="button" variant={"outline"} onClick={handleClipboard} className={cn("relative", className)}>
      <div className="truncate pr-8 text-sm">{value}</div>

      <motion.div
        className="absolute top-2.5 right-4"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isCopied ? 0 : 1, scale: isCopied ? 0 : 1 }}
      >
        <Copy className="text-foreground" />
      </motion.div>

      <motion.div
        className="absolute top-2.5 right-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isCopied ? 1 : 0, scale: isCopied ? 1 : 0 }}
      >
        <Check className="text-foreground" />
      </motion.div>
    </Button>
  );
}
