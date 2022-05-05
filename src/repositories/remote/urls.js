import configs from '../../constants/configs';

const prefix = configs.development ? 'dev' : '';

const ACCOUNT = `https://${prefix}account.${configs.HOST}`;
const BASE_URL = 'http://113.190.232.99:8110/api/';
const BASE_URL_SMS_PHONE = 'https://verify.twilio.com/v2/Services/VA173bfedbdfedc3f8bda64a15b9d91f3a';

const urls = {
  SEND_CODE_SMS_PHONE: `${BASE_URL_SMS_PHONE}/Verifications`,
  VERIFY_CODE_SMS_PHONE: `${BASE_URL_SMS_PHONE}/VerificationCheck`,
};

export default urls;
