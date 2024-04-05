import React from 'react'
import RelatedPagination from '../related-pagination/related-pagination'
import RelatedCards from '../related-cards/related-cards'

const RelatedVideos = () => {
    return (
        <div className='w-full bg-[#f6f6f6] py-6 pb-24'>
            <RelatedPagination></RelatedPagination>
            <RelatedCards></RelatedCards>
        </div>
    )
}

export default RelatedVideos