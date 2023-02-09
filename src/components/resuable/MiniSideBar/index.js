import React from 'react'
import styles from "./index.module.css";
import home from "../../../assests/icons/home.svg"
import shorts from "../../../assests/icons/shorts.svg"
import subscribe from "../../../assests/icons/subscribe.png"
import library from "../../../assests/icons/library.png"


function MiniSideBar() {
  return (
    <div className={styles.container}>
       <div className={styles.icon}>
                <img src={home} width={28} height={24} alt={"home"}/>
                <h3>Home</h3>
            </div>
            <div className={styles.icon}>
                <img src={shorts} width={28} height={24} alt={"Shorts"}/>
                <h3>Shorts</h3>
            </div>
            <div className={styles.icon}>
                <img src={subscribe} width={28} height={24} alt={"Subscriptions"}/>
                <h3>Subscriptions</h3>
            </div>
            <div className={styles.icon}>
                <img src={library} width={28} height={24} alt={"Library"}/>
                <h3>Library</h3>
            </div>
    </div>
  )
}

export default MiniSideBar;
