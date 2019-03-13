import {useEffect} from 'react';

const useInterval = (fn: any, delay: any): any => {
    useEffect(() => {
        const id: any = setInterval(fn, delay);

        return () => clearInterval(id);
    }, []);
};

export default useInterval;