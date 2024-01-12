export const getTopMenu = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/topmenu`);
  return res.json();
};
