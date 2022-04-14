import React from 'react';

export const ItemFilter = ({ element, selectedElement }) => {
  const selectedStyles = selectedElement === element.en
    ? {
      color: 'white',
      backgroundColor: '#11698E',
    }
    : {};
  return (
    <div style={selectedStyles} className='py-2 pl-2 cursor-pointer text-black hover:no-underline'>{element.es}</div>
  );
};
