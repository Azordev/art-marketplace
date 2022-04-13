import React from 'react';

export const ItemFilter = ({ item }) => {
  return (
    <div className='py-2 ml-2 cursor-pointer text-black hover:no-underline'>{item}</div>
  );
};
