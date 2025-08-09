import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppDispatch } from '@/hooks/common';
import { logout } from '@/redux/slices/auth';
import { useRouter } from 'next/router';
import SecondaryButton from '../common/secondary-button';
import TopBarMenuButton from '../common/topbar-menu-button';

interface Props {

}

const AccountMenu: React.FC<Props> = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    dispatch(logout());
    router.push('/login?isLogin=true');
  };
  return (
    <div className="flex items-center h-full w-full">
      <Popover className="relative w-full h-full">
        {({ open, close }) => (
          <>
            <Popover.Button className="w-full h-full outline-0	">
              {open ?
                <TopBarMenuButton type='down' />
                :
                <TopBarMenuButton type='down' />
              }
            </Popover.Button>
            {/* <Popover.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 mt-2 !min-w-[120px] popup-bg py-4 px-2 w-[250%] md:w-[200%] lg:w-[160%] xls:w-[120%] 2xl:w-full">
                <Transition
                  as={Fragment}
                  appear={true}
                  enter={`transition-all ease-in duration-200 transition-delay-50`}
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div>
                    <SecondaryButton icon='settings' size='md' onClick={() => {
                      router.push('/account?tab=0');
                      close();
                    }}>
                      <div className='w-full h-full flex items-center'>
                        <label className='account-settings-btn-label truncate'>Account Settings</label>
                      </div>
                    </SecondaryButton>
                  </div>
                </Transition>
                <Transition
                  as={Fragment}
                  appear={true}
                  enter={`transition-all ease-in duration-200 transition-delay-100`}
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div>
                    <SecondaryButton icon='transactions' size='md' onClick={() => {
                      router.push('/account?tab=1');
                      close();
                    }}>
                      <div className='w-full h-full flex items-center'>
                        <label className='account-settings-btn-label'>Transactions</label>
                      </div>
                    </SecondaryButton>
                  </div>
                </Transition>
                <Transition
                  as={Fragment}
                  appear={true}
                  enter={`transition-all ease-in duration-200 transition-delay-150`}
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div>
                    <SecondaryButton icon='game-history' size='md' onClick={() => {
                      router.push('/account?tab=2');
                      close();
                    }}>
                      <div className='w-full h-full flex items-center'>
                        <label className='account-settings-btn-label'>Game History</label>
                      </div>
                    </SecondaryButton>
                  </div>
                </Transition>
                <Transition
                  as={Fragment}
                  appear={true}
                  enter={`transition-all ease-in duration-200 transition-delay-200`}
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div>
                    <SecondaryButton icon='game-history' size='md' onClick={() => {
                      router.push('/account?tab=3');
                      close();
                    }}>
                      <div className='w-full h-full flex items-center'>
                        <label className='account-settings-btn-label'>Sessions</label>
                      </div>
                    </SecondaryButton>
                  </div>
                </Transition>
                <Transition
                  as={Fragment}
                  appear={true}
                  enter={`transition-all ease-in duration-200 transition-delay-250`}
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div>
                    <SecondaryButton icon='balance' size='md' onClick={() => {
                      router.push('/referral?tab=0');
                      close();
                    }}>
                      <div className='w-full h-full flex items-center'>
                        <label className='account-settings-btn-label'>Referral</label>
                      </div>
                    </SecondaryButton>
                  </div>
                </Transition>
                <Transition
                  as={Fragment}
                  appear={true}
                  enter={`transition-all ease-in duration-200 transition-delay-300`}
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div className="w-full btn btn-ghost red-btn-bg h-14"
                    onClick={() => handleLogout()}>
                    <label className='cursor-pointer heading'>Sign Out</label>
                  </div>
                </Transition>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover >
    </div >
  );
};

export default AccountMenu;


