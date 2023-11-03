export const initializeAValues = () => {
  const values = [];
  for (let i = 0; i < 6; i++) {
    let hlp = [];
    for (let j = 0; j < 6; j++) {
      hlp.push(0);
    }
    values.push(hlp);
  }
  return values;
};

export const initializeBValues = () => {
  const values = [];
  for (let i = 0; i < 6; i++) {
    values.push(0);
  }
  return values;
};
