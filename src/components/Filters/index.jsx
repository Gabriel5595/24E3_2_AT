import { useState } from 'react';
import styles from './filters.module.css';

export default function Filters({ setOrder }) {
    const [selectedOption, setSelectedOption] = useState("");

    function handleOrderChange(event) {
        const value = event.target.value;
        setSelectedOption(value);
        setOrder(value);
    }

    return (
        <div className={styles.filtersContainer}>
            <select className={styles.filtersSelector}value={selectedOption} onChange={handleOrderChange}>
                <option value="" disabled>Order by</option>
                <option value="price">By price</option>
                <option value="classification">By classification</option>
            </select>
        </div>
    );
}
