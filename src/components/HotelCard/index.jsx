import styles from "./hotelCard.module.css"

export default function HotelCard(props) {
    return (
        <div className={styles.hotelCardContainer}>
            <p>{props.name}</p>
            <img src={props.image} alt="Image placeholder" />
            <p>${props.price}</p>
            <p>Classification: {props.classification}/5</p>
            <p>{props.state} - {props.city}</p>
        </div>
    )
}