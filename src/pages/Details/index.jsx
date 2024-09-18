import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import styles from "./details.module.css";

import Header from "../../components/Header/Header";

export default function Details() {
    const [hotelSpec, setHotelSpec] = useState({});
    const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);
    const [isEditConfirmationModalOpen, setIsEditConfirmationModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        classification: "",
        city: "",
        state: "",
        image: "",
        description: ""
    });
    const [fadeOut, setFadeOut] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    function getProductDetails(id) {
        const hotels = JSON.parse(localStorage.getItem("@hotels"));
        if (hotels) {
            const selectedHotel = hotels.find((hotel) => hotel.id === parseInt(id));
            return selectedHotel;
        } else {
            console.log("No information found.");
        }
    }

    function deleteProduct(id) {
        const hotels = JSON.parse(localStorage.getItem("@hotels"));
        const updatedHotelList = hotels.filter((hotel) => hotel.id !== parseInt(id));
        localStorage.setItem('@hotels', JSON.stringify(updatedHotelList));

        setIsDeleteConfirmationModalOpen(true);

        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setIsDeleteConfirmationModalOpen(false);
                navigate('/');
            }, 1000);
        }, 2000);
    }

    function openEditModal() {
        setFormData({
            name: hotelSpec.name,
            price: hotelSpec.price,
            classification: hotelSpec.classification,
            city: hotelSpec.city,
            state: hotelSpec.state,
            image: hotelSpec.image,
            description: hotelSpec.description
        });
        setIsEditModalOpen(true);
    }

    function saveEdits() {
        const hotels = JSON.parse(localStorage.getItem("@hotels"));
        const updatedHotelList = hotels.map((hotel) => {
            if (hotel.id === parseInt(id)) {
                return { ...hotel, ...formData };
            }
            return hotel;
        });
        localStorage.setItem("@hotels", JSON.stringify(updatedHotelList));
        setHotelSpec({ ...hotelSpec, ...formData });
        setIsEditModalOpen(false);

        setIsEditConfirmationModalOpen(true);
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setIsEditConfirmationModalOpen(false);
                navigate('/');
            }, 1000);
        }, 2000);
    }

    useEffect(() => {
        const hotelDetails = getProductDetails(id);
        setHotelSpec(hotelDetails);
    }, [id]);

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
                        <button onClick={openEditModal}>Edit</button>
                        <button onClick={() => deleteProduct(id)}>Delete</button>
                    </div>
                </div>

                <Modal
                    open={isDeleteConfirmationModalOpen}
                    onClose={() => setIsDeleteConfirmationModalOpen(false)}
                    center
                    showCloseIcon={false}
                    classNames={{
                        overlay: styles.customOverlay,
                        modal: `${styles.customModalDelete} ${fadeOut ? styles.fadeOut : ''}`,
                    }}
                >
                    <h2>Hotel deleted successfully!</h2>
                </Modal>

                <Modal
                    open={isEditConfirmationModalOpen}
                    onClose={() => setIsEditConfirmationModalOpen(false)}
                    center
                    showCloseIcon={false}
                    classNames={{
                        overlay: styles.customOverlay,
                        modal: `${styles.customModalEdit} ${fadeOut ? styles.fadeOut : ''}`,
                    }}
                >
                    <h2>Hotel edited successfully!</h2>
                </Modal>

                <Modal
                    open={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    center
                    showCloseIcon={false}
                >
                    <div className={styles.modalContainer}>
                        <h3>Edit hotel details</h3>

                        <input
                            placeholder="Hotel name"
                            value={formData.name}
                            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                        />

                        <div className={styles.modalInputRow}>
                            <input
                                placeholder="Price"
                                value={formData.price}
                                onChange={(event) => setFormData({ ...formData, price: event.target.value })}
                            />
                            <input
                                placeholder="Classification"
                                value={formData.classification}
                                onChange={(event) => setFormData({ ...formData, classification: event.target.value })}
                            />
                        </div>

                        <div className={styles.modalInputRow}>
                            <input
                                placeholder="City"
                                value={formData.city}
                                onChange={(event) => setFormData({ ...formData, city: event.target.value })}
                            />
                            <input
                                placeholder="State (UF)"
                                value={formData.state}
                                onChange={(event) => setFormData({ ...formData, state: event.target.value })}
                            />
                        </div>

                        <input
                            placeholder="Image's URL"
                            value={formData.image}
                            onChange={(event) => setFormData({ ...formData, image: event.target.value })}
                        />

                        <textarea
                            placeholder="Description"
                            value={formData.description}
                            onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                        ></textarea>

                        <div className={styles.modalButtonRow}>
                            <button onClick={saveEdits}>Save</button>
                            <button onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
