'use client';

import Link from 'next/link';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const TopUserMenu = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="md:ml-3 md:mr-7">
        <button className="w-[100px]" onClick={() => signOut()}>
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <div className="md:ml-3 md:mr-7">
      <button className="w-[100px]" onClick={() => signIn()}>
        로그인
      </button>
    </div>
  );
};

export default TopUserMenu;
