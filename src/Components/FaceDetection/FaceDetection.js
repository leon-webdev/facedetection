import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({ imageUrl, faceCoord }) => {
    return ( 
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={ imageUrl } width='500px' height='auto' />
                <div className='bounding-box' style={ { top: faceCoord.topRow, right: faceCoord.rightCol, bottom: faceCoord.bottomRow, left: faceCoord.leftCol } }></div>
            </div>
        </div>
     );

}
 
export default FaceDetection;