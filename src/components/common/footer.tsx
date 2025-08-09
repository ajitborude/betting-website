import React, { useState, Fragment, useEffect } from "react";
import Image from 'next/image';
import SocialButton from './social-button';
import { Transition } from '@headlessui/react';
interface Props {

}
const Footer: React.FC<Props> = (_props) => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 400);
  }, []);
  return (
    <Transition
      show={isShowing}
      as={Fragment}
      appear={true}
      enter="transition-all ease-in duration-200"
      enterFrom="origin-bottom opacity-0 translate-y-[100%]"
      enterTo="opacity-100 translate-y-[0%]"
    >
      <div className="footer-wrapper z-[999] ">
        <footer className='py-10 footer-main'>
          <div className='flex flex-row justify-around w-[40%] items-center'>
            <div className='flex flex-col my-5'>
              <span className="footer-header">Features</span>
              <a className="footer-link">Stacking</a>
              <a className="footer-link">Cashback</a>
              <a className="footer-link">Daily Tasks</a>
            </div>
            <div className='flex flex-col my-5'>
              <span className="footer-header">About us</span>
              <a className="footer-link">News</a>
              <a className="footer-link">About wager.bet</a>
              <a className="footer-link">wager.bet Docs</a>
            </div>
            <div className='flex flex-col my-5'>
              <span className="footer-header">iGaming</span>
              <a className="footer-link">All Games</a>
              <a className="footer-link">Dice</a>
              <a className="footer-link">Slots</a>
            </div>
            <div className='flex flex-col my-5'>
              <span className="footer-header">Help</span>
              <a className="footer-link">Sports Betting T&C</a>
              <a className="footer-link">Live Support</a>
              <a className="footer-link">Privacy policy</a>
            </div>
          </div>
          <div className='flex flex-col items-center justify-start my-10 w-[30%]'>
            <span className="mb-5 footer-header">Follow US ON</span>
            <div className='flex flex-col items-center justify-start w-[90%]'>
              <div className='flex flex-row items-center justify-center w-full '>
                <div className='relative flex items-center justify-center w-1/3 mx-1'>
                  <SocialButton type='telegram' />
                </div>
                <div className='flex items-center justify-center w-1/3 mx-1'>
                  <SocialButton type='reddit' />
                </div>
                <div className='flex items-center justify-center w-1/3 mx-1'>
                  <SocialButton type='twitter' />
                </div>
              </div>
              <div className='flex flex-row items-center justify-center w-full -m-12'>
                <div className='flex items-center justify-center w-1/3'>
                  <SocialButton type='facebook' />
                </div>
                <div className='flex items-center justify-center w-1/3'>
                  <SocialButton type='instagram' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[30%] items-center'>
            <div className='flex flex-row items-center justify-around w-full'>
              <Image
                src='/icons/18-plus.png'
                width={90}
                height={90}
                objectFit='contain'
                alt='icon' />
              <label className='heading'>responsible gaming</label>
            </div>
            <label className="text-white text-sm p-6 leading-5 w-[85%] text-justify -mt-8 footer-warning-frame">
              This website offers gaming with risk experience. To be a user of our site you must be over 18 y.o. We are not responsible for the violation of your local laws related to i-gaming. Play responsibly and have fun on Wager.bet
            </label>

            <div className='flex flex-row items-center justify-end w-[85%] mt-4'>
              <Image
                src='/icons/pci.png'
                width={70}
                height={15}
                objectFit='contain'
                alt='icon' />
              <Image
                src='/icons/siq.png'
                width={70}
                height={15}
                objectFit='contain'
                alt='icon' />
              <Image
                src='/icons/gambler.png'
                width={70}
                height={15}
                objectFit='contain'
                alt='icon' />
            </div>
          </div>
        </footer >
      </div >
    </Transition >
  );
};

export default Footer;