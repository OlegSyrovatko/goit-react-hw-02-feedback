import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <span className="result">{message}</span>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
