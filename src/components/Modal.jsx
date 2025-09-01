import React from "react";

export default function Modal({ title, children, onClose, wide }) {
  return (
    <div
      className="modal-wrap"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target.classList.contains("modal-wrap")) onClose();
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
}
