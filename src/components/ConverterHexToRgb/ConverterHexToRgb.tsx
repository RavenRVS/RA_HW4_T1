import React, { useState } from 'react';
import './ConverterHexToRgb.css';

export default function ConverterHexToRgb() {
  const [hexColor, setHexColor] = useState('#34495e');
  const [rgbColor, setRgbColor] = useState('rgb(52, 73, 94)');
  const [error, setError] = useState('');

  const convertHexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    setRgbColor(`RGB(${r}, ${g}, ${b})`);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (/^#([A-Fa-f0-9]{6})$/.test(inputValue)) {
      setError('');
      setHexColor(inputValue);
      convertHexToRgb(inputValue);
    } 
    else {
      setHexColor(inputValue);
      if (inputValue.length === 7) { setError('Error!'); }
      if (inputValue.length !== 7) { setError('-'); }
    }
  };

  return (
    <div className="container">
      <h2>Конвертер цветов из HEX в RGB</h2>
      <form className="converter-form" onSubmit={onSubmit} style={{ backgroundColor: rgbColor }}>
        <input id="color" className="converter-input" onChange={onValueChange} value={hexColor} spellCheck="false" />
        <label className="converter-label" htmlFor="color">{error ? error : rgbColor}</label>
      </form>
    </div>
  );
}