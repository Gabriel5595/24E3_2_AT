import { useState, useEffect } from "react";
import { Modal } from 'react-responsive-modal';

import styles from "./home.module.css"
import 'react-responsive-modal/styles.css';

import Header from "../../components/Header/Header";
import listHotels from "../../resources/list_hotels.js";
import HotelCard from "../../components/HotelCard/index.jsx";

export default function Home() {

    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    const [list, setlist] = useState([])
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        image: "",
        classification: "",
        city: "",
        state: "",
        price: "",
        description: "",
    })

    function openModal() {
        setIsOpen(true);
    };

    function closeModal() {
        setIsOpen(false);
    };

    function retrieveHotelList() {
        const hotelString = localStorage.getItem("@hotels");

        if (hotelString) {
            const hotelsJSON = JSON.parse(hotelString);
            setlist(hotelsJSON);
        } else {
            localStorage.setItem("@hotels", JSON.stringify(listHotels))
            setlist(listHotels);
        }
    }

    function addHotel() {

        const hotelString = localStorage.getItem("@hotels");
        const objectList = hotelString ? JSON.parse(hotelString) : [];
        let newId = 1;
        if (objectList.length > 0) {
            const lastObject = objectList[objectList.length - 1];
            console.log(lastObject.id)
            newId = lastObject.id + 1;
        }

        const newHotel = {
            id: newId,
            name: formData.name,
            image: formData.image,
            classification: formData.classification,
            city: formData.city,
            state: formData.state,
            price: formData.price,
            description: formData.description,
        }

        console.log(newHotel)

        const updatedList = [...objectList, newHotel];
        localStorage.setItem("@hotels", JSON.stringify(updatedList));
        setlist(updatedList);

        closeModal();
    }

    function filterHotels(list, search) {
        return list.filter(function (hotel) {
            return hotel.name.toLowerCase().includes(search.toLowerCase());
        });
    }

    const filteredHotels = filterHotels(list, search);

    useEffect(() => { retrieveHotelList() }, [])

    return (
        <div className={styles.mainContainer}>
            <Header setSearch={setSearch} />
            <div className={styles.hotelsContainer}>

                {

                    filteredHotels.map(function (hotel) {
                        return (
                            <HotelCard
                                key={hotel.id}
                                hotel={hotel} />
                        );
                    })
                    // list.map((hotel) => (
                    //     <HotelCard
                    //         key={hotel.id}
                    //         hotel={hotel} />
                    // ))
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

                    <input
                        placeholder="Hotel name"
                        value={formData.name}
                        onChange={
                            (event) => setFormData(
                                { ...formData, name: event.target.value }
                            )
                        } />

                    <div className={styles.modalInputRow}>
                        <input
                            placeholder="Price"
                            value={formData.price}
                            onChange={
                                (event) => setFormData(
                                    { ...formData, price: event.target.value }
                                )
                            }
                        />
                        <input
                            placeholder="Classification"
                            value={formData.classification}
                            onChange={
                                (event) => setFormData(
                                    { ...formData, classification: event.target.value }
                                )
                            }
                        />
                    </div>

                    <div className={styles.modalInputRow}>
                        <input
                            placeholder="City"
                            value={formData.city}
                            onChange={
                                (event) => setFormData(
                                    { ...formData, city: event.target.value }
                                )
                            }
                        />
                        <input
                            placeholder="State (UF)"
                            value={formData.state}
                            onChange={
                                (event) => setFormData(
                                    { ...formData, state: event.target.value }
                                )
                            }
                        />
                    </div>

                    <input
                        placeholder="image's URL"
                        value={formData.image}
                        onChange={
                            (event) => setFormData(
                                { ...formData, image: event.target.value }
                            )
                        }
                    />

                    <textarea
                        placeholder="Description"
                        value={formData.description}
                        onChange={
                            (event) => setFormData(
                                { ...formData, description: event.target.value }
                            )
                        }></textarea>

                    <div className={styles.modalButtonRow}>
                        <button onClick={() => addHotel()}>Save</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}