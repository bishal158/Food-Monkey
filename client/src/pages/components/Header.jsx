import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import '../styles/Header.css'
import logo from '../../assets/favicon/favicon-32x32.png';

const  Header = ()=>{
    const [top, setTop] = useState(true);
    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 1 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);
    return(
        <>
            <div className={`container-fluid header ${!top && `fixed-top effect`}`}>
                <div className={'container header-content'}>
                        <div className={'logo-content'}>
                            <img src={logo} alt={'logo'}/>
                            <span>Food Monkey</span>
                        </div>
                        <div className={'user-content'}>
                            <button>Log in</button>
                            <button>Sign Up</button>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Header;