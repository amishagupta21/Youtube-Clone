import React, { useEffect, useState } from 'react'
import like from "../../../../assests/icons/like.svg"
import dislike from "../../../../assests/icons/dislike.svg"
import sort from "../../../../assests/icons/sort.svg"
import styles from "./index.module.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import moment from 'moment'


const API_KEY = "AIzaSyAceKCVYFltcS7Ci2B4Tp7KYT2A0_EvGgA";

function Comment() {
  const [comments, setComments] = useState([])
  const [commentsCount, setCommentsCount] = useState("");
  const { id } = useParams();//url k andar jo bhi parameter paas krte hai ..usko useParams hook s access krte hai..
 
  
  useEffect(() => {
    
    const fetchComments = () => {
      axios({
        method: "GET",
        url: `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&maxResults=40&key=${API_KEY}`
      }).then((res) => {
        const count = res.data.pageInfo.totalResults * res.data.pageInfo.resultsPerPage;
        setCommentsCount(count);
        setComments(res.data.items);
      }).catch((err) => {
        console.log("Error: ", err);
      })
    }

    fetchComments();
  }, [id])
  return (
    <>
      <div className={styles.comments}>
        <h2>{commentsCount} Comments</h2>
        <div className={styles.sortBy}>
          <img src={sort} width={30} height={30} alt="sortby"/>
          <h2>Sort by</h2>
        </div>
      </div>

      <div className={styles.addComments}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTICfQstCkxucg8OKWNshAULiTkcoSYPiWg&usqp=CAU" width={38} height={38}  alt="addcomment"/>
        <input placeholder='Add a comment...' />
      </div>

      {comments.map((comment, index) => {
        return (
          <div className={styles.CommentsInfo}>
            <div key={index} className={styles.CommentsLogo}>
              <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} width={38} height={38}  alt="commentlogo"/>
            </div>
            <div className={styles.CommentsAccountInfo}>
              <div className={styles.AccountInfo}>
                <h2> {comment.snippet.topLevelComment.snippet.authorDisplayName}</h2>
                <h2>{moment(comment.snippet.topLevelComment.snippet.updatedAt, "YYYYMMDD").fromNow()}</h2>
              </div>
              <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className={styles.review}>
                <img src={like} width={24} height={24}  alt="review"/>
                <h1>{comment.snippet.topLevelComment.snippet.likeCount}</h1>
                <img src={dislike} width={24} height={24}  alt="dislike"/>
                <h1>reply</h1>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Comment
