import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./index.module.css"

const API_KEY = "AIzaSyAceKCVYFltcS7Ci2B4Tp7KYT2A0_EvGgA";

function Main() {
    const [videos, setVideos] = useState([]);
    const fetchVideos = () => {
        axios({
            method: "GET",
            url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${API_KEY}&maxResults=40`
        }).then((res) => {
            setVideos(res.data.items)
        }).catch((err) => {
            console.log("ERROR: ", err);
        })
    }
    useEffect(() => {
        fetchVideos();
    }, [])
    return (
            <div className={styles.videos}>
                {videos.map(video => {
                    const views = Math.ceil(Math.random() * 100).toString();
                    return (
                        <div className={styles.video}>
                            <Link to={`/watch/${video.id}`} state={{ type: "video", video }}>
                                <img className={styles.channelCoverImg} src={video.snippet.thumbnails.high.url} alt="YoutubeLogo" />
                            </Link>
                            <div className={styles.video_info}>
                                <div>
                                    <img className={styles.channelLogo} src={video.snippet.thumbnails.high.url} width={60} height={60} alt="channelLogo" />
                                </div>
                                <div>
                                    <Link to={`/watch/${video.id}`} state={{ type: "video", video }}>
                                        <h3>{video.snippet.title}</h3>
                                    </Link>
                                    <span>{video.snippet.channelTitle}</span>

                                    <div className={styles.views}>
                                        <h3>{views} k</h3>
                                        <h3>.{moment(video.snippet.publishTime, "YYYYMMDD").fromNow()}</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
    )
}

export default Main
