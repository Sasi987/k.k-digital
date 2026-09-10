import { useRef, useState } from 'react';
import './PhotoUploader.css';

const MAX_MB = 8;

export default function PhotoUploader({ onPhoto }) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [error, setError] = useState('');

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file (JPG, PNG, WebP).');
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      setError(`Image must be under ${MAX_MB} MB.`);
      return;
    }
    setError('');
    const previewUrl = URL.createObjectURL(file);
    setFileName(file.name);
    onPhoto({ previewUrl, name: file.name });
  };

  const clear = () => {
    setFileName(null);
    setError('');
    if (inputRef.current) inputRef.current.value = '';
    onPhoto(null);
  };

  return (
    <div className="uploader">
      <span className="opt-group__legend">Your Photo</span>
      <div
        className="uploader__drop"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFile(e.dataTransfer.files?.[0]);
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          id="photo-upload"
          className="sr-only"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
        <label htmlFor="photo-upload" className="uploader__label">
          <span className="uploader__icon" aria-hidden="true">⬆</span>
          {fileName ? (
            <span className="uploader__file">{fileName}</span>
          ) : (
            <span>Drop your photo here or <em>browse</em></span>
          )}
        </label>
        {fileName && (
          <button type="button" className="uploader__clear" onClick={clear} aria-label="Remove uploaded photo">
            ✕
          </button>
        )}
      </div>
      {error && <p className="error-text" role="alert">{error}</p>}
    </div>
  );
}
