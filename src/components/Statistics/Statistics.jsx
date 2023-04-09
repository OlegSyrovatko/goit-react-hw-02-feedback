import React from 'react';
import { Span } from '../Statistics/Span.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Span>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </Span>
);

export default Statistics;
