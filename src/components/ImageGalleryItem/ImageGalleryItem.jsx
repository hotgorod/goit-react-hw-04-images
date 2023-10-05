
const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;