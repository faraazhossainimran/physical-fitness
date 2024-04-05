import React from 'react'

const Heading: React.FC<HeadingProps> = ({title}) => {
    const wordArray = title.split(" ");
    const firstWord = wordArray[0];
    const secondWord = wordArray[1];
    console.log(firstWord);
    return (
        <div className='uppercase pt-8 pb-4 md:pt-[60px] text-center text-[2xl] md:text-[33px] font-bold'>
           {/* <p>first word: {firstWord}</p>
            {wordArray.map((word, index)=> (
                <span key={index}>{word} </span>
            ))} */}
            <span>{firstWord} <span className='text-yellow'>{secondWord}</span></span>
        </div>
    )
}

export default Heading