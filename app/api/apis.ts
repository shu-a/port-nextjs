import axios from "axios";

// export const getTopMenu = async () => {
//   const res = await axios(`${process.env.BASE_URL}/api/topmenu`);
//   return res.data;
// };

export const getTopMenu = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/topmenu`);
    return res.json();
  } catch (error) {
    console.error("getTopMenu:", error);
  }
};
