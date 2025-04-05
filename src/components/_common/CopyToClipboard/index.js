import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * Component to display and copy a password to the clipboard
 */
const CopyToClipboard = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Errore durante la copia: ', err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={styles.label}>{label || 'password:'}</span>
      </div>
      <div className={styles.passwordContainer} onClick={handleCopy}>
        <code className={styles.password}>{text}</code>
        <div className={styles.copyStatus}>
          {copied ? 'Copiato!' : 'Clicca per copiare'}
        </div>
      </div>
    </div>
  );
};

export default CopyToClipboard; 