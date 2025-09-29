import { CopyInput } from "@/registry/ritu/blocks/copy-button-01/components/copy-button-01";

export default function Page() {
  return (
    <div className="flex aspect-auto min-h-svh w-full items-center justify-center p-6 max-sm:aspect-square md:p-10">
      <div className="flex w-full max-w-sm items-center justify-center p-8">
        <CopyInput value="Thanks me letter for my work" />
      </div>
    </div>
  );
}
