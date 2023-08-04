import axios from "axios";

export const registerUser = async (data) => {
  try {
    return await axios.post("/user/register", data);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (loginData) => {
  try {
    const { data } = await axios.post("/user/login", loginData);
    // console.log("test", data.user);

    localStorage.setItem("UserInfo", JSON.stringify(data.user));
    return data;
  } catch (error) {
    console.log(error);
  }
};
