interface ErrorModalProps {
  error: string;
  onClose: () => void;
}

/**
 * An error modal component that takes in an error message and displays it in an browser wide overlay.
 * If the user clicks on the close button on the error modal, or somewhere that's off the dialog
 * The modal will execute onClose.
 * @param props
 * @returns 
 */
const ErrorModal: React.FC<ErrorModalProps> = (props) => {

  const {error, onClose} = props;

  return (
    <div className="p-modal" id="modal" onClick={onClose}>
      <section
        className="p-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <header className="p-modal__header">
          <h2 className="p-modal__title" id="modal-title">
            Error!
          </h2>
          <button
            className="p-modal__close"
            aria-label="Close active modal"
            aria-controls="modal"
            onClick={onClose}
          >
            Close
          </button>
        </header>
        <p id="modal-description">
          {error}
        </p>
      </section>
    </div>
  );
};

export default ErrorModal;