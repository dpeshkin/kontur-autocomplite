import React from 'react';
import './InputTips.css';

//генератор для айдишек элементов списка
let id = 0;
const generateId = () => {
  id += 1;
  return id;
};

export const InputTips = props => {
  const { query, cities, citiesAmount } = props.tips;
  return (
    <div className="tips">
      {!!citiesAmount && (
        <ul className="tips__list">
          {cities.map(tip => (
            <li key={generateId()} className="tips__item">
              {tip}
            </li>
          ))}
        </ul>
      )}
      {citiesAmount > 5 && (
        <div>
          <p>Показано 5 из {citiesAmount} найденных городов.</p>
          <p>Уточните запрос чтобы увидеть остальные</p>
        </div>
      )}
      {query &&
        !citiesAmount && <div className="tips__notfound">Нет совпадений</div>}
    </div>
  );
};

export default InputTips;
