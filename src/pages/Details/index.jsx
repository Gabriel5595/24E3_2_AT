import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import styles from "./details.module.css"

import Header from "../../components/Header/Header"

export default function Details() {

    const [hotelSpec, setHotelSpec] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    function getProductDeatils(id) {
        const hotels = JSON.parse(localStorage.getItem("@hotels"));
        if (hotels) {
            const selectedHotel = hotels.find((hotel) => hotel.id === parseInt(id));
            return selectedHotel
        } else {
            console.log("No information found.");
        }
    };

    function deleteProduct(id) {
        const hotels = JSON.parse(localStorage.getItem("@hotels"));
        const updatedHotelList = hotels.filter((hotel) => hotel.id !== parseInt(id));
        localStorage.setItem('@hotels', JSON.stringify(updatedHotelList));
        
        setIsModalOpen(true);

        
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setIsModalOpen(false);
                navigate('/');
            }, 1000);
        }, 2000);
    }

    useEffect(() => {
        const hotelDetails = getProductDeatils(id)
        console.log(hotelDetails)
        setHotelSpec(hotelDetails)
        console.log(hotelSpec)
    }, [])

    return (

        <div className={styles.mainDetailContainer}>

            <Header />

            <div className={styles.detailContentContainer}>

                <div className={styles.detailImgContainer}>
                    <img src={hotelSpec.image} alt="Image placeholder" />
                </div>

                <div className={styles.detailTextContainer}>
                    <h2>{hotelSpec.name}</h2>
                    <p>Classification: {hotelSpec.classification}/5</p>
                    <p>${hotelSpec.price}</p>
                    <p>{hotelSpec.state} - {hotelSpec.city}</p>
                    <p>{hotelSpec.description}</p>

                    <div className={styles.detailButtons}>
                        <button>Edit</button>
                        <button onClick={() => deleteProduct(id)}>Delete</button>
                    </div>
                </div>

                <Modal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    center
                    showCloseIcon={false}
                    classNames={{
                        overlay: styles.customOverlay,
                        modal: `${styles.customModal} ${fadeOut ? styles.fadeOut : ''}`,
                    }}
                >
                    <h2>Hotel deletado com sucesso!</h2>
                </Modal>
            </div>
        </div>

    )
}