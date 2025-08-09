export interface loginParams {
  email: string;
  password: string;
}

export interface loginResponse {
  success: boolean;
  authToken: string;
  refreshToken: string;
  error: string;
}

export interface registerParams {
  name?: string;
  email: string;
  password: string;
  // emailPromos: boolean;
}

export interface registerResponse {
  success: boolean;
  authToken: string;
  refreshToken: string;
  error: string;
}

export interface getUserResponse {
  success: boolean;
  name: string;
  email: string;
}

export interface metamaskLoginParams {
  address: string;
}

export interface metamaskLoginResponse {
  nonce: string;
}

export interface metamaskSignatureParams {
  signature: string;
  address: string;
}

export interface metamaskSignatureResponse {
  success: boolean;
  authToken: string;
  refreshToken: string;
  error: string;
}

export interface googleLoginParams {
  code: string;
}

export interface googleLoginResponse {
  success: boolean;
  authToken: string;
  refreshToken: string;
  error: string;
}
