interface CredentialRequestOptions {
  otp?: { transport: string[] };
}

interface Credential {
  code: string;
}
