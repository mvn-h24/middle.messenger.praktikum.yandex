export const useDebouncedFn = (cb, timeout) => {
    let timerId = null;
    return (...args) => {
        window.clearTimeout(timerId);
        timerId = window.setTimeout(() => {
            cb.apply(null, args);
        }, timeout);
    };
};
