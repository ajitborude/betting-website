import { fetcher } from "@/helper/fetcher";
import {
  googleLoginParams,
  googleLoginResponse,
  metamaskLoginParams,
  metamaskLoginResponse,
  metamaskSignatureParams,
  metamaskSignatureResponse,
} from "@/types/auth";

const metamaskLogin = (
  params: metamaskLoginParams
): Promise<metamaskLoginResponse> => {
  let url = "api/auth/metamasklogin";
  return fetcher.post(url, params);
};

const metamaskSignature = (
  params: metamaskSignatureParams
): Promise<metamaskSignatureResponse> => {
  let url = "api/auth/metamaskVerify";
  return fetcher.post(url, params);
};

const googleLogin = (
  params: googleLoginParams
): Promise<googleLoginResponse> => {
  let url = "api/auth/googleLogin";
  return fetcher.post(
    url,
    {},
    { headers: { Authorization: `Bearer ${params.code}` } }
  );
};

const authService = {
  metamaskLogin,
  metamaskSignature,
  googleLogin,
};

export default authService;
