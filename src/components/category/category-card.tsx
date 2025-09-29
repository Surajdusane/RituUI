import React from "react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CategoryCardProps = {
  slug: string;
  name: string;
  description?: string;
  isNew?: boolean;
};

export const CategoryCard = ({ slug, name, description, isNew = false }: CategoryCardProps) => {
  return (
    <Link href={`/${slug}`}>
      <Card className="h-full rounded-none">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          {isNew && <span className="text-destructive">New</span>}
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-muted-foreground">{description}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
