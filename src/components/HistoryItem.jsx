import React from 'react';
import { Link } from 'react-router-dom';

const HistoryItem = ({ id, title, image }) => (
  <Link
    to={`/artwork/${id}`}
    className="flex items-center justify-between py-1 hover:underline"
  >
    <p className="text-xl truncate mr-2">{title}</p>
    <img
      alt="Arte"
      src={image}
      className="object-cover w-20 h-20"
    />
  </Link>
);

export default HistoryItem;
