import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.buttonsList}>
      <li>
        <button
          type="button"
          className={s.button}
          name={Object.keys(options)[0]}
          onClick={onLeaveFeedback}
        >
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          className={s.button}
          name={Object.keys(options)[1]}
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          className={s.button}
          name={Object.keys(options)[2]}
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.object.isRequired,
};

export default FeedbackOptions;
