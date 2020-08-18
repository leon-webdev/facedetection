import React from 'react';
import './ImageForm.css';

const ImageForm = ({ onInputChange, onButtonSubmit }) => {
    return ( 
        <div>
            <p className='f3'>
                {'Este cerebro magico puede detectar caras en tus imagenes, pruebalo!'}
            </p>
        <div className='center'>
            <div className='form center pa4 br4 shadow-5'>
                <input className='f4 pa2 w-70 br3 br--left mr1' type='text' onChange={ onInputChange }/>
                <button className='br3 br--right w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={ onButtonSubmit }>Detectar</button>
            </div>
        </div>
        </div>
     );
}
 
export default ImageForm;