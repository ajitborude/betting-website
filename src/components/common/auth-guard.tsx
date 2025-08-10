import { useAppSelector } from "@/hooks/common";
import { selectAuthLoading } from "@/redux/slices/auth";
import { useRouter } from "next/router";
import React from "react";
import Loader from "./loader";

interface Props {
  children: JSX.Element;
}

const unProtectedRoutes = ["/login", "/forgot-password", "/_error"];

const AuthGuard: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const isLoading = useAppSelector(selectAuthLoading);
  const isAuthorized = true; //useAppSelector(selectIsAuthorized);

  // useEffect(() => {
  //   if (!isAuthorized && !unProtectedRoutes.includes(router.pathname)) {
  //     router.push('/login?isLogin=true')
  //   }
  // }, [isAuthorized]);

  if (isLoading) {
    return <Loader />;
  }
  if (isAuthorized || unProtectedRoutes.includes(router.pathname)) {
    return children;
  } else {
    if (typeof window !== "undefined") {
      router.replace("/login?isLogin=true");
    }
  }

  return (
    // < div className='flex flex-col items-center justify-center w-full h-full' >
    //   <label className="m-2 text-2xl font-bold text-center">
    //     Unauthorized
    //   </label>
    //   <label className="m-2 text-xl font-semibold text-center">
    //     You don&apos;t have permission to access this page.
    //   </label>
    //   <label className="m-2 text-xl font-semibold text-center">
    //     Please Login/Register.
    //   </label>
    // </ div>
    <div></div>
  );
};

export default AuthGuard;
