/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

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
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
      >
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="modal-body">{content}</div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
