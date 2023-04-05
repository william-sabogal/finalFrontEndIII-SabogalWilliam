export const nameIsNotValid = (name) => {
  const nameLengthIsValid = name.length > 5;
  const charName = name.split("");
  const isCharValid = () => {
    charName.forEach((element) => {
      if (!/[a-zA-Z]/.test(element)) {
        return false;
      }
    });
    return true;
  };
  return nameLengthIsValid;
};

export const emailIsNotValid = (email) => {
  return (
    email.includes("@") &&
    email.split("@")[0].length > 0 &&
    email.split("@")[1].length > 0
  );
};
