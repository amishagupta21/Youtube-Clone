import React from 'react'
import home from "../../../assests/icons/home.svg"
import styles from "./index.module.css"

function SideBar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"home"}/>
                <h3>Home</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Shorts"}/>
                <h3>Shorts</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Subscriptions"}/>
                <h3>Subscriptions</h3>
            </div>
            <hr />
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Library"}/>
                <h3>Library</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"History"}/>
                <h3>History</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Your Video"}/>
                <h3>Your Video</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Watch Later"}/>
                <h3>Watch Later</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Liked Video"}/>
                <h3>Liked Video</h3>
            </div>
            <hr />
            <h2 className={styles.explore}>Explore</h2>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Trending"}/>
                <h3>Trending</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Music"}/>
                <h3>Music</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Films"}/>
                <h3>Films</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Live"}/>
                <h3>Live</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"Gaming"}/>
                <h3>Gaming</h3>
            </div>
        </div>

    )
}

export default SideBar;
