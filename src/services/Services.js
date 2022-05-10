import HttpCalls from './ApiCall';
import { createSessionId } from 'utils/utils';
import NextCookies from 'next-cookies';


// export const _productList = async (payload) => {
//   let { _do_call } = HttpCalls;
//   let headers = await headersData(NextCookies({ ctx: '' }));
//   return _do_call('POST', 'products/getcategoryProducts', headers, payload);
// };

export const headersData = async (cookies) => {
  let sessionId = cookies ? (cookies.sessionid ? cookies.sessionid : '') : '';
  if (!sessionId || sessionId == '') sessionId = await createSessionId(cookies);
  return {
    headers: {
      'content-type': 'application/json',
      token: cookies
        ? cookies.userDetails
          ? cookies.userDetails.token
          : ''
        : '',
      userid:
        cookies && cookies.userDetails && cookies.userDetails.user_id
          ? cookies.userDetails.user_id
          : sessionId,
      sessionid: cookies
        ? cookies.sessionid
          ? cookies.sessionid
          : sessionId
        : sessionId,
    },
  };
};


