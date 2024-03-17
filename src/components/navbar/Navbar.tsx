import Link from "next/link"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.logo}>ThoughtCanvA</div>
            <div  className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
            </div>
        </div>
        </>
    )
}

export default Navbar