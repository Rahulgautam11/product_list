import React, { useRef, useEffect } from 'react';

const OutsideClickHandler = ({ children, onOutsideClick }) => {
    const wrapperRef = useRef(null);

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            onOutsideClick();
        }
    };

    useEffect(() => {

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;
