import HttpCalls from 'services/ApiCall';
import NextCookies from 'next-cookies';
import {headersData} from 'services/Services';


export const _getSliders = async (payload) => {
  console.log('sadasd')
  let { _do_call } = HttpCalls;
  let headers = await headersData(NextCookies({ ctx: '' }));
  return _do_call(
    'GET',
    'api/sliders/getSliders',
    headers
  );
};

export const _getBestsellers = async (payload) => {
  let { _do_call } = HttpCalls;
  let headers = await headersData(NextCookies({ ctx: '' }));
  return _do_call(
    'GET',
    'api/products/bestsellingsproducts',
    headers
  );
};