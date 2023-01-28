const { default: axios } = required("api/axios");

export const requestAuthLogin = (data) => {
  return axios.post("/login", {
    ...data,
  });
};
