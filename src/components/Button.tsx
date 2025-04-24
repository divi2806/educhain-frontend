import React from 'react';

type ButtonProps = {
  primary?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  primary = true,
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const primaryStyles = 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 focus:ring-purple-500';
  
  const secondaryStyles = 'bg-gray-800 bg-opacity-30 text-white backdrop-blur-md border border-gray-700 hover:bg-gray-800 hover:bg-opacity-50 focus:ring-gray-500';
  
  const disabledStyles = 'opacity-60 cursor-not-allowed';
  
  const styles = `${baseStyles} ${primary ? primaryStyles : secondaryStyles} ${disabled ? disabledStyles : ''} ${className}`;
  
  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;