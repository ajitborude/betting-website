import React from "react";
import { NextPage } from 'next';
import _ from 'lodash';
import { useRouter } from 'next/router';


interface PageProps {

}

const ForgotPasswordPage: NextPage<PageProps> = (_props) => {
  const router = useRouter();

  return (
    <div className='flex items-center justify-center w-full h-full flex-col z-10'>
      <label>Forgot Password</label>
      <div className='px-2 btn btn-ghost menu-btn-bg h-16 w-56 my-4 z-10'
        onClick={() => {
          router.push('/login?isLogin=true');
        }}>
        <label className='ml-4 cursor-pointer'>Go Back</label>
      </div>
    </div>
  );
};


export default ForgotPasswordPage;


