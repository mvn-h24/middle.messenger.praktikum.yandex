const createSignal = (
    {
        value,
        onSet = () => {
        },
        onGet = () => {
        }
    }
) => {
    const signalHandler = {
        get(target, property, receiver) {
            const result = Reflect.get(target, property, receiver);
            onGet.call(null);
            return result;
        },
        set(target, property, value) {
            const result = Reflect.set(target, property, value);
            onSet.call(null);
            return result;
        },
    };
    const createProxyState = (state) => new Proxy(state, signalHandler);

    return createProxyState({value});
};

const createEffect = () => {
    const subscribers = new Set();
    let currentListener = undefined;
    const subscribeState = (state) => state.value;
    const useEffect = (state, cb) => {
        currentListener = cb;
        subscribeState(state);
        currentListener = undefined;
    };
    const onGet = () => {
        if (currentListener !== undefined) {
            subscribers.add(currentListener);
        }
    };
    const onSet = () => {
        subscribers.forEach((fn) => fn.call(null));
    };

    return {useEffect, onGet, onSet};
};

export const useSignal = (value) => {
    const {useEffect, onGet, onSet} = createEffect();
    const signal = createSignal({value, onGet, onSet});

    return [signal, useEffect.bind(null, signal)];
};
