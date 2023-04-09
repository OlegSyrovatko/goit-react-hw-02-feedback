import React from 'react';
import { Buttons, Button } from '../FeedbackOptions/Button.styled';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <Buttons>
    <Button type="button" onClick={onGood}>
      Good
    </Button>
    <Button type="button" onClick={onNeutral}>
      Neutral
    </Button>
    <Button type="button" onClick={onBad}>
      Bad
    </Button>
  </Buttons>
);

export default FeedbackOptions;
