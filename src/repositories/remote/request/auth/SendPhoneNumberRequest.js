import Request from '../Request';
import paramKeys from '../paramKeys';

export default class SendPhoneNumberRequest extends Request{
  static Keys = {
    TO: paramKeys.TO,
    FROM: paramKeys.FROM,
    CHANNEL: paramKeys.CHANNEL,
  }
}
