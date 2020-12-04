import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={s.buttonsList}>
      <li>
        <button type="button" className={s.button} onClick={onLeaveFeedback}>
          Good
        </button>
      </li>
      <li>
        <button type="button" className={s.button} onClick={onLeaveFeedback}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" className={s.button} onClick={onLeaveFeedback}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.protoTypes = {
  onLeaveFeedback: PropTypes.object.isRequired,
};

export default FeedbackOptions;
