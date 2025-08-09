import useModal from '@/hooks/useModal';
import AuthModal from './auth-modal';
import ChangeUsernameModal from './change-username';
import ChangeEmailModal from './change-email';
import ChangePhoneModal from './change-mobile';
import ChangePasswordModal from './change-password';
import TwoFactorAuth from './2-factor-auth';
import ConnectMetamask from './connect-metamask';
import ReferralBalance from './referral-balance';
import ReferralCampaign from './referral-campaign';

const MODAL_COMPONENTS: { [key: string]: React.FC<CommonModalProps>; } = {
  'AUTH': AuthModal,
  'CHANGE_USERNAME': ChangeUsernameModal,
  'CHANGE_PHONE': ChangePhoneModal,
  'CHANGE_EMAIL': ChangeEmailModal,
  'TWO_FACTOR_AUTH': TwoFactorAuth,
  'CHANGE_PASSWORD': ChangePasswordModal,
  'CONNECT_METAMASK': ConnectMetamask,
  'REFERRAL_BALANCE': ReferralBalance,
  'REFERRAL_CAMPAIGN': ReferralCampaign,

};

const ModalRoot: React.FC = (): JSX.Element | null => {
  const { modalType, modalProps, isOpened } = useModal();

  const SpecificModal = MODAL_COMPONENTS[modalType];
  if (SpecificModal) {
    const props = { ...modalProps, isOpened };
    return (
      //@ts-ignore
      <SpecificModal {...props} />
    );
  }
  else {
    return null;
  }
};

export default ModalRoot;