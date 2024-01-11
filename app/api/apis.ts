import axios from "axios";

export const getTopMenu = async () => {
  const res = await axios("http://localhost:3000/api/topmenu");
  return res.data.result.content;
};
