import React from 'react';

//генератор для айдишек элементов списка
let id = 0;
const generateId = () => {
  id += 1;
  return id;
};

export const InputTips = props => {
  const { cities, citiesAmount } = props.tips;
  return (
    <div className="tips">
      <ul className="tips__list">
        {cities.map(tip => (
          <li key={generateId()} className="tips__item">
            {tip}
          </li>
        ))}
      </ul>
      {citiesAmount > 5 && (
        <div>
          <p>Показано 5 из {citiesAmount} найденных городов</p>
          <p>Уточните запрос чтобы увидеть остальные</p>
        </div>
      )}
    </div>
  );
};

export default InputTips;
