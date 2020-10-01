import React, {useEffect, useState} from 'react';

const Route = ({ path, children }) => {

    const [currentpath, setPath] = useState(window.location.pathname);

    useEffect(()=> {

        const onLocationChange = ()=> {
            setPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    },[])

    return currentpath === path
        ? children
        : null;
};

export default Route;