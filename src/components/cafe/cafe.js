import React, {Component} from "react";
import PropTypes from 'prop-types';
import './cafe.css';

class Cafe extends Component {
  state = {};

  handlePlusClick = (item) => {
    this.setState({
      [item]: (this.state[item] || 0) + 1,
    });
  };

  handleMinusClick = (item) => {
    if (!this.state[item]) {
      return;
    }

    this.setState({
      [item]: this.state[item] - 1,
    })
  };

  render() {
    const {name, menu} = this.props;

    return (
      <div className="Cafe">
        <h2>
          {name}
        </h2>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <div className="Cafe__controls">
                <button
                  onClick={() => this.handlePlusClick(item)}
                >
                  +
                </button>
                <button
                  onClick={() => this.handleMinusClick(item)}
                >
                  -
                </button>
                <span>
                  {this.state[item] || 0}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Cafe.propTypes = {
  name: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
};

export default Cafe;
