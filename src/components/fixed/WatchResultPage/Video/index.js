import React from 'react'
import styles from "./index.module.css";
import like from "../../../../assests/icons/like.svg"
import dislike from "../../../../assests/icons/dislike.svg"
import share from "../../../../assests/icons/share.svg"
import options from "../../../../assests/icons/options.svg"
import { useLocation, useParams } from 'react-router-dom';
import moment from 'moment/moment';

function Video() {
  const { id } = useParams();
  const { state } = useLocation();

  let url = "";
  if (state.type === "video") {
    url = `https://www.youtube.com/embed/${id}`
  } else {
    url = `https://www.youtube.com/embed?listType=playlist&list=${id}`
  }
  return (
    <>
        <div className={styles.videoBox}>
          <div className={styles.videos}>
            <iframe width="100%" height="100%" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <h2>{state.video.snippet.title}</h2>
          <div className={styles.mainSection}>
            <div className={styles.subscribe}>
              <div className={styles.logo}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTICfQstCkxucg8OKWNshAULiTkcoSYPiWg&usqp=CAU" width={36} height={36} alt="logo"/>
              </div>
              <div>
                <h3>{state.video.snippet.channelTitle}</h3>
                <h5>36M subscriber</h5>
              </div>
              <div className={styles.follow}>
                <span>Subscribe</span>
              </div>
            </div>
            <div className={styles.cta}>
              <div className={styles.likebtn}>
                <div className={styles.likeIcon}>
                  <img src={like} width={28} height={22} alt="like"/>
                  <span>217K</span>
                </div>
                <div className={styles.dislikeIcon}>
                  <img src={dislike} width={28} height={22} alt="dislike"/>
                </div>
              </div>

              <div className={styles.btn}>
                <img src={share} width={28} height={22} alt="share"/>
                <span>share</span>
              </div>

              <div className={styles.btn}>
                <img src={share} width={28} height={22} alt="download"/>
                <span>Download</span>
              </div>


              <div className={styles.options}>
                <img src={options} width={30} height={12} alt="options"/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.views}>
            <h2>75M view</h2>
            <h2>{moment(state.video.snippet.publishedAt, "YYYYMMDD").fromNow()} </h2>
          </div>
          <p>{state.video.snippet.description}</p>
          <span>Show more...</span>
        </div>
    </>
  )
}

export default Video
