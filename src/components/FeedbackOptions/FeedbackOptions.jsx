import React from 'react';
import PropTypes from 'prop-types';
import { Buttons, Button } from '../FeedbackOptions/Button.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Buttons>
    {options.map(option => (
      <Button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </Buttons>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
