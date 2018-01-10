import React, { Component } from 'react';
import InputTips from '../InputTips';
import './Main.css';

export class Main extends Component {
  handleChange = e => {
    const value = e.target.value;
    console.log(value);
  };
  render() {
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
          <InputTips tips={[1, 2, 3]} />
        </form>
      </section>
    );
  }
}

export default Main;
