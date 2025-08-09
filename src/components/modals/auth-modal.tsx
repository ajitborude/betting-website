import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useEffect, useReducer, useRef, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import useModal from '@/hooks/useModal';
import { ethers } from 'ethers';
import { useAppDispatch, useAppSelector } from '@/hooks/common';
import { login, register, selectAuthLoading, metamaskLogin, metamaskVerify } from '@/redux/slices/auth';
import { useRouter } from 'next/router';
import SimpleReactValidator from "simple-react-validator";
import ValidatorMessage from '../common/validator-message';

// const metamaskExtension = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'
const passwordRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
const AuthModal: React.FC<any> = ({ isLogin, isOpened }): JSX.Element => {
  const router = useRouter();
  const { confirm, decline } = useModal();
  const validator = useRef(
    new SimpleReactValidator({
      className: "text-xs text-red-700 ml-2 italic mt-1",
    })
  );
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const [isVisible, setIsVisible] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(isLogin);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [_promoCode, setPromoCode] = useState('')
  // const [address, setAddress] = useState('')
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAuthLoading);

  useEffect(() => {
    setIsLoginPage(isLogin);
  }, [isLogin]);


  const handleDecline = (e?: any) => {
    if (e)
      e.preventDefault();
    decline();
    router.reload();
  };

  // const handleConfirm = async (e?: any) => {
  //   if (e)
  //     e.preventDefault()
  //   confirm({})
  //   router.reload()
  // }

  const handleLogin = async (e?: any) => {
    if (e)
      e.preventDefault();
    const body = {
      email, password
    };
    const resp: any = await dispatch(login(body));
    if (!resp.error) {
      confirm({});
    }
  };

  const handleSignUp = async (e?: any) => {
    if (e)
      e.preventDefault();
    if (validator.current.allValid()) {
      if (!passwordRegex.test(password)) {
        toast.error(`Password should match the pattern`);
        return;
      }
      const body = {
        email, password, name
      };
      const resp: any = await dispatch(register(body));
      if (!resp.error) {
        confirm({});
      } else {
        toast.error(resp.payload.error);
      }
    } else {
      validator.current.showMessages();
      forceUpdate();
    }
  };

  // const handleGoogle = () => {
  //   handleDecline()
  // }

  const handleMetamask = async () => {
    //@ts-ignore
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        //@ts-ignore
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        //@ts-ignore
        (accounts.length === 0 && await window.ethereum.request({ method: "eth_requestAccounts" }));
        //@ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const response = await dispatch(metamaskLogin({ address }));
        //@ts-ignore
        const message = response.payload.nonce;
        const signature = await signer.signMessage(message);
        const signatureResponse = await dispatch(metamaskVerify({ signature, address }));
        //@ts-ignore
        if (!signatureResponse.error) {
          confirm({});
        }
      } catch (e: any) {
        if (e.code === 4001) {
          toast.error("user declined the metamask request");
        }
        else {
          toast.error("Something Went Wrong");
        }
      }
    }
    else toast.error("Metamask Extension Installation Required!");
  };


  const passwordFieldType = isVisible ? 'text' : 'password';
  const passwordBtnText = isVisible ? 'Hide' : 'Show';

  return (
    <div className="relative z-[9999999]">
      <Transition appear show={isOpened} as={Fragment} >
        <Dialog as="div" className="relative z-[999]" onClose={() => { }} >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center ">
              <div className="fixed inset-0 backdrop-blur-sm " aria-hidden="true" />
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {isLoading ?
                  <Dialog.Panel className="grid w-[90%] max-w-3xl grid-cols-2 overflow-hidden transition-all transform bg-white shadow-xl rounded-2xl h">

                  </Dialog.Panel> :

                  <Dialog.Panel className="grid w-[90%] max-w-3xl grid-cols-2 overflow-hidden transition-all transform bg-white shadow-xl rounded-2xl h">
                    <div className='relative h-full'>
                      <Image src='/web/login.jpg' height="100%" width="100%" layout="fill" objectFit="cover" alt='racoon' />
                    </div>
                    <div className='bg-[#111823]'>
                      <div className='flex justify-end w-full p-2'>
                        <div className='btn btn-circle bg-[#111823]' onClick={handleDecline}>X</div>
                      </div>
                      <div className='flex justify-start w-full px-8'>
                        <div className={`mr-2 btn  ${isLoginPage ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setIsLoginPage(true)}>Login</div>
                        <div className={`ml-2 btn  ${!isLoginPage ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setIsLoginPage(false)}>Sign Up</div>
                      </div>
                      <div className="flex flex-col items-start justify-center w-full px-8 pt-8">
                        {!isLoginPage &&
                          <div className='w-full mb-6'>
                            <input type="text"
                              placeholder="Name"
                              className="w-full input input-bordered "
                              onChange={(e) => setName(e.target.value)}
                              defaultValue={name}
                              onBlur={() => {
                                validator.current.showMessageFor('name');
                                forceUpdate();
                              }} />
                            <ValidatorMessage validator={validator} name={'name'} value={name} rule={'required|alpha_space'} />
                          </div>
                        }
                        <div className='w-full mb-6'>
                          <input type="text"
                            placeholder="Enter Your Email"
                            className="w-full input input-bordered"
                            onChange={(e) => setEmail(e.target.value)}
                            defaultValue={email}
                            onBlur={() => {
                              validator.current.showMessageFor('email');
                              forceUpdate();
                            }} />
                          <ValidatorMessage validator={validator} name={'email'} value={email} rule={'required|email'} />
                        </div>
                        <div className="relative w-full mb-6">
                          <input type={passwordFieldType}
                            placeholder="Enter Your Password"
                            className="w-full input input-bordered"
                            onChange={(e) => setPassword(e.target.value)}
                            defaultValue={password}
                            onBlur={() => {
                              validator.current.showMessageFor('password');
                              forceUpdate();
                            }} />
                          <ValidatorMessage validator={validator} name={'password'} value={password} rule={'required'} />
                          <button type="submit"
                            className="absolute btn right-0.5 top-0.5  btn-primary !h-8"
                            onClick={() => setIsVisible(!isVisible)}>
                            {passwordBtnText}
                          </button>
                        </div>
                        {!isLoginPage &&
                          <ul className='flex flex-col items-start justify-start px-4 mb-4 list-disc'>
                            <li className='text-xs'>Minimum 8 Characters</li>
                            <li className='text-xs'>At least one lowercase letter</li>
                            <li className='text-xs'>At least one uppercase letter</li>
                            <li className='text-xs'>At least one number</li>
                            <li className='text-xs'>At least one special symbol</li>
                          </ul>
                        }
                      </div>
                      {isLoginPage ?
                        <div className="flex flex-col items-start justify-center w-full px-8">
                          <Link href='/forgot-password'><a className='text-xs text-blue-400 underline underline-offset-4'>Forgot Password?</a></Link>
                          <div className='w-full my-6 btn btn-primary' onClick={() => handleLogin()}>Login</div>
                          <label className='mb-4 text-xs text-[#506179] font-medium w-full' >or Login with</label>
                          <div className='flex items-center justify-center w-full mb-6'>
                            <div className='text-white btn btn-secondary' onClick={handleMetamask}>Metamask</div>
                          </div>
                          <label className='text-xs text-[#506179] my-4'>By accessing the site, I confirm that I am 18 years old and I have read the {' '}
                            <Link href='/tnc'><a className='text-xs text-blue-400 underline underline-offset-4'>terms of service</a></Link>
                          </label>
                          <label className='my-4 text-xs text-white' >Don&apos;t you have an account{' '}
                            <label className='text-xs text-blue-400 underline cursor-pointer underline-offset-4' onClick={() => setIsLoginPage(false)}>Sign Up</label>
                          </label>
                        </div> :
                        <div className="flex flex-col items-start justify-center w-full px-8">
                          <div className='flex flex-row items-start my-2'>
                            <input type="checkbox" checked={true} className="checkbox checkbox-sm checkbox-primary" />
                            <label className='text-xs text-[#506179] ml-1'>By accessing the site, I confirm that I am 18 years old and I have read the {' '}
                              <Link href='/tnc'><a className='text-xs text-blue-400 underline underline-offset-4'>terms of service</a></Link>
                            </label>
                          </div>
                          <div className='flex flex-row items-center my-2'>
                            <input type="checkbox" checked={true} className="checkbox checkbox-sm checkbox-primary" />
                            <label className='text-xs text-[#506179] ml-1'>
                              Receive Email Promos
                            </label>
                          </div>
                          <div className='w-full my-6 btn btn-primary' onClick={() => handleSignUp()}>Sign Up</div>
                          <label className='mb-4 text-xs text-[#506179] font-medium  w-full'>or Signup with</label>
                          <div className='flex items-center justify-center w-full mb-6'>
                            <div className='text-white btn btn-secondary' onClick={handleMetamask}>Metamask</div>
                          </div>
                          <label className='my-4 text-xs text-white' >Already have an account{' '}
                            <label className='text-xs text-blue-400 underline cursor-pointer underline-offset-4' onClick={() => setIsLoginPage(true)}>Login</label>
                          </label>
                        </div>

                      }
                    </div>
                  </Dialog.Panel>
                }
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AuthModal;
