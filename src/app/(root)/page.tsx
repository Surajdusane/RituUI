import { Metadata } from "next";

import { CategoryCard } from "@/components/category";
import { Announcement } from "@/components/global/announcement";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/global/page-header";
import { registryCategories } from "@/registry/registry-categories";

const title = "The Foundation for your Design System";
const description =
  "A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
};

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>

      <div className="relative mx-auto my-16 w-full max-w-6xl px-4">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {registryCategories.map((category) => (
            <CategoryCard
              key={category.slug}
              slug={category.slug}
              name={category.name}
              description={category.description}
              isNew={category.isNew}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
