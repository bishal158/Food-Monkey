import {useEffect, useState} from "react";


function Width(){
    const [width, setWidth] = useState(false);
    useEffect(() => {
        const getWidth = () => {
            window.innerWidth < 768 ? setWidth(true) : setWidth(false);
        };
        window.addEventListener("resize", getWidth);
        return () => window.removeEventListener("resize", getWidth);
    }, [width]);
    return width;
}

export  default Width;