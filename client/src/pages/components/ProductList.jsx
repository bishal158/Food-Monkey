import './styles/ProductList.css'
import Noddles from '../../assets/images/Chiness.jpg'
import  Beef_Steak from '../../assets/images/promotion/Beef Steak.jpg'
import  Pizza from '../../assets/images/promotion/Pizza.jpg'
import Burger from '../../assets/images/promotion/Burgur.jpg'
import Kabuli_pulao from '../../assets/images/promotion/Kabuli Pulao.jpg'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export const ProductList = () => {
    const productList = [
        {
        product_name: 'Beef Steak',
        product_cover: Beef_Steak,
        product_price: 1000,
        product_rating: 4.5,
        },
        {
            product_name: 'Noddles',
            product_cover: Noddles,
            product_price: 1000,
            product_rating: 4.5,
        },
        {
            product_name: 'Pizza',
            product_cover: Pizza,
            product_price: 1000,
            product_rating: 4.5,
        },
        {
            product_name: 'Burger',
            product_cover: Burger,
            product_price: 1000,
            product_rating: 4.5,
        },
        {
            product_name: 'Kabuli Pulao',
            product_cover: Kabuli_pulao,
            product_price: 1000,
            product_rating: 4.5,
        },
    ]

    return (
        <>
            <div className={'product-list-container'}>
                <h1>Our Dishes!!</h1>
                <div className={'products'}>
                    {productList.map((product,index) => (
                        <div className={'product-card'} key={index}>
                            <div className={'product-cover'}>
                                <img src={product.product_cover} alt={'...'}/>
                            </div>
                            <div className={'product-details'}>
                                <p>{product.product_name}</p>
                                <div className={'product-price-rating'}>
                                    <p>{product.product_price} <FontAwesomeIcon icon="fa-solid fa-bangladeshi-taka-sign" className={'fa-sm fa-fade link-primary'} /></p>
                                    <p>{product.product_rating}/5 <FontAwesomeIcon icon='fa-solid fa-star' className={'fa-sm fa-flip link-danger'}/></p>
                                </div>
                                <div className={'product-button'}>
                                    <button>Add to Cart <FontAwesomeIcon icon="fa-solid fa-cart-plus" /></button>
                                    <button><Link to={'/product-details'} className={'product-details-button'} >Product Details</Link></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
