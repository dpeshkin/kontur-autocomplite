import React, { Component } from 'react';
import InputTips from '../InputTips';
import { connect } from 'react-redux';
import { fetchCityRequest } from '../../actions/cityRequest';
import { filteredCities } from '../../reducers/query';
import './Main.css';

let loaderTimer; // в этой переменной хрянится таймер для лоадера, необходимо для п.20

export class Main extends Component {
  state = {
    query: '',
    cities: [],
    citiesAmount: 0,
    inputFocused: false,
    inputValid: true,
    isFetching: true,
    networkError: false
  };

  componentWillReceiveProps(nextProps) {
    const { cities, citiesAmount } = nextProps.cities;
    clearTimeout(loaderTimer);
    loaderTimer = setTimeout(() => {
      this.setState({
        isFetching: nextProps.isFetching,
        cities: cities,
        citiesAmount: citiesAmount,
        networkError: nextProps.networkError
      });
    }, 500);
  }

  handleChange = e => {
    const value = e.target.value;
    this.props.fetchCityRequest(value.trim());
    this.setState({ query: value });
  };

  validate = () => {
    const { query, cities } = this.state;
    let valid = false;
    let selectedCity = '';
    for (let city of cities) {
      if (query.trim().toLowerCase() === city.City.toLowerCase()) {
        valid = true;
        selectedCity = city.City;
        break;
      }
    }
    this.setState({
      inputValid: valid,
      query: selectedCity ? selectedCity : query
    });
  };

  // handleBlur = () => {
  //   // Таймаут необходим, т.к. обработка потери фокуса на инпуте
  //   // срабатывает раньше чем обработка клика на пункте из списка подсказок
  //   if (!this.state.networkError)
  //     setTimeout(() => {
  //       this.setState({ inputFocused: false });
  //       this.validate();
  //     }, 100);
  // };

  handleFocus = () => {
    this.setState({ inputFocused: true, inputValid: true });
  };

  //обработчик клика по подсказке, его прокинем в InputTips
  handleClickOnTip = e => {
    const value = e.target.getAttribute('data-value');
    if (value) this.setState({ query: value });
  };

  //обработчик кнопки обновить(п.21), его прокинем в InputTips
  handleReloadQuery = e => {
    e.preventDefault();
    this.props.fetchCityRequest(this.state.query.trim());
  };

  render() {
    let { query, inputFocused, inputValid } = this.state;
    return (
      <section className="main">
        <form name="searchForm" action="#" className="form">
          <label htmlFor="cityInput" className="form__label">
            Город
          </label>
          <input
            value={query}
            type="text"
            name="cityInput"
            id="cityInput"
            className={
              inputValid ? 'form__input' : 'form__input form__input_error'
            }
            placeholder="Начните вводить название"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          {!inputValid && (
            <div className="validation-error">Выберите значение из списка</div>
          )}
          {query &&
            inputFocused && (
              <InputTips
                tips={this.state}
                handleClick={this.handleClickOnTip}
                reloadQuery={this.handleReloadQuery}
              />
            )}
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  cities: filteredCities(state),
  isFetching: state.isFetching,
  networkError: state.networkError
});

const mapDispatchToProps = {
  fetchCityRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
