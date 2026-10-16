import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// Modal accesible basado en <dialog>. Sin backend ni librerías.
// Se cierra con: botón, tecla ESC y clic fuera del panel.
export default function Modal({ open, onClose, labelledBy, children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.classList.toggle('is-locked', open);
    return () => document.documentElement.classList.remove('is-locked');
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(e) => {
        // El clic sobre el fondo (::backdrop) llega con target = <dialog>
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="modal__panel">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Cerrar ventana">
          <X size={20} aria-hidden="true" />
        </button>
        {children}
      </div>
    </dialog>
  );
}
