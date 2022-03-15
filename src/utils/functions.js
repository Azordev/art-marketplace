export const loadFunction = (callback) => {
  return new Promise(() => {
    callback();
  });
};
