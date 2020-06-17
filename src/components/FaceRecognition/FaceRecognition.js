import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box, faceCountPrompt }) => {
    return (
        <div className='center pa1'>
         <div className='absolute mt3'> 
          <img id='inputImage' alt='' className='shadow-2 br3' src={imageUrl} width='auto' height='250px'/>
          { box !== undefined &&
            box.map(box => {
             return <div key={box.topRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      	    })
      	  }
          <p className='absolute f4 b w-100 near-black mv4'>{faceCountPrompt}</p>
         </div>
        </div>
    );
}

export default FaceRecognition;