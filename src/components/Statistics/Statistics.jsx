import React from 'react';
import { Ul } from '../Statistics/Span.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </Ul>
);

export default Statistics;
