import styles from './Header.module.css'
const Header = (): JSX.Element => {
    return (
        <div className={styles.header}>
            <h1>Weather</h1>
        </div>
    )
}

export default Header