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
  render() {
    let { tips } = this.props;
    return (
      <section className="main">
        <form name="searchForm" action="#" className="form">
          <label htmlFor="searchInput" className="form__label">
            Город
          </label>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            className="form_input"
            placeholder="Начните вводить код или название"
            onChange={this.handleChange}
          />
          <InputTips tips={tips} />
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
