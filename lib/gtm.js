export const GTM_ID = 'GTM-N4VVZ63';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url
  });
};
