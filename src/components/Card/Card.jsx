import star from '../../assets/star.png'
import './Card.css'

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <img src={`./src/assets/${props.coverImg}`} alt={props.alt} className='plan-photo' />
            {badgeText && <span className='badge'>{badgeText}</span>}
            <div className='rating-content'>
                <img src={star} alt="star" className='star' />
                <span className='rating'>{props.stats.rating}</span>
                <span className='reviews'>({props.stats.reviewCount}) • </span>
                <span className='contry'>{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className='price'>From ${props.price} <span className='person'>/ person</span></p>

        </div>
    )
}