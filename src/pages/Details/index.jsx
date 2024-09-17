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

    const [productSpec, setProductSpec] = useState({})
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
        setProductSpec(hotelDetails)
        console.log(productSpec)
    }, [])

    return (

        <div className={styles.mainDetailContainer}>

            <Header />

            <div className={styles.DetailContentContainer}>
                
                <div className={styles.DetailImgContainer}>
                    <img src={productSpec.image} alt="Image placeholder" />
                </div>

                <div className={styles.DetailTextContainer}>
                    <h2>{productSpec.name}</h2>
                    <p>Classification: {productSpec.classification}/5</p>
                    <p>${productSpec.price}</p>
                    <p>{productSpec.state} - {productSpec.city}</p>
                </div>
            </div>
        </div>

    )
}