import "./ImageModal.css";

export const ImageModal = ({ image, onClose }) => {
  return (
    <div
      className={`image-modal image-modal_open-image ${
        image && "image-modal_opened"
      }`}
    >
      <figure className="image-modal__container">
        <button
          className="image-modal__close-button"
          onClick={onClose}
        ></button>
        {image && (
          <img
            src={image?.urls.small}
            alt={image?.alt_description}
            className="image-modal__big-image"
          />
        )}
      </figure>
    </div>
  );
};
