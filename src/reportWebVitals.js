const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && typeof onPerfEntry === 'function') {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            onPerfEntry({
               CLS: getCLS(),
                FID: getFID(),
                FCP: getFCP(),
                LCP: getLCP(),
                TTFB: getTTFB()
            });
        });
    }
};

export default reportWebVitals;
