import axios from "axios";

// export const getTopMenu = async () => {
//   const res = await axios(`${process.env.BASE_URL}/api/topmenu`);
//   return res.data;
// };

export const getTopMenu = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch(`${process.env.BASE_URL}/api/topmenu`, config);
  return res.json();
};
