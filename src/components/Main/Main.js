import React, { Component } from 'react';
import InputTips from '../InputTips';
import { connect } from 'react-redux';
import { fetchCityRequest } from '../../actions/cityRequest';
import { filteredCities } from '../../reducers/query';
import './Main.css';

export class Main extends Component {
  state = {
    query: '',
    cities: [],
    citiesAmount: 0,
    inputFocused: false,
    inputValid: true,
    isFetching: false
  };

  componentWillReceiveProps(nextProps) {
    const { cities, citiesAmount } = nextProps.cities;
    const { isFetching } = nextProps;
    this.setState({
      cities: cities,
      citiesAmount: citiesAmount,
      isFetching: isFetching
    });
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

  handleBlur = () => {
    // Таймаут необходим, т.к. обработка потери фокуса на инпуте
    // срабатывает раньше чем обработка клика на пункте из списка подсказок
    setTimeout(() => {
      this.setState({ inputFocused: false });
      // this.validate();
    }, 100);
  };

  handleFocus = () => {
    this.setState({ inputFocused: true, inputValid: true });
  };

  handleClickOnTip = e => {
    const value = e.target.getAttribute('data-value');
    if (value) this.setState({ query: value });
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
              />
            )}
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  cities: filteredCities(state),
  isFetching: state.isFetching
});

const mapDispatchToProps = {
  fetchCityRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
