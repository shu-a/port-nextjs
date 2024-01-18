const headers: HeadersInit = new Headers();
headers.set('Content-type', 'application/json');
headers.set('x-api-key', process.env['X_API_KEY'] as string);

export const getTopMenu = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/topmenu`, {
      method: 'GET',
      headers,
    });
    // `${process.env.PROTOCOL}//${process.env.VERCEL_URL}/api/topmenu`,
    return res.json();
  } catch (error) {
    console.error('getTopMenu:', error);
  }
};