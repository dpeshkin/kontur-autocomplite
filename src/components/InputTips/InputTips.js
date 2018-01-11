import React from 'react';
import './InputTips.css';

//генератор для айдишек элементов списка
let id = 0;
const generateId = () => {
  id += 1;
  return id;
};

const handleHover = e => {
  // Я сделал ховер средствами JS, хотя казалось бы все можно сделать средствами CSS.
  // НО если сделать только на CSS то нет возможности запомнить какое поле было под ховером
  // перед тем как курсор покинул поле (кейс: пользователь поводил мышью по подсказкам, но никуда
  // не кликнул, а просто увел мышь со списка подсказок - кстати такой кейс не описан в гайде)
  // С помощью чистого CSS можно реализовать лишь отскок фокуса на 1 элемент списка, но на мой взгляд
  // выглядит такой отскок не очень, потому решил сохранить выделение на посленем эелементе, который был под ховером.
  if (e.target.tagName === 'LI') {
    e.currentTarget.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  }
};

export const InputTips = props => {
  const { query, cities, citiesAmount } = props.tips;
  return (
    <div className="tips">
      {!!citiesAmount && (
        <ul
          className="tips__list"
          onClick={props.handleClick}
          onMouseOver={handleHover}
        >
          {cities.map((city, index) => (
            <li
              key={generateId()}
              className={index === 0 ? 'tips__item selected' : 'tips__item'}
              data-value={city}
            >
              {city}
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
