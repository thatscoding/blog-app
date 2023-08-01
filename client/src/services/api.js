import axios from "axios";

export const registerUser = async (data) => {
  try {
    return await axios.post("/user/register", data);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (data) => {
  try {
    return await axios.post("/user/login", data);
  } catch (error) {
    console.log(error);
  }
};
