import { notFound } from "next/navigation"

type Props = {
    params: Promise<{ category: string }>
}

const page = async ({ params }: Props) => {
    const {category} = await params

    if (!category) {
        notFound()
    }

    console.log(category)

    return (
        <div>{category}</div>
    )
}

export default page