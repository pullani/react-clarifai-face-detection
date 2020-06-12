import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    console.log(box);
    return (
        <div className='center ma pa4'>
         <div className='absolute mt2'>
          <img id='inputImage' alt='' src={imageUrl} width='auto' height='250px'/>
          {box.map(box => {
            return <div key={box.topRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      	    })
      	  }
         </div>
        </div>
    );
}

export default FaceRecognition;