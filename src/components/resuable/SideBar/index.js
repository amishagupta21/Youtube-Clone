import React from 'react'
import home from "../../../assests/icons/home.svg"
import styles from "./index.module.css"

function SideBar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Home</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Shorts</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Subscriptions</h3>
            </div>
            <hr />
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Library</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>History</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Your Video</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Watch Later</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Liked Video</h3>
            </div>
            <hr />
            <h2 className={styles.explore}>Explore</h2>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Trending</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Music</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Films</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Live</h3>
            </div>
            <div className={styles.icon}>
                <img src={home} width={28} height={24} />
                <h3>Gaming</h3>
            </div>
        </div>

    )
}

export default SideBar;
