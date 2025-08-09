import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import DownIcon from '@/public/down.svg';
import UpIcon from '@/public/up.svg';
import HistoryIcon from '@/public/history.svg';
import SettingsIcon from '@/public/settings.svg';
import TransactionsIcon from '@/public/transactions.svg';
import BalanceIcon from '@/public/balance.svg';
import { useAppDispatch } from '@/hooks/common';
import { logout } from '@/redux/slices/auth';
import { useRouter } from 'next/router';

interface Props {

}

const AccountMenu: React.FC<Props> = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    dispatch(logout());
    router.push('/');
  };
  return (
    <div className="z-[99999] flex items-center h-full">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button className="p-2">
              {open ?
                <UpIcon /> :
                <DownIcon />
              }
            </Popover.Button>
            {/* <Popover.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200 z-50"
              enterFrom="opacity-0 translate-y-1 z-50"
              enterTo="opacity-100 translate-y-0 z-50"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-[999999] p-2 mt-6 bg-base-100 rounded-lg border border-white border-opacity-30 shadow-[0px_0px_7px_rgba(255,255,255,0.4)] w-64">
                <div className='justify-start w-full px-2 btn btn-primary'
                  onClick={() => {
                    router.push('/account?tab=0');
                    close();
                    // router.reload();
                  }}>
                  <SettingsIcon />
                  <label className='ml-4 cursor-pointer'>Account Settings</label>
                </div>
                <div className='justify-start w-full px-2 btn btn-primary'
                  onClick={() => {
                    router.push('/account?tab=3');
                    close();
                    // router.reload();
                  }}>
                  <BalanceIcon />
                  <label className='ml-4 cursor-pointer'>My Balance</label>
                </div>
                <div className='justify-start w-full px-2 btn btn-primary'
                  onClick={() => {
                    router.push('/referral?tab=1');
                    close();
                    // router.reload();
                  }}>
                  <TransactionsIcon />
                  <label className='ml-4 cursor-pointer'>Transactions</label>
                </div>
                <div className='justify-start w-full px-2 btn btn-primary'
                  onClick={() => {
                    router.push('/account?tab=2');
                    close();
                    // router.reload();
                  }}>
                  <HistoryIcon />
                  <label className='ml-4 cursor-pointer'>Game History</label>
                </div>
                <div className="w-full mt-4 border border-white btn btn-primary"
                  onClick={() => handleLogout()}>
                  Sign Out
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default AccountMenu;


