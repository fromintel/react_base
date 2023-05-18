import {useRef, useEffect} from 'react';

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        const handler = (entries) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        }

        observer.current = new IntersectionObserver(handler );
        observer.current.observe(ref.current);
    }, [isLoading]);
}
