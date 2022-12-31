import React, { useState } from 'react'
import styles from "./index.module.css"
import hamburger from "../../../assests/icons/hamburger.svg"
import searchicon from "../../../assests/icons/searchicon.svg"
import upload from "../../../assests/icons/upload.svg"
import bell from "../../../assests/icons/bell.png"
import gmail from "../../../assests/icons/gmail.png"
import mic from "../../../assests/icons/mic.png"
import logo from "../../../assests/icons/logo.svg"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

const API_KEY = "AIzaSyAceKCVYFltcS7Ci2B4Tp7KYT2A0_EvGgA";

const Header = () => {
    const [search, setSearch] = useState("");

    const searchHandler = e => setSearch(e.target.value);

    const navigate = useNavigate();

    const searchVideo = () => {
        axios({
            method: "GET",
            url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=40&key=${API_KEY}`
        }).then((res) => {
            navigate("/results", {
                state: {
                    videos: res.data.items
                }
            })
        }).catch((err) => {
            console.log("ERROR: ", err);
        })
    }

    return (
        <header className={styles.container}>

            <div className={styles.logo}>
                <img src={hamburger} width={22} height={22} alt="hamburger icon" />
                <Link to="/">
                    <img src={logo} width={120} height={22} alt="youtube icon" />
                </Link>
            </div>

            <div className={styles.searchBar}>
                <div className={styles.searchField}>
                    <input
                        value={search}
                        onChange={searchHandler}
                        onKeyDown={(e) => e.key === 'Enter' && searchVideo()}//enter button click krne pr direct next page opne ho jaye... koi seach button pr click nhi kr na pade
                        type="search"
                        placeholder="enter your search here..." />
                    <div onClick={searchVideo} className={styles.search_icon}>
                        <img src={searchicon} width={26} height={22} alt="search"/>
                    </div>
                </div>
                <img src={mic} width={22} height={26} alt="mic"/>
            </div>

            <div className={styles.options}>
                <div className={styles.box}>
                    <img src={upload} width={28} height={26} alt="upload icon" />
                </div>
                <div className={styles.box}>
                    <img src={bell} width={26} height={24} alt="notification icon" />
                </div>
                <div className={styles.box}>
                    <img src={gmail} width={26} height={24} alt="gmail icon" />
                </div>
            </div>

        </header>
    )
}

export default Header;