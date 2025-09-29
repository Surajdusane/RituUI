import { registryItemSchema, type Registry } from "@/schema/shadcn"
import { z } from "zod"

import { blocks } from "@/registry/registry-blocks"

export const registry = {
  name: "shadcn/ui",
  homepage: "https://ui.shadcn.com",
  items: z.array(registryItemSchema).parse(
    [
      ...blocks,
    ]
  ),
} satisfies Registry