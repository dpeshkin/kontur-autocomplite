import React from 'react';
import './InputTips.css';

const handleHover = e => {
  if (e.target.tagName === 'LI') {
    e.currentTarget.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  }
};

export const InputTips = props => {
  const { query, cities, citiesAmount, isFetching, networkError } = props.tips;
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
              key={city.Id}
              className={index === 0 ? 'tips__item selected' : 'tips__item'}
              data-value={city.City}
            >
              {city.City}
            </li>
          ))}
        </ul>
      )}
      {citiesAmount > 5 && (
        <div className="tips__specify-message">
          <p>Показано 5 из {citiesAmount} найденных городов.</p>
          <p>Уточните запрос чтобы увидеть остальные</p>
        </div>
      )}
      {query &&
        !citiesAmount &&
        !isFetching &&
        !networkError && (
          <div className="tips__notfound">Нет совпадений{isFetching}</div>
        )}
      {isFetching && <div className="tips__loader">Загрузка</div>}
      {networkError && (
        <div>
          <div className="tips__error">
            Что то пошло не так, проверьте соединение с интернетом и попробуйте
            еще раз
          </div>
          <button className="tips__reload-button" onClick={props.reloadQuery}>
            Обновить
          </button>
        </div>
      )}
    </div>
  );
};

export default InputTips;
