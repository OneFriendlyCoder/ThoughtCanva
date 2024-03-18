import styles from './home.module.css'
import Image from 'next/image';
const Home = () =>{
    return (
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                       Express Yourself: <br/> Write, Share, Inspire!
                    </h1>
                    <p className={styles.description}>
                    Express Yourself: Write, Share, Inspire!<br /> We're your platform for creative expression.<br /> Whether it's poetry, prose, or personal reflections, your voice matters here.<br /> Share your stories, ignite conversations, and inspire others with your words.<br /> Join our community today and let your creativity flourish!
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.button}>Learn More</button>
                        <button className={styles.button}>Contact</button>
                    </div>
                </div>
                <div className={styles.image}>
                <div><Image src="/tc3_rbg.png" alt="" width={500} height={500}/></div>
                </div>
                
            </div>
    )
}

export default Home;