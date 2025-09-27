"use client";

import { useTheme } from "next-themes";
import React from "react";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      className="group/toggle size-8"
      onClick={toggleTheme}
      size="icon"
      title="Toggle theme"
      variant="ghost"
    >
      <div className="aspect-square size-4 rounded-full border-2 border-primary [background:linear-gradient(90deg,var(--background)_50%,var(--primary)_50%)]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
