import { type Registry } from "@/schema/shadcn"

export const blocks: Registry["items"] = [
  {
    name: "login-form-1",
    type: "registry:block",
    description: "A login for its just a test desciption.",
    dependencies: [
    ],
    registryDependencies: [
      "label",
      "card",
      "button",
      "input",
    ],
    files: [
      {
        path: "blocks/login-form-1/page.tsx",
        type: "registry:page",
        target: "app/testrui/page.tsx",
      },
      {
        path: "blocks/login-form-1/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login"],
  },
]

