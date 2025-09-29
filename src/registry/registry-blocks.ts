import { type Registry } from "@/schema/shadcn";

export const blocks: Registry["items"] = [
  {
    name: "login-form-1",
    type: "registry:block",
    description: "A login for its just a test desciption.",
    dependencies: [],
    registryDependencies: ["label", "card", "button", "input"],
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
  {
    name: "copy-button-01",
    type: "registry:block",
    description: "A copy butoon with smooth animation.",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/copy-button-01/components/copy-button-01.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/copy-button-01/hooks/use-copy-to-clipboard.ts",
        type: "registry:hook",
      },
    ],
    categories: ["utilities"],
    meta: {
      iframeHeight: "600px",
      container: "w-full min-h-svh flex px-6 py-12 items-start md:pt-20 justify-center min-w-0 xl:py-24",
      mobile: "component",
    },
  },
];
