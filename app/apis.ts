export const getTopMenu = async () => {
  try {
    const res = await fetch(`/api/topmenu`);
    return res.json();
  } catch (error) {
    console.error("getTopMenu:", error);
  }
};
