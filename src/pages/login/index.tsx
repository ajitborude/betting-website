import { useAppDispatch } from "@/hooks/common";
import Frame from "@/public/login/frame.png";
import {
  googleLogin,
  login,
  metamaskLogin,
  metamaskVerify,
  register,
} from "@/redux/slices/auth";
import { Transition } from "@headlessui/react";
import { ethers } from "ethers";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useEffect, useReducer, useRef, useState } from "react";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
// import PrimaryButton from "@/components/common/primary-button";
// import SecondaryButton from "@/components/common/secondary-button";
import { useGoogleLogin } from "@react-oauth/google";

const TextInput = dynamic(() => import("@/components/common/text-input"), {
  loading: () => <div />,
});
const PrimaryButton = dynamic(
  () => import("@/components/common/primary-button"),
  { loading: () => <div /> }
);
const SecondaryButton = dynamic(
  () => import("@/components/common/secondary-button"),
  { loading: () => <div /> }
);

// const passwordRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/);
const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/);

interface PageProps {}

const LoginPage: NextPage<PageProps> = (_props) => {
  const validator = useRef(
    new SimpleReactValidator({
      className: "text-sm text-error-500 ml-2 italic mt-1 truncate",
    })
  );
  const [_update, forceUpdate] = useReducer((x) => x + 1, 0);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const isLoginPage = router.query.isLogin === "true";
  const [isAccepted, setIsAccepted] = useState(false);
  const [showTncError, setShowTncError] = useState(false);
  const [email, setEmail] = useState("sample.user@mailinator.cc");
  const [password, setPassword] = useState("StrongPassword");
  const [isShowing, setShowing] = useState(false);
  // const [showCriteria, setShowCriteria] = useState(false);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const resp: any = await dispatch(
        googleLogin({ code: codeResponse.code })
      );
      if (resp.error) {
        return toast.error(resp.payload.error);
      }
      return router.push("/");
    },
    onError: async (errorResponse) => {
      return toast.error(errorResponse.error_description);
    },
    flow: "auth-code",
  });

  const handleAuth = async (e?: any) => {
    if (e) e.preventDefault();
    if (!validator.current.allValid()) {
      validator.current.showMessages();
      forceUpdate();
      return;
    }

    if (isLoginPage) {
      const body = {
        email,
        password,
      };
      const resp: any = await dispatch(login(body));
      if (resp.error) {
        return toast.error(resp.payload.error);
      }
      return router.push("/");
    } else {
      if (!isAccepted) {
        return setShowTncError(true);
      }
      if (!passwordRegex.test(password)) {
        return toast.error(`Password should match the pattern`);
      }
      const body = {
        email,
        password,
      };
      const resp: any = await dispatch(register(body));
      if (resp.error) {
        if ((resp.error = "Email Id Already Exists")) {
          toast.error("Hey you already have an account, Please login");
          setTimeout(() => {
            return router.push("/login?isLogin=true");
          }, 2000);
        } else {
          return toast.error(resp.payload.error);
        }
      }
      return router.push("/");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 400);
  }, []);

  //@ts-ignore
  const handleMetamask = async (e?: any) => {
    if (e) e.preventDefault();

    if (!isAccepted && !isLoginPage) {
      return setShowTncError(true);
    }
    //@ts-ignore
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        //@ts-ignore
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        //@ts-ignore
        accounts.length === 0 &&
          //@ts-ignore
          (await window.ethereum.request({ method: "eth_requestAccounts" }));
        //@ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const response = await dispatch(metamaskLogin({ address }));
        //@ts-ignore
        const message = response.payload.nonce;
        const signature = await signer.signMessage(message);
        const signatureResponse = await dispatch(
          metamaskVerify({ signature, address })
        );
        //@ts-ignore
        if (!signatureResponse.error) {
          router.push("/");
        }
      } catch (e: any) {
        if (e.code === -32002) {
          return;
        } else if (e.code === 4001) {
          return toast.error("User Declined The Metamask Request");
        } else {
          return toast.error("Something Went Wrong");
        }
      }
    } else {
      return toast.error("Metamask Extension Installation Required!");
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      {/* <div className='absolute top-0 left-0 p-4' onClick={() => setShowing(!isShowing)}>Start Animation</div> */}
      <div className="flex items-center justify-center w-[650px] max-w-full overflow-hidden scroll-smooth">
        <Transition
          show={isShowing}
          as={Fragment}
          appear={true}
          enter="transition ease-in-out duration-300"
          enterFrom="opacity-0 scale-0 origin-top-right"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-0 origin-top-right"
        >
          <form
            className="relative flex flex-col items-center justify-between w-full h-full py-8"
            onSubmit={(e) => {
              e.preventDefault();
              handleAuth();
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <Image
                src={Frame}
                alt="frame"
                priority={true}
                placeholder="blur"
                fill
                sizes="100vw"
              />
            </div>
            <div className="flex self-end mr-12">
              <label className={isLoginPage ? "login-title" : "signup-title"}>
                {isLoginPage ? "Login" : "Sign up"}
              </label>
            </div>
            <div className=" w-[75%] h-full flex items-center justify-between flex-col -ml-3 ">
              {isLoginPage ? (
                <span className="my-2 login-info">
                  Enter any email & password to login
                </span>
              ) : (
                <div className="flex flex-col items-center my-2">
                  <span className="signup-info ">
                    Enter any email & password to sign up.
                  </span>
                  <span className="signup-info ">
                    We will not create any account
                  </span>
                </div>
              )}

              <div className="w-full mt-5">
                <TextInput
                  icon={{ name: "user", type: "default" }}
                  isPassword={false}
                  validator={[validator, "required|email"]}
                  defaultValue={email}
                  placeholder="Enter Email Address"
                  label="email"
                  onChange={(value) => setEmail(value)}
                  transition={{ isShowing, delay: "300" }}
                />
              </div>

              <div className="w-full mt-5">
                <TextInput
                  icon={{ name: "password", type: "default" }}
                  isPassword={true}
                  validator={[validator, "required"]}
                  defaultValue={password}
                  placeholder="Enter Password"
                  label="password"
                  onChange={(value) => setPassword(value)}
                  extraLabel="Forgot Password ?"
                  extraLink="/forgot-password"
                  transition={{ isShowing, delay: "500" }}
                />
              </div>

              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter="ease-in duration-300 delay-700"
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                {/* <div> */}
                <div className="flex flex-row items-start justify-start w-full mt-4 mb-2">
                  {!isLoginPage && (
                    <div className="custom-checkbox ">
                      <input
                        type="checkbox"
                        name="tnc"
                        value="tnc"
                        id="tnc"
                        checked={isAccepted}
                        onChange={() => {
                          setIsAccepted(!isAccepted);
                          if (!isAccepted) setShowTncError(false);
                        }}
                      />
                      <label htmlFor="tnc" />
                    </div>
                  )}

                  <label className="ml-1 text-sm font-bold text-left">
                    {isLoginPage && <label>By logging in to the site,</label>} I
                    confirm that I am
                    <label className="w-full text-sm font-bold">
                      {" "}
                      18 years or older
                    </label>{" "}
                    and I have read the{" "}
                    <label
                      className="w-full mb-2 text-sm font-bold underline cursor-pointer underline-offset-2 text-special-500"
                      onClick={() => router.push("/tnc")}
                    >
                      Terms of Service
                    </label>
                  </label>
                </div>
                {/* </div> */}
              </Transition>
              <label className="w-full ml-12 text-sm font-bold text-left text-error-500">
                {" "}
                {showTncError ? "Please accept terms of service" : ""}
              </label>
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter={`ease-in-out transition-[opacity] duration-300 delay-[0.9s]`}
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                <div className="flex w-full mt-2 mb-4">
                  <PrimaryButton onClick={() => {}} btnType="submit">
                    <label
                      className={`text-center ${
                        isLoginPage
                          ? "login-btn-label"
                          : "create-account-btn-label"
                      }`}
                    >
                      {isLoginPage ? "Login" : "Create Account"}
                    </label>
                  </PrimaryButton>
                </div>
              </Transition>
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter={`ease-in-out transition-[opacity] duration-300 delay-1200`}
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                <div className="flex flex-col items-center justify-center w-[110%] login-v2-strip">
                  <label className="w-full py-3 font-semibold text-center">
                    {isLoginPage
                      ? "Don't have an account? "
                      : "Already have an account? "}
                    {isLoginPage ? (
                      <label
                        className="w-full mb-2 text-sm font-bold underline uppercase cursor-pointer underline-offset-2 text-special-500"
                        onClick={() => router.push("/login?isLogin=false")}
                      >
                        Sign Up Here
                      </label>
                    ) : (
                      <label
                        className="w-full mb-2 text-sm font-bold underline uppercase cursor-pointer underline-offset-2 text-special-500"
                        onClick={() => router.push("/login?isLogin=true")}
                      >
                        Login Here
                      </label>
                    )}
                  </label>
                </div>
              </Transition>

              {/* <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter={`ease-in-out transition-[opacity] duration-300 delay-[1.4s]`}
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                <div className="flex flex-col items-center justify-center w-full my-2 text-sm">
                  <label className="text-lg font-semibold">
                    {isLoginPage ? "Or Login With" : "Or Sign Up With"}
                  </label>
                  <div className="flex flex-row items-center justify-around w-full my-4">
                    <div className="flex w-[49%]">
                      <SecondaryButton
                        icon="google"
                        size="md"
                        onClick={() => {
                          if (!isAccepted && !isLoginPage) {
                            return setShowTncError(true);
                          }
                          handleGoogleLogin();
                          // router.replace(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`);
                        }}
                      >
                        <label className="text-left google-btn-label">
                          Google
                        </label>
                      </SecondaryButton>
                    </div>
                    <div className="flex w-[49%]">
                      <SecondaryButton
                        size="md"
                        onClick={handleMetamask}
                        icon="metamask"
                      >
                        <label className="text-left metamask-btn-label">
                          metamask
                        </label>
                      </SecondaryButton>
                    </div>
                  </div>
                </div>
              </Transition> */}
              {/* 
              <div className='absolute -bottom-1 right-1 flex items-center justify-end w-20 h-20 rotate-[4deg]'
                onClick={() => { router.push('/'); }}>
                <CloseButton />
              </div>
              */}
            </div>
          </form>
        </Transition>
      </div>
    </div>
  );
};

export default LoginPage;
