import { useState, useEffect } from "react";
import { Modal } from 'react-responsive-modal';

import styles from "./home.module.css"
import 'react-responsive-modal/styles.css';

import Header from "../../components/Header/Header";
import listHotels from "../../resources/list_hotels.js";
import HotelCard from "../../components/HotelCard/index.jsx";

export default function Home() {

    const [isOpen , setIsOpen] = useState(false)
    const [list, setlist] = useState([])

    function openModal() {
        setIsOpen(true);
    };

    function closeModal() {
        setIsOpen(false);
    };

    function retrieveHotelList() {
        const hotelString = localStorage.getItem("@hotels");

        if(hotelString) {
            const hotelsJSON = JSON.parse(hotelString);
            setlist(hotelsJSON);
        } else {
            localStorage.setItem("@hotels", JSON.stringify(listHotels))
            setlist(listHotels);
        }
    }

    useEffect(() => {retrieveHotelList()}, [])

    return (
        <div className={styles.mainContainer}>
            <Header />
            <div className={styles.hotelsContainer}>

                {
                    list.map((hotel) => (
                        <HotelCard
                            key={hotel.id}
                            hotel={hotel}/>
                    ))
                }
            </div>

            <button
                className={styles.floatButton}
                onClick={openModal}>+</button>

            <Modal
                open={isOpen}
                onClose={closeModal}>
                <div className={styles.modalContainer}>
                    <h3>Register new hotel</h3>

                    <input placeholder="Hotel name" />
                    
                    <div className={styles.modalInputRow}>
                        <input placeholder="Price" />
                        <input placeholder="Classification" />
                    </div>

                    <div className={styles.modalInputRow}>
                        <input placeholder="City" />
                        <input placeholder="State (UF)" />
                    </div>

                    <input placeholder="image's URL" />

                    <textarea placeholder="Description"></textarea>

                    <div className={styles.modalButtonRow}>
                        <button>Save</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}