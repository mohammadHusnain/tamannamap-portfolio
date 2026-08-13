import { useEffect } from "react";

export default function Toast({ message, type = "success", visible, onClose }) {
  useEffect(() => {
    if (!visible) return undefined;
    const timer = window.setTimeout(onClose, 5500);
    return () => window.clearTimeout(timer);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`toast toast--${type} is-visible`}
      role="alert"
      aria-live="assertive"
    >
      <div className="toast__body">
        <span className="toast__icon" aria-hidden="true">
          {type === "success" ? "✓" : "!"}
        </span>
        <p>{message}</p>
      </div>
      <button type="button" className="toast__close" onClick={onClose} aria-label="Dismiss notification">
        ×
      </button>
    </div>
  );
}
