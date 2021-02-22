import React from 'react';

export default function CounterButton({
  className = '',
  children,
  onPress = null,
  onClick = null,
  ...otherProps
}) {
  let interval = React.useRef(null);

  function handleClick() {
    if (!onClick) {
      return null;
    }

    onClick();
  }

  function handleTouchStart() {
    if (!onPress) {
      return;
    }

    interval.current = setInterval(() => {
      onPress();
    }, 100);
  }

  function handleTouchEnd() {
    if (interval.current) {
      clearInterval(interval.current);
    }
  }

  return (
    <button
      className={`bg-gray-100 
                  w-10 
                  text-center 
                text-gray-900 
                  font-bold 
                  rounded-md 
                  flex 
                  items-center 
                  justify-center 
                  h-8 
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  ${className}`}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
      {...otherProps}
    >
      {children}
    </button>
  );
}
