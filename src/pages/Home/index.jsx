import { useState, useEffect } from "react";

import styles from "./home.module.css"

import Header from "../../components/Header/Header";
import listHotels from "../../resources/list_hotels.js";
import HotelCard from "../../components/HotelCard/index.jsx";

export default function Home() {

    const [list, setlist] = useState([])

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
                    list.map((hotel, index) => (
                        <HotelCard
                            key={index}
                            name={hotel.nome}
                            image={hotel.imagem}
                            classification={hotel.classificacao}
                            state={hotel.estado}
                            city={hotel.cidade}
                            price={hotel.precoDiaria.toFixed(2)} />
                    ))
                }
            </div>
        </div>
    )
}