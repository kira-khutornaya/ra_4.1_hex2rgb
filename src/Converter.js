import React, { useState } from 'react';

function Converter() {
  const [color, setColor] = useState('');

  const hexToRgb = ({ target }) => {
    if (target.value.length < 7) return;

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value);
    if (!result) {
      setColor('Ошибка!');
      return;
    }

    setColor(`rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`);
  };

  return (
    <div className="converter" style={{ backgroundColor: color }}>
      <div className="converter__container">
        <input
          className="converter-form__input"
          onChange={hexToRgb}
        />

        <div className="converter__result">{color}</div>
      </div>
    </div>
  );
}

export default Converter;
