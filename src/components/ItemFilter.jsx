import React from 'react';

export const ItemFilter = ({ element, selectedElement }) => {
  const selectedStyles = selectedElement === element.en
    ? {
      color: 'white',
      backgroundColor: '#11698E',
      paddingLeft: '0.5rem',
    }
    : {
      paddingLeft: '0.5rem',
    };
  return (
    <div style={selectedStyles} className='py-2 cursor-pointer text-black hover:no-underline'>{element.es}</div>
  );
};
