import React, {useEffect, useState } from 'react';
import getGifly from '.././TMDB_API/getGifly' 
import './Modal.css'; // Import styles modal


function Modal(props) {
    const { isOpen, onRequestClose, currRentedMovieName, children } = props;
  
    const [imgUri,setImgUri] = useState('');

  

    useEffect(() => {
        getGifly(currRentedMovieName)
        .then((img) => {
          setImgUri(img);
              })
              .catch((error) => {
                  console.error("Error get movies: ", error);
            });
        })

    if (!isOpen) {
        return null;
    }
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onRequestClose}>&times;</span>
          {children}
          <img src = {imgUri} className="gifly"></img>
        </div>
      </div>
    );
  }

export default Modal;