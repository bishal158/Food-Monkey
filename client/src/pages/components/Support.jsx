import { Link } from 'react-router-dom';
import './styles/Support.css'
import Delivery from '../../assets/images/support-component/Delivary.png'
import TakeAway from '../../assets/images/support-component/Take Away.png'
import Dining from '../../assets/images/support-component/Dining.png'
import AccountProblem from '../../assets/images/support-component/Account Problem.png'
function Support() {
  return (
    <>
        <div className='container-fluid support'>
            <div className='container services-container'>
                <h2>How can we help you?</h2>
                <div className='services'>
                    <Link to={'/'} className={'service'}>
                        <img src={Delivery} alt={'...'} className={'fa-bounce'}/>
                        <p>Delivery Service</p>
                    </Link>
                    <Link to={'/'} className={'service'}>
                        <img src={TakeAway} alt={'...'} className={'fa-fade'}/>
                        <p>TakeAway Service</p>
                    </Link>
                    <Link to={'/'} className={'service'} >
                        <img src={Dining} alt={'...'} className={'fa-flip'}/>
                        <p>Dining Service</p>
                    </Link>
                    <Link to={'/'} className={'service'}>
                        <img src={AccountProblem} alt={'...'} className={'fa-beat-fade'}/>
                        <p>Account Problem</p>
                    </Link>
                </div>
            </div>

        </div>

    </>
  )
}
export default Support;