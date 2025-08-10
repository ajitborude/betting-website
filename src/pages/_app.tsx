/* eslint-disable react-hooks/exhaustive-deps */
// import 'flowbite';
import "react-toastify/dist/ReactToastify.css";
import "../../styles/account.css";
import "../../styles/Calendar.css";
import "../../styles/DateRangePicker.css";
import "../../styles/globals.css";
import "../../styles/login.css";
// import SideBar from '../components/sidebar';
import { ToastContainer } from "react-toastify";
import { wrapper } from "../redux/store";
// import ModalRoot from '@/components/modals';
import AuthGuard from "@/components/common/auth-guard";
import Loader from "@/components/common/loader";
import BG from "@/public/background.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { NextComponentType, NextPage } from "next";
import type { AppProps } from "next/app";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import type { ReactElement, ReactNode } from "react";

//@ts-ignore
// const AuthGuard = dynamic(() => import('@/components/common/auth-guard.tsx'), { loading: () => <Loader />, ssr: false });
const ModalRoot = dynamic(() => import("@/components/modals"), {
  loading: () => <Loader />,
});
const SideBar = dynamic(() => import("@/components/sidebar"), {
  loading: () => <Loader />,
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
    >
      <div className="flex w-screen h-screen bg-white">
        <Head>
          <title>Betting Inc.</title>
          <meta property="og:title" content="Betting Inc." key="title" />
        </Head>
        <div className="bg-white drawer">
          <input id="wager-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content overflow-hidden !transform-none">
            <AuthGuard>
              <>
                <Image
                  src={BG}
                  alt="bg"
                  priority={true}
                  className="-z-50"
                  placeholder="blur"
                  fill
                  sizes="100vw"
                />
                {getLayout(<Component {...pageProps} />)}
              </>
            </AuthGuard>
            <div className="z-[999] absolute bottom-0 left-0 py-1 px-2 bg-slate-600 rounded-sm bg-opacity-50">
              <label className="text-xs heading">
                Version : {process.env.NEXT_PUBLIC_VERSION}
              </label>
            </div>
          </div>
          <div className="-ml-2 drawer-side ">
            <label
              htmlFor="wager-drawer"
              className="drawer-overlay mt-[70px] !opacity-80 !bg-opacity-100"
              aria-hidden="true"
            />
            <label
              htmlFor="wager-drawer"
              className="!bg-transparent !h-[70px] drawer-overlay"
              aria-hidden="true"
            />
            <div className="overflow-y-auto menu w-80 text-base-content">
              <SideBar />
            </div>
          </div>
        </div>
        <ToastContainer />
        <ModalRoot />
      </div>
    </GoogleOAuthProvider>
  );
};

export default wrapper.withRedux(App);
