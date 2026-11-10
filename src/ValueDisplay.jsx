import React, { useRef, useEffect } from 'react';

function ValueDisplay({ value }) {
  // реф хранит значение между рендерами, но его изменение не вызывает перерисовку
  const previousValue = useRef('');

  // эффект срабатывает ПОСЛЕ рендера, поэтому во время рендера
  // в рефе ещё лежит старое значение
  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <div className="values">
      <p>
        <span className="label">Current Value:</span> {value}
      </p>
      <p>
        <span className="label">Previous Value:</span> {previousValue.current}
      </p>
    </div>
  );
}

export default ValueDisplay;
