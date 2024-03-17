import Link from "next/link"
import styles from "./navbar.module.css"
import Links from "./links/Links"

const Navbar = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.logo}>ThoughtCanvA</div>
            <div>
                <Links />
            </div>
        </div>
        </>
    )
}

export default Navbar