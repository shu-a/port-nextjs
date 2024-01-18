'use client';

import React from 'react';

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <button onClick={() => history.go(-1)}>뒤로가기</button>
      </div>
      <div className="flex flex-col items-center justify-center">
        이메일
        <input type="text" className="border"></input>
        비밀번호
        <input type="password" className="border"></input>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button onClick={() => history.go(-1)}>로그인</button>
      </div>
    </div>
  );
};

export default SignIn;
