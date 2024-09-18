import { Link } from "react-router-dom"

import styles from "./hotelCard.module.css"

export default function HotelCard(props) {
    return (
        <Link to={`details/${props.hotel.id}`} className={styles.link}>
            <div className={styles.hotelCardContainer}>
                <div className={styles.hotelCardTitle}>
                    <h3 className={styles.hotelCardName}>{props.hotel.name}</h3>
                </div>
                <img
                    src={props.hotel.image}
                    alt="Image placeholder"
                    className={styles.hotelCardImg} />
                <p className={styles.hotelCardPrice}>${props.hotel.price} <span>daily</span></p>
                <p className={styles.hotelCardClass}>Classification: {props.hotel.classification}/5</p>
                <p className={styles.hotelCardLocation}>{props.hotel.state} - {props.hotel.city}</p>
            </div>
        </Link>

    )
}