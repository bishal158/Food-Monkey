import NotFound from '../assets/images/Not Found.gif'
import {Link} from "react-router-dom";
import './styles/NotFound404.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function NotFound404() {
    return (
        <div className={'container-fluid d-flex justify-content-center align-items-center flex-column'} >
            <img src={NotFound} className={'img-fluid'} alt={'Not Found 404 !!!!'} style={{width:'300px',height:'100%',}}/>
            <Link to={'/'} className={'back-to-home'}><FontAwesomeIcon icon="fa-solid fa-arrow-left" className={'fa-fade fa-sm mx-1'}/>Back to Home</Link>
        </div>
    )
}

export default NotFound404;