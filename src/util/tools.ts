const { userAgent } = navigator;
export const isWxwork: boolean = /wxwork/i.test(userAgent);
export const isMobile: boolean = /(iPhone) | (Android) | (mobile)/i.test(
  userAgent,
);
