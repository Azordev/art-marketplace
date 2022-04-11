const deleteEmptyFields = (data) => {
  const keys = [];

  for (const [key, value] of data.entries()) {
    if (value === '') {
      keys.push(key);
    }
  }

  keys.forEach((key) => {
    data.delete(key);
  });
};

export default deleteEmptyFields;
