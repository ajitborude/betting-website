import React from "react";
// import useModal from '@/hooks/useModal';
import Image from "next/image";
import LobbyGameFrame from "@/public/common/lobby-game-frame.png";
import LobbyGameIcon from "@/public/common/lobby-game-icon.png";


const dummyData = [1, 2, 3, 4, 5]

const CommonTab: React.FC = (): JSX.Element => {

  return (
    <div className="flex flex-col w-full items-center justify-between">
      <div className="flex flex-col w-full items-start justify-start my-3">
        <label className="heading !text-title-500 text-2xl ml-6">All games</label>
        <div className="flex flex-row w-full items-center justify-between">
          {
            dummyData.map(game => {
              return <GameIcon key={game} />
            })
          }
        </div>
      </div>
      <div className="flex flex-col w-full items-start justify-start my-3">
        <label className="heading !text-title-500 text-2xl ml-6">MY FAVORITES</label>
        <div className="flex flex-row w-full items-center justify-between">
          {
            dummyData.map(game => {
              return <GameIcon key={game} />
            })
          }
        </div>
      </div>
      <div className="flex flex-col w-full items-start justify-start my-3">
        <label className="heading !text-title-500 text-2xl ml-6">IN-HOUSE GAMES</label>
        <div className="flex flex-row w-full items-center justify-between">
          {
            dummyData.map(game => {
              return <GameIcon key={game} />
            })
          }
        </div>
      </div>

      <div className="flex flex-col w-full items-start justify-start my-3">
        <label className="heading !text-title-500 text-2xl ml-6">SLOTS</label>
        <div className="flex flex-row w-full items-center justify-between">
          {
            dummyData.map(game => {
              return <GameIcon key={game} />
            })
          }
        </div>
      </div>
      <div className="flex flex-col w-full items-start justify-start my-3">
        <label className="heading !text-title-500 text-2xl ml-6">TABLE GAMES</label>
        <div className="flex flex-row w-full items-center justify-between">
          {
            dummyData.map(game => {
              return <GameIcon key={game} />
            })
          }
        </div>
      </div>
      <div className="flex flex-col w-full items-start justify-start my-3">
        <label className="heading !text-title-500 text-2xl ml-6">LIVE CASINO</label>
        <div className="flex flex-row w-full items-center justify-between">
          {
            dummyData.map(game => {
              return <GameIcon key={game} />
            })
          }
        </div>
      </div>

      <div className="mt-10 flex flex-row items-center justify-center w-full">
        {/* <LobbyTabs defaultTab={1} /> */}
      </div >
    </div >
  );
};

const GameIcon: React.FC = (): JSX.Element => {
  return (
    <div className="my-5 flex items-center justify-center relative">
      <div className='w-[75%] h-auto' >
        <Image src={LobbyGameFrame} alt='frame' objectFit='contain' />
      </div>
      <div className='absolute w-[40%] h-auto' >
        <Image src={LobbyGameIcon} alt='icon' objectFit='contain' />
      </div>
    </div>
  )
}

export default CommonTab;