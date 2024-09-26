// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, onClick, type = 'button', variant = 'primary', size = 'md', disabled = false }) => {
  const baseStyles = 'rounded-full';

  const variants = {
    primary: ' bg-lightGreen text-white hover:bg-green-400 ',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 ',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const sizes = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = classNames(baseStyles, variants[variant], sizes[size], {
    'opacity-50 cursor-not-allowed': disabled,
  });

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
};

export default Button;
