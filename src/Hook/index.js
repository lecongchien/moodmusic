import { useEffect, useState } from 'react';

function useWindow() {
    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    // console.log(windowSize);
    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

export default useWindow;
