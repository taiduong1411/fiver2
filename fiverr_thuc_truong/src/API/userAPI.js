import fetcher from "./fetcher";

// Đăng nhập
export const signInAPI = async (data) => {
  try {
    const response = await fetcher.post("/auth/signin", data);
    return response.data.content;
  } catch (error) {
    throw Error("Error!!!");
  }
};

// Đăng xuất
export const signUpAPI = async (data) => {
  try {
    const response = await fetcher.post("/auth/signup", data);
    return response.data.content;
  } catch (error) {
    throw Error("Error!!!");
  }
};
