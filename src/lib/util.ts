// Generate a unique id (unique within the entire client session).
// Useful for temporary DOM ids.
export const uniqueId = (() => {
  let idCounter = 0;
  return (prefix = "uid") => {
    return `card_${prefix}_${++idCounter}`;
  };
})();
