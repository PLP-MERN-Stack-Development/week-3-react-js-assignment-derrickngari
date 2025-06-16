import React from 'react'
import Card from '../components/Card'

const About = () => {
    const cardDeatails = {
        title: 'This is a card',
        description: 'Lorem, ipsum dolor sit amet consectetur! Ipsa, similique eius? Maiores adipisci, dignissimos facilis consectetur aperiam eaque'
    }

  return (
    <Card 
        title={cardDeatails.title}
        description={cardDeatails.description} 
    />
  )
}

export default About