import Request from '../Request';
import paramKeys from '../paramKeys';

export default class VeryCodePhoneNumberRequest extends Request{
  static Keys = {
    TO: paramKeys.TO,
    CODE: paramKeys.CODE,
  }
}
