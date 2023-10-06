import { useEffect } from 'react';
import css from './Modal.module.css';


 const Modal = ({ onClose, imageURL }) => {
  

 
  
   useEffect(() => {
       const onEscapeKey = event => {
         if (event.key === 'Escape') {
           onClose();
         }
       };
    window.addEventListener('keydown', onEscapeKey);
    return () => {window.removeEventListener('keydown', onEscapeKey)}
  }, [onClose])
 
   const onOverlayClick = (e) => {
     if (e.currentTarget === e.target) {
       onClose();
     }
  };


 
    return (
      <div className={css.Overlay} onClick={onOverlayClick}>
        <div className={css.Modal}>
          <img src={imageURL} alt="" />
        </div>
      </div>
    );
  }
export default Modal;