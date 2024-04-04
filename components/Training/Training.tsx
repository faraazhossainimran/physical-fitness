import React from 'react'
import TrainingCard from '../training-card/training-card'
import traningDetails from '../../data/training-data'

const Training = () => {

    return (
       <div className='container mx-auto'>
         <div className='grid grid-cols-3 gap-8 my-12'>
            {traningDetails.map((traningDetail, index)=> (<TrainingCard key={index} trainingDetail={traningDetail}></TrainingCard>))}
        </div>
       </div>
    )
}

export default Training