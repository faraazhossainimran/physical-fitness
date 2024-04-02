import React from 'react'

const Heading: React.FC<HeadingProps> = ({title}) => {
    return (
        <div className='uppercase pt-[85px] text-center text-[33px] font-bold'>
            {title}
        </div>
    )
}

export default Heading