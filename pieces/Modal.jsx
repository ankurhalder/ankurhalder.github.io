import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Modal = ({ show, onClose, content }) => {
  if (!show) {
    return null;
  }

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
      >
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="modal-body">{content}</div>
      </motion.div>
    </motion.div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.node,
};

export default Modal;
