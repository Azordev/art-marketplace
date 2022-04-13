import React from 'react';

export const SelectedItemFilter = ({ item }) => {
  const style = {
    color: 'white',
    backgroundColor: '#11698E',
    padding: '5px',
  };

  return (
    <div style={style}>{item}</div>
  );
};
