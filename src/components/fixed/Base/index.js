import React, { useState } from 'react'
import Header from '../../resuable/Header';
import MiniSideBar from '../../resuable/MiniSideBar';
import SideBar from '../../resuable/SideBar';
import styles from "./index.module.css";

function Base({ children, hideSideBar }) {
    const [showSideBar, setShowSideBar] = useState(true);
    const toggleSideBar = () => {
        setShowSideBar(!showSideBar)
    }

    return (
        <div>
            <Header toggleSideBar={toggleSideBar} />
            {hideSideBar ? (
                <main className={styles.container}>
                    {children}
                </main>) : (
                <main className={styles.container}>
                    {showSideBar ? <SideBar /> : <MiniSideBar />}
                    {children}
                </main>
            )}
        </div>
    )
}

export default Base;
