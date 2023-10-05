import { useEffect } from 'react';
import css from './Modal.module.css';


 const Modal = ({ onClose, imageURL }) => {
  

  useEffect(() => window.addEventListener('keydown', onEscapeKey), [])
  
  useEffect(() => {
    return () => window.removeEventListener('keydown', onEscapeKey);
  }, [])
 
  const onOverlayClick = () => {
    onClose();
  };

  const onEscapeKey = event => {
    if (event.key === 'Escape') {
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