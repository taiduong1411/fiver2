import fetcher from "./fetcher";

// API lấy menu loại công việc
const getJobTypeMenuAPI = async () => {
  try {
    const response = await fetcher.get("/cong-viec/lay-menu-loai-cong-viec");
    return response.data.content;
  } catch (error) {
    console.log(`FE Error:${error}`);
  }
};

export { getJobTypeMenuAPI };
