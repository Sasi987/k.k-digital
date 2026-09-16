import { useEffect } from 'react';
import './ContentProtection.css';

const PROTECTED_SELECTOR = [
  'img',
  '.portfolio-card',
  '.frame-card__media',
  '.page-hero__bg',
  '.hero__bg',
  '.lightbox__figure',
  '.content-protection__media'
].join(', ');

function isInteractiveTarget(target) {
  if (!target) return true;
  return !!target.closest(
    'input, textarea, select, button, a, label, [contenteditable="true"], [data-no-protection="true"]'
  );
}

export default function ContentProtection({ children }) {
  useEffect(() => {
    const isProtectedTarget = (target) => {
      if (!target || isInteractiveTarget(target)) return false;
      const root = target.closest('[data-protected-content="true"]');
      if (!root) return false;
      return !!target.closest(PROTECTED_SELECTOR);
    };

    const handlePrevent = (event) => {
      if (isProtectedTarget(event.target)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const handleShortcuts = (event) => {
      const target = event.target;
      const tagName = target?.tagName ? target.tagName.toLowerCase() : '';
      const isFormInput = ['input', 'textarea', 'select'].includes(tagName) || target?.isContentEditable;

      if (isFormInput) return;

      const key = event.key.toLowerCase();
      const isModifierCombo = (event.ctrlKey || event.metaKey) && !event.altKey;
      const blocked =
        (isModifierCombo && ['s', 'u', 'i', 'j', 'c'].includes(key)) ||
        (event.shiftKey && ['i', 'j', 'c'].includes(key)) ||
        key === 'f12' ||
        key === 'printscreen';

      if (blocked) {
        event.preventDefault();
      }
    };

    const handleCopy = (event) => {
      if (isProtectedTarget(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handlePrevent, { passive: false });
    document.addEventListener('dragstart', handlePrevent, { passive: false });
    document.addEventListener('keydown', handleShortcuts, { passive: false });
    document.addEventListener('copy', handleCopy, { passive: false });
    document.addEventListener('cut', handleCopy, { passive: false });
    document.addEventListener('paste', handleCopy, { passive: false });

    return () => {
      document.removeEventListener('contextmenu', handlePrevent);
      document.removeEventListener('dragstart', handlePrevent);
      document.removeEventListener('keydown', handleShortcuts);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCopy);
      document.removeEventListener('paste', handleCopy);
    };
  }, []);

  return (
    <div className="content-protection" data-protected-content="true">
      {children}
      <div className="print-protection-message" aria-live="polite">
        This website content is protected. Please contact KK Digital Studio for official media use.
      </div>
    </div>
  );
}
