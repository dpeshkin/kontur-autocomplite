import React, { Component } from 'react';
import InputTips from '../InputTips';
import { connect } from 'react-redux';
import { cityRequest } from '../../actions/cityRequest';
import { citiesFilter } from '../../reducers/query';
import './Main.css';

export class Main extends Component {
  handleChange = e => {
    const value = e.target.value.trim();
    this.props.cityRequest(value);
  };
  validate = () => {
    console.log('1!!');
  };
  render() {
    let { tips } = this.props;
    return (
      <section className="main">
        <form name="searchForm" action="#" className="form">
          <label htmlFor="cityInput" className="form__label">
            Город
          </label>
          <input
            type="text"
            name="cityInput"
            id="cityInput"
            className="form__input"
            placeholder="Начните вводить название"
            onChange={this.handleChange}
            onBlur={this.validate}
          />
          {tips.query && <InputTips tips={tips} />}
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tips: citiesFilter(state)
});

const mapDispatchToProps = {
  cityRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
