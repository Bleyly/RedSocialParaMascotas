export const validateEmail = (email) => {
  const regularExpresion = /\S+@\S+\.\S+/;

  return !email || email.length <= 0 || !regularExpresion.test(email);
};

export const validatePassword = (password) => {
  return !password || password.length <= 0;
};

export const validateName = (name) => {
  return !name || name.length <= 0;
};
