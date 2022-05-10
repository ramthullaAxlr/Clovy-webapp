import { differenceInMinutes } from "date-fns";
import { default as UUID } from 'node-uuid';
import JsCookies from 'js-cookie';
import ceil from "lodash/ceil";

export const getDateDifference = (date) => {
  let diff = differenceInMinutes(new Date(), new Date(date));
  if (diff < 60) return diff + " minutes ago";
  diff = ceil(diff / 60);
  if (diff < 24) return `${diff} hour${diff === 0 ? "" : "s"} ago`;
  diff = ceil(diff / 24);
  if (diff < 30) return `${diff} day${diff === 0 ? "" : "s"} ago`;
  diff = ceil(diff / 30);
  if (diff < 12) return `${diff} month${diff === 0 ? "" : "s"} ago`;
  diff = diff / 12;
  return `${diff.toFixed(1)} year${ceil(diff) === 0 ? "" : "s"} ago`;
};


export const createSessionId = (cookies) => {
  const sessionID = cookies.sessionid;
  if (!sessionID) {
    let UUid = UUID.v4();
    let CurrentTimeStamp = Math.round(new Date().getTime() / 1000);
    let SessionID = UUid + CurrentTimeStamp;
    JsCookies.set('sessionid', SessionID);
    return SessionID;
  }
};
