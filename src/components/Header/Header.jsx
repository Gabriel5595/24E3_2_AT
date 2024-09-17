import styles from "./header.module.css"

export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <h1>FakeStore</h1>
            </header>
        </div>
    )
}