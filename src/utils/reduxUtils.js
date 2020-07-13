export const updateObject = (odlObject, updatedProperties) => {
  return {
    ...odlObject,
    ...updatedProperties,
  };
};
