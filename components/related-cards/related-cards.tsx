import traningDetails from '@/data/training-data';
import React from 'react'
import TrainingCard from '../training-card/training-card';

const RelatedCards = () => {
    const training = traningDetails.filter(relatedVideo => relatedVideo.relatedVideos.toLowerCase() === "yes");
    console.log(training);
    return (
        <div className='container mx-auto'>
           <div className='grid md:grid-cols-3 gap-4'>{training.map((trainingDetail, index)=> (<TrainingCard key={index} trainingDetail={trainingDetail}></TrainingCard>))}</div>
        </div>
    )
}

export default RelatedCards