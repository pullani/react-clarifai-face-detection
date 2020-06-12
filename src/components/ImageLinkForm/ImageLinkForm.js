import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='ma4'>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
                <p className='f6 white'>
                {'Your URL should end with a valid image extension.'}
                </p>
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' placeholder="Paste your image URL." onChange={onInputChange}/> {/*On change is react function which will  mimic onChange in html.*/}
                    <button 
                    className='w-30 grow f4 link ph3 pv2 dib ba white bg-light-purple'
                    onClick={onButtonSubmit}
                    >Detect</button>
                   
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;