'use client';

import Link from 'next/link';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const TopUserMenu = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <button className="md:ml-3 md:mr-7" onClick={() => signOut()}>
          로그아웃
        </button>
      </>
    );
  }

  return (
    <>
      <button className="md:ml-3 md:mr-7" onClick={() => signIn()}>
        로그인
      </button>
    </>
  );
};

export default TopUserMenu;
