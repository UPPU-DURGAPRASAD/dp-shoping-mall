import React from 'react'

const WomanCollection = (props) => {
    const{title,image1,image2,image3,image4,image5}=props.ladiesFashion

  return (
    <div>
      <div className="collectionSection">
      <div className="bannerBox">
      <img src='images/LadiesBanner.gif' />
      </div>
      <h2>{title}</h2>
      <div className="mensImages">
        <img src={image1} alt={title} />
        <img src={image2} alt={title} />
        <img src={image3} alt={title} />
        <img src={image4} alt={title} />
        <img src={image5} alt={title} />
      </div>
    </div>
    </div>  
  )
}

export default WomanCollection
