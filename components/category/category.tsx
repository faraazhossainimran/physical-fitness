
import Link from 'next/link'
import React from 'react'
type categoryItem = {
    item: string,
    url: string,
}[]
const Category: React.FC = () => {
    const categoryItems : categoryItem = [
        {
            item: "Most View",
            url: "/most-view",
        },
        {
            item: "Geriatric",
            url: "/geriatric",
        },{
            item: "Pediatric",
            url: "/pediatric",
        },{
            item: "Orthopedic",
            url: "/orthopedic",
        },
    ]
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2'>
                <ul className='flex'>{categoryItems.map((categoryItem, index)=> (
                   <li key={index} className='mr-6 text-yellow pb-3 hover:border-b-yellow hover:border-b-4'><Link href={categoryItem.url}>{categoryItem.item}</Link></li>
                ))}</ul>
                <div className='text-right'>category pagination</div>
            </div>
        </div>
    )
}

export default Category