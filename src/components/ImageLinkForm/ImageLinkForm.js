import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='ma3'>
            <p className='f3 ma1 fw8 light-gray dib dim'>
                {'Detect faces in your pictures. Give it a try!'}
            </p>
            <p className='f6 black'>
                {'Your URL should end with a valid image extension.'}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-2'>
                    <input className='input-reset br2 ba b--white-025 hover-bg-near-white tc w-100' 
                           type='text' placeholder="Click & paste your image URL." 
                           onChange={onInputChange}
                    /> {/*On change is react function which will  mimic onChange in html.*/}
                    <button 
                    className='w-30 f5 ph3 ba b--white-025 br2 pv2 dib white bg-light-purple hover-bg-purple' id="button"
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;