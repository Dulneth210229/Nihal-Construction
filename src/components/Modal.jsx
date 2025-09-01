import React from "react";
import { createPortal } from "react-dom";

/**
 * Portal Modal
 * - Renders into document.body (not inside a section) -> covers whole window
 * - Overlay is scrollable; header is sticky; backdrop click closes
 * - Works with your existing body-scroll lock in Projects/Services
 */
export default function Modal({ title, children, onClose, wide }) {
  const modalUI = (
    <div
      className="modal-wrap"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <div className={`modal ${wide ? "wide" : ""}`} role="document">
        <div className="modal-head">
          <h3 className="modal-title">{title}</h3>
          <button className="icon-btn" aria-label="Close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );

  // Render the overlay at the top level so it spans the entire window.
  return createPortal(modalUI, document.body);
}
