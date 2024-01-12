export const getTopMenu = async () => {
  try {
    const res = await fetch(`${process.env.PROTOCOL}//${process.env.NEXT_PUBLIC_VERCEL_URL}/api/topmenu`);
    return res.json();
  } catch (error) {
    console.error("getTopMenu:", error);
  }
};
