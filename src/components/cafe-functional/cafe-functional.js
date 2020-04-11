import React, {useState, useCallback} from "react";
import PropTypes from 'prop-types';
import './cafe-functional.css';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const CafeFunctional = ({name, menu}) => {
  const [order, setOrder] = useState({});

  const handlePlusClickCallback = useCallback((item) => {
    setOrder({
      ...order,
      [item]: (order[item] || 0) + 1,
    });
  }, [order]);

  const handleMinusClickCallback = useCallback((item) => {
    if (!order[item]) {
      return;
    }

    setOrder({
      ...order,
      [item]: order[item] - 1,
    });
  }, [order]);

  return (
    <div className="CafeFunctional">
      <h2>
        {name}
      </h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <div className="CafeFunctional__controls">
              <IconButton
                onClick={() => handlePlusClickCallback(item)}
                color="primary"
              >
                <AddCircleIcon fontSize="default"/>
              </IconButton>
              <IconButton
                onClick={() => handleMinusClickCallback(item)}
                color="secondary"
              >
                <RemoveCircleIcon fontSize="default"/>
              </IconButton>
              <span>
                {order[item] || 0}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
};

CafeFunctional.propTypes = {
  name: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
};

export default CafeFunctional;
