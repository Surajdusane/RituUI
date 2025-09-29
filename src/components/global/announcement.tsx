import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="rounded-full">
      <Link href="/docs/changelog">
        Last Update on <span className="font-semibold">2023-05-01</span> <ArrowRightIcon />
      </Link>
    </Badge>
  );
}
