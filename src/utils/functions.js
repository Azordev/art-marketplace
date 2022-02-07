export const loadFunction = (callback) => {
  return new Promise((reject, resolve) => {
    callback();
  })
}

