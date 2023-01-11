import { useEffect } from 'react';

export const useEffectHook = (eventListener,selector,callback) => {
    useEffect(() => {
        const elem = document.querySelector(selector)
        elem.addEventListener(eventListener ,callback);
        return () => elem.removeEventListener(eventListener, callback);
      }, [callback,eventListener,selector]);
}