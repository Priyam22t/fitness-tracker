export const signup = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
  return { success: true, user: data };
};

export const login = ({ email, password }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.email !== email) {
    throw new Error("Invalid credentials");
  }

  return { success: true, user };
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
