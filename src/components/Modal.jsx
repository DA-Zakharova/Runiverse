import './Modal.css';

const Modal = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Join Runiverse</h2>
            <p>
            Ready to join? We’ll open Telegram to message the coach
            and get your first plan.
            </p>

        <div className="modal-actions">
            <a
                href="https://t.me/dasha_zakharova03"
                target="_blank"
                rel="noreferrer"
                className="modal-btn modal-btn-primary"
            >
                Open Telegram
            </a>

            <button className="modal-btn modal-btn-secondary" onClick={onClose}>
                Cancel
            </button>
        </div>
        </div>
    </div>
    );
};

export default Modal;