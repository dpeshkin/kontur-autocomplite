import React from 'react';

//генератор для айдишек элементов списка
let id = 0;
const generateId = () => {
  id += 1;
  return id;
};

export const InputTips = props => {
  return (
    <div className="tips">
      <ul className="tips__list">
        {props.tips.map(tip => (
          <li key={generateId()} className="tips__item">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputTips;
