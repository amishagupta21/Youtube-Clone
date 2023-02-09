import moment from 'moment';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "./index.module.css";

const VideoResultsPage = () => {
    const { state } = useLocation();
    return (
        <div className={styles.right}>
            {state.videos.map((video) => {
                const views = Math.ceil(Math.random() * 100).toString();
                if (video.id.channelId) {
                    const channelName = `@${video.snippet.title.replace(/\s+/g, '').toLowerCase()}`;
                    return (
                        <div key={video.etag} className={styles.videoContainer}>
                            <Link
                                to={`/${channelName}`}
                                className={styles.video}>
                                <img src={video.snippet.thumbnails.high.url} alt="thumbnail img" />
                            </Link>

                            <div className={styles.videoContent}>
                                <Link
                                    to={`/${channelName}`}>
                                    <h3>{video.snippet.title}</h3>
                                </Link>
                                <div className={styles.views}>
                                    <img src="https://i.ytimg.com/vi/VuG7ge_8I2Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSBtShhdREhcebYBHI35OM2ZUZGg" width={26} height={26} alt="view" />
                                    <h4>{video.snippet.channelTitle}</h4>
                                </div>
                                <h4>{video.snippet.description}</h4>
                            </div>
                            <Link
                                to={`/${channelName}`}>
                                <button>Subscribe</button>
                            </Link>
                        </div>
                    )
                }
                return (
                    <div key={video.etag} className={styles.videoContainer}>
                        {video.id.playlistId ? (
                            <Link
                                to={`/watch/${video.id.playlistId}`}
                                state={{ type: "playlist", video: video }}
                                className={styles.video}>
                                <img src={video.snippet.thumbnails.high.url} alt="playlist" />
                            </Link>) : (
                            <Link
                                to={`/watch/${video.id.videoId}`}
                                state={{ type: "video", video: video }} className={styles.video}>
                                <img src={video.snippet.thumbnails.high.url} alt="videoplaylist" />
                            </Link>
                        )}
                        <div className={styles.videoContent}>
                            <h3>{video.snippet.title}</h3>
                            <div className={styles.views}>
                                <h4>{views}M views</h4>
                                <h4>. {moment(video.snippet.publishTime, "YYYYMMDD").fromNow()}</h4>
                            </div>
                            <div className={styles.views}>
                                <img src="https://i.ytimg.com/vi/VuG7ge_8I2Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSBtShhdREhcebYBHI35OM2ZUZGg" width={26} height={26} alt="videomain" />
                                <h4>{video.snippet.channelTitle}</h4>
                            </div>
                            <h4>{video.snippet.description}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}


export default VideoResultsPage;


