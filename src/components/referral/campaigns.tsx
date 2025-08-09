import React, { useState, Fragment, useEffect } from "react";
import { format } from 'date-fns';
// import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import { GetServerSideProps } from "next";
import { wrapper } from '@/redux/store';
import useModal from '@/hooks/useModal';
import Select from '../common/select';
import Icon from '../common/icon';
import { Transition } from '@headlessui/react';


// const CustomDatePicker = dynamic(() => import('../common/date-picker'), { loading: () => <div />, ssr: false });

const campaigns = [
  {
    id: 1,
    created_at: new Date(),
    campaign_name: 'Campaign 1',
    link: 'https://example.net/bike/approval?beds=battle&blood=bell',
    deposit: '0.0012 BTC',
    wager: '0.0012 BTC',
    ftd_count: 1,
    sum_ftd: '0.0012 BTC',
    click: 6,
    referrals: 2,
    commission: '0.0012 BTC',
    deposit_num: 4,
  },
  {
    id: 2,
    created_at: new Date(),
    campaign_name: 'Campaign 2',
    link: 'https://example.net/bike/approval?beds=battle&blood=bell',
    deposit: '0.0012 BTC',
    wager: '0.0012 BTC',
    ftd_count: 1,
    sum_ftd: '0.0012 BTC',
    click: 6,
    referrals: 2,
    commission: '0.0012 BTC',
    deposit_num: 4,

  },
  {
    id: 3,
    created_at: new Date(),
    campaign_name: 'Campaign 3',
    link: 'https://example.net/bike/approval?beds=battle&blood=bell',
    deposit: '0.0012 BTC',
    wager: '0.0012 BTC',
    ftd_count: 1,
    sum_ftd: '0.0012 BTC',
    click: 6,
    referrals: 2,
    commission: '0.0012 BTC',
    deposit_num: 4,

  },
  {
    id: 4,
    created_at: new Date(),
    campaign_name: 'Campaign 4',
    link: 'https://example.net/bike/approval?beds=battle&blood=bell',
    deposit: '0.0012 BTC',
    wager: '0.0012 BTC',
    ftd_count: 1,
    sum_ftd: '0.0012 BTC',
    click: 6,
    referrals: 2,
    commission: '0.0012 BTC',
    deposit_num: 4,

  },
  {
    id: 5,
    created_at: new Date(),
    campaign_name: 'Campaign 5',
    link: 'https://example.net/bike/approval?beds=battle&blood=bell',
    deposit: '0.0012 BTC',
    wager: '0.0012 BTC',
    ftd_count: 1,
    sum_ftd: '0.0012 BTC',
    click: 6,
    referrals: 2,
    commission: '0.0012 BTC',
    deposit_num: 4,

  },
];

const filterData = [
  {
    id: 1,
    title: 'Upcoming',
    name: 'upcoming'
  },
  {
    id: 2,
    title: 'Active',
    name: 'active'
  }, {
    id: 3,
    title: 'Past',
    name: 'past'
  }
];

const filterDefaultOption = {
  id: 0,
  name: 'default',
  title: 'View All'
};

const GameHistory: React.FC = (): JSX.Element => {
  const [isShowing, setShowing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 400);
  }, []);

  const [dates, _setDates] = useState([new Date(), new Date()]);
  const [activeCampaign, setActiveCampaign] = useState<number | null>(null);
  const [_filter, setFilter] = useState(filterData[0]);

  const { open } = useModal();

  const openCampaignModal = (props: { campaign: any; }) => {
    open({ modalType: 'REFERRAL_CAMPAIGN', modalProps: { campaign: props.campaign } });
  };

  const openBalanceModal = () => {
    open({ modalType: 'REFERRAL_BALANCE', modalProps: {} });
  };

  const renderItem = (campaign: any, delay: number) => {
    const isSelected = activeCampaign === campaign.id;
    return (
      <div className='flex flex-col items-center justify-center'>
        <div className='flex-col items-center hidden w-full py-2 my-2 md:flex campaign-row'>

          <div className="flex self-end">
            <label className={`referral-label text-xl !text-title-500`}>{campaign.campaign_name}</label>
          </div>
          <div className='flex flex-row items-end w-full px-4 mb-1'>
            <div className='flex flex-col items-center justify-center w-1/5 h-full'>
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter={`transition-all ease-linear duration-400 transition-delay-${delay + 600}`}
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                <div className='h-[80%] w-full flex items-center justify-center'>
                  <label className='text-lg font-bold'>{format(campaign.created_at, 'dd/MM/yyyy')}</label>
                </div>
              </Transition >
              <div className=' h-[20%] flex self-center'>
                <label className='referral-label !text-special-500 truncate'>created on</label>
              </div>
            </div>
            <div className='flex flex-col items-center justify-start w-1/5'>
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter={`transition-all ease-linear duration-400 transition-delay-${delay + 800}`}
                enterFrom="opacity-0 scale-x-125"
                enterTo="opacity-100 scale-x-100"
              >
                <div className='h-[80%] w-full flex items-center justify-center'>
                  <label className='flex flex-row text-lg font-bold'>
                    <Icon source='bitcoin' size='sm' />
                    {campaign.deposit}
                  </label>
                </div>
              </Transition >
              <div className=' h-[20%] flex self-center'>
                <label className='referral-label !text-special-500 truncate'>Total Deposits</label>
              </div>
            </div>
            <div className='flex flex-row items-start justify-between w-2/3'>
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter={`transition-all ease-linear duration-400 transition-delay-${delay + 1000}`}
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                <div className='flex flex-row items-center justify-between w-[75%] input-bg pl-20 h-[85%] py-2'>
                  <label className='px-4 truncate'>
                    {campaign.link}
                  </label>
                  <div className='px-4 mx-2 text-sm btn btn-ghost btn-sm heading'
                    onClick={() => {
                      navigator.clipboard.writeText(campaign.link);
                      toast.info('Copied!');
                    }}>Copy</div>
                </div>
              </Transition >
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter={`transition-all ease-linear duration-400 transition-delay-${delay + 1200}`}
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                <div className="flex flex-row items-center justify-center">
                  <div className='btn btn-circle btn-ghost' onClick={() => openBalanceModal()}>
                    <Icon source='delete' />
                  </div>
                  <div className='btn btn-circle btn-ghost' onClick={() => openCampaignModal({ campaign })}>
                    <Icon source='edit' />
                  </div>

                  <div className={`btn btn-circle btn-ghost relative`}
                    onClick={() => { isSelected ? setActiveCampaign(null) : setActiveCampaign(campaign.id); }}>
                    <div className={`w-[30] h-[20] flex items-center justify-center absolute transition-all linear duration-250 ${isSelected ? 'opacity-100 -rotate-180' : 'opacity-100'}`} >
                      <Icon source='dropdown' size='sm' type='down' />
                    </div>
                  </div>
                </div>
              </Transition >
            </div>
          </div>
        </div>

        <Transition
          show={isSelected}
          as={Fragment}
          appear={true}
          enter="transition-all ease-liner duration-500 origin-top"
          enterFrom="opacity-0 scale-y-0"
          enterTo="opacity-100 scale-y-100"
          leave="transition-all ease-linear duration-500 origin-top"
          leaveFrom="opacity-100 scale-y-100 translate-y-0"
          leaveTo="opacity-0 scale-y-0 translate-y-[-30%]"
        >
          <div className={`campaign-sub-row w-[96%] px-6 flex-col -mt-2 mb-2 flex`}>
            <div className='flex flex-row w-full pt-4 '>
              <div className='flex items-center justify-center w-2/12'>
                {/* <CustomDatePicker onDateChange={(newDates => setDates(newDates))} /> */}
              </div>
              <div className='flex flex-col items-center justify-center w-2/12'>
                <label className='text-sm font-thin text-[#F0DC7A]'>Showing Results from</label>
                <label className='flex flex-col items-center justify-center text-sm font-bold'>
                  {format(dates[0] as Date, 'dd/MM/yyyy')}
                  <label className='font-thin txt-sm'> to </label>
                  {format(dates[1] as Date, 'dd/MM/yyyy')}</label>
              </div>
              <div className='flex flex-col items-center justify-center w-3/12 '>
                <label className='flex flex-row my-1 text-lg font-bold'>
                  <Icon source='bitcoin' size='sm' />
                  0.000012312 BTC
                </label>
                <label className='my-1 !text-xs heading !text-special-500'>Wager</label>
              </div>
              <div className='flex flex-col items-center justify-center w-2/12'>
                <label className='my-1 text-lg font-bold'>6</label>
                <label className='my-1 !text-xs heading !text-special-500'>FTD&apos;s</label>
              </div>
              <div className='flex flex-col items-center justify-center w-3/12 my-2'>
                <label className='flex flex-row my-1 text-lg font-bold'>
                  <Icon source='bitcoin' size='sm' />0.000012312 BTC
                </label>
                <label className='my-1 !text-xs heading !text-special-500'>Sum FTD&apos;s</label>
              </div>
            </div>

            <div className='flex flex-row w-full pb-2'>
              <div className='flex flex-col items-center justify-center w-2/12 my-2 '>
                <label className='my-1 text-lg font-bold'>6</label>
                <label className='my-1 !text-xs heading !text-special-500'>Click</label>
              </div>
              <div className='flex flex-col items-center justify-center w-2/12 my-2 '>
                <label className='my-1 text-lg font-bold'>6</label>
                <label className='my-1 !text-xs heading !text-special-500'>Referral</label>
              </div>
              <div className='flex flex-col items-center justify-center w-3/12 my-2 '>
                <label className='flex flex-row my-1 text-lg font-bold'> <Icon source='bitcoin' size='sm' />0.000012312 BTC</label>
                <label className='my-1 !text-xs heading !text-special-500'>Commission (Earned)</label>
              </div>
              <div className='flex flex-col items-center justify-center w-2/12 my-2 '>
                <label className='my-1 text-lg font-bold'>1</label>
                <label className='my-1 !text-xs heading !text-special-500'>Number of Deposits</label>
              </div>
              <div className='flex flex-col items-center justify-center w-3/12 my-2'>
                <label className='flex flex-row my-1 text-lg font-bold'> <Icon source='bitcoin' size='sm' />0.000012312 BTC</label>
                <label className='my-1 !text-xs heading !text-special-500'>Total Deposits</label>
              </div>
            </div>
          </div>
        </Transition>
      </div >
    );
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row items-end justify-between w-full">
        <div className="flex flex-row items-center justify-end w-full">
          <Select data={filterData} onValueChange={(filterValue) => setFilter(filterValue)} defaultOption={filterDefaultOption} />
        </div>
      </div>
      <Transition
        show={isShowing}
        as={Fragment}
        appear={true}
        enter="transition-all ease-linear duration-400 transition-delay-200"
        enterFrom="opacity-0 scale-x-125"
        enterTo="opacity-100 scale-x-100"
      >
        <label className='text-xs md:text-base text-center w-full font-bold'>Showing Campaigns : 2/20</label>
      </Transition>
      <div className="flex flex-row items-center justify-between sm:justify-start">
        <div className='flex flex-col w-full'>
          {campaigns.map((campaign: any, index) => {
            const delay = (((index + 1) * 50) + 300)
            return (
              <Transition
                show={isShowing}
                as={Fragment}
                appear={true}
                enter={`transition-all ease-in duration-200 transition-delay-${delay}`}
                enterFrom="origin-center opacity-0"
                enterTo="opacity-100"
                key={campaign.id}
              >
                {renderItem(campaign, delay)}
              </Transition>
            );
          })}
        </div>
      </div>
    </div >
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(_store => async (_context) => {
  return {
    props: {},
  };
});

export default GameHistory;
