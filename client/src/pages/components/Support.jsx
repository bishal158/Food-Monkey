import { Link } from 'react-router-dom';
import './styles/Support.css'
import Delivery from '../../assets/images/support-component/Delivary.png'
function Support() {
  return (
    <>
        <div className='container-fluid support'>
            <div className='container services-container'>
                <h2>How can we help you?</h2>
                <div className='services'>
                    <Link to={'/'} className={'service'}>
                        <img src={Delivery} alt={'...'}/>
                        <p>Delivery Service</p>
                    </Link>
                    <Link to={'/'} className={'service'}>
                        <img src={Delivery} alt={'...'}/>
                        <p>Delivery Service</p>
                    </Link>
                    <Link to={'/'} className={'service'}>
                        <img src={Delivery} alt={'...'}/>
                        <p>Delivery Service</p>
                    </Link>
                    <Link to={'/'} className={'service'}>
                        <img src={Delivery} alt={'...'}/>
                        <p>Delivery Service</p>
                    </Link>
                </div>
            </div>

        </div>

    </>
  )
}
export default Support;