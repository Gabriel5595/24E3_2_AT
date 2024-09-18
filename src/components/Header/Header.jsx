import styles from "./header.module.css";

export default function Header({ setSearch }) {
    return (
        <div>
            <header className={styles.header}>
                <h1>FakeStore</h1>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search hotel..."
                    onChange={(event) => setSearch(event.target.value)}
                />
            </header>
        </div>
    );
}
