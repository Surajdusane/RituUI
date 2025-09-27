import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

type CategoryCardProps = {
    slug: string
    name: string
    componentsCount?: number
    isNew?: boolean
}

export const CategoryCard = ({ slug,
    name,
    componentsCount,
    isNew = false,
}: CategoryCardProps) => {
    return (
        <Link href={`/docs/${slug}`}>
            <Card className='rounded-none h-full'>
                <CardHeader className='flex justify-between items-center'>
                    <CardTitle className="text-lg font-semibold">{name}</CardTitle>
                    {isNew && (
                        <span className="text-destructive">New</span>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2 text-sm">
                        <span className="text-muted-foreground">
                            {componentsCount} components
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
