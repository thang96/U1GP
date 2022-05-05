import {networkRef} from "../remote/network";
import urls from '../remote/urls';
import SendPhoneNumberRequest from "../remote/request/auth/SendPhoneNumberRequest";
import VeryCodePhoneNumberRequest from "../remote/request/auth/VeryCodePhoneNumberRequest";

export function sendCodePhoneNumber(request: SendPhoneNumberRequest, onSuccess) {
  const params = request.getParams();
  networkRef.current.postSmsPhone(urls.SEND_CODE_SMS_PHONE, params, onSuccess)
}

export function veryCodePhoneNumber(request: VeryCodePhoneNumberRequest, onSuccess) {
  const params = request.getParams();
  networkRef.current.postSmsPhone(urls.VERIFY_CODE_SMS_PHONE, params, onSuccess)
}
