import React from 'react'
import styles from "./index.module.css"
import Video from '../Video'
import Comment from '../Comment'
import SuggestedVideos from '../SuggestedVideos'

const WatchResults = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoPage}>
        <Video />
        <Comment />
      </div>
      <div className={styles.suggestionPage}>
        <SuggestedVideos />
      </div>
    </div>
  )
}

export default WatchResults