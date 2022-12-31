import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styles from "./index.module.css";
import { Link } from 'react-router-dom';


const API_KEY = "AIzaSyAceKCVYFltcS7Ci2B4Tp7KYT2A0_EvGgA";

function SuggestedVideos() {
    const [suggestedVideos, setsuggestedVideos] = useState([])
    
    const {id} = useParams();
    const {state} = useLocation();

     const fetchSuggestedVideos = ()=>{
        axios({
            method:"GET",
            url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${state.video.snippet.categoryId || 24}&key=${API_KEY}&maxResults=40`
        }).then((res) => {
            setsuggestedVideos(res.data.items)
        }).catch((err) => {
            console.log("ERROR: ", err);
        })
    }
    useEffect(() => {
        fetchSuggestedVideos();
    }, [id])
    return (
        <>
            {suggestedVideos.map((video, index) => {
                return (
                    <div key={index} className={styles.suggested}>
                        <Link to={`/watch/${video.id}`} state={{ type: "video", video }} className={styles.suggestedVideoThumnail}>
                            <img width="100%" height="100%" src={video.snippet.thumbnails.high.url}/>
                        </Link>
                        <div className={styles.suggestedContent}>
                            <h1>{video.snippet.title}</h1>
                            <span>{video.snippet.channelTitle}</span>
                            <div className={styles.view}>
                                <span>55M</span>
                                <span>.{moment(video.snippet.publishedAt, "YYYYMMDD").fromNow()}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default SuggestedVideos
