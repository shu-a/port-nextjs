import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    // 일반 Custom Auth
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: '아이디', type: 'text', placeholder: '아이디 입력' },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const headers: HeadersInit = new Headers();
        headers.set('Content-type', 'application/json');
        headers.set('x-api-key', process.env['X_API_KEY'] as string);

        try {
          const res = await fetch(`${process.env.API_URL}/api/login`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          });
          // `${process.env.PROTOCOL}//${process.env.VERCEL_URL}/api/login`,
          const user = await res.json();
          console.log(user);

          if (user.code === 'S0000' && user.result.data.login === 'SUCCESS') {
            // Any object returned will be saved in `user` property of the JWT
            console.log('로그인 사용자');
            return user;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;
          }
        } catch (error) {
          console.error('login:', error);
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
