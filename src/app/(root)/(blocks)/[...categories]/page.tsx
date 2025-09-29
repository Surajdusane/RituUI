import { BlockDisplay } from "@/components/block-preview"
import { getAllBlockIds } from "@/lib/blocks"
import { notFound } from "next/navigation"
import { Metadata } from "next"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }))
}


import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from "@/components/global/page-header"
import { registryCategories } from "@/registry/registry-categories"

type Props = {
    params: Promise<{ categories?: string[] }>
}

const title = "Building Blocks for the Web"
const description =
    "Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever."

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        images: [
            {
                url: `/og?title=${encodeURIComponent(
                    title
                )}&description=${encodeURIComponent(description)}`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [
            {
                url: `/og?title=${encodeURIComponent(
                    title
                )}&description=${encodeURIComponent(description)}`,
            },
        ],
    },
}

const getDescription = (categories: string, count: number) => {

    return count === 1
      ? `A ${categories.toLowerCase()} component built with React and Tailwind CSS.`
      : `A growing collection of ${count} ${categories.toLowerCase()} components built with React and Tailwind CSS.`
}

const page = async ({ params }: Props) => {

    const { categories } = await params

    if (!categories) {
        notFound()
    }
    const blocks = await getAllBlockIds(["registry:block"], categories)


    return (
        <div>
            <PageHeader>
                <PageHeaderHeading>{categories[0].toUpperCase()}</PageHeaderHeading>
                <PageHeaderDescription>{getDescription(categories[0], blocks.length)}</PageHeaderDescription>
            </PageHeader>
            <div className="container-wrapper section-soft flex-1 md:py-12">
                <div className="container">
                    <div className="flex flex-col gap-12 md:gap-24">
                        {blocks.map((name) => (
                            <BlockDisplay name={name} key={name} />
                        ))}
                    </div>
                </div>
            </div>

        </div>


    )
}

export default page