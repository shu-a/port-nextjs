'use client';

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface Props {
  children: ReactNode;
}

const NextAuthProviders = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProviders;
