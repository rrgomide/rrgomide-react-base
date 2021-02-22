import React from 'react';

export default function Button({
  extraClassNames,
  colorClassNames = null,
  children,
  buttonStyle = {},
  onClick = () => {},
  ...otherProps
}) {
  function handleClick() {
    onClick();
  }

  const disabledClassName = otherProps.disabled
    ? 'opacity-30 cursor-not-allowed'
    : '';

  const colorClasses =
    colorClassNames || 'bg-blue-800 hover:bg-blue-900 text-white font-bold';

  return (
    <button
      style={buttonStyle}
      className={`py-2 px-4 rounded ${colorClasses} ${disabledClassName} ${extraClassNames}`}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </button>
  );
}
