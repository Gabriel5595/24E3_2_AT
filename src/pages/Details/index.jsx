import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

import styles from "./details.module.css"

import Header from "../../components/Header/Header"


const mock =
{
    nome: "Hotel Paraíso",
    imagem: "https://via.placeholder.com/150",
    classificacao: 5,
    cidade: "Rio de Janeiro",
    estado: "RJ",
    precoDiaria: 450
}

export default function Details() {

    const [hotelSpec, setHotelSpec] = useState({})
    const { id } = useParams();

    function getProductDeatils(id) {
        const hotels = JSON.parse(localStorage.getItem("@hotels"));
        console.log(hotels)
        if (hotels) {
            const selectedHotel = hotels.find((hotel) => hotel.id === parseInt(id));
            console.log(selectedHotel)
            return selectedHotel
        } else {
            console.log("No information found.");
        }
    };

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
                        <button>Delete</button>
                    </div>
                </div>

                
            </div>
        </div>

    )
}