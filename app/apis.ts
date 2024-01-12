export const getTopMenu = async () => {
  try {
    const res = await fetch(`${process.env.PROTOCOL}//${process.env.VERCEL_URL}/api/topmenu`);
    return res.json();
  } catch (error) {
    console.error("getTopMenu:", error);
  }
};
