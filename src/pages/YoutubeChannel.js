import axios from 'axios'
import React, { useEffect } from 'react'

const API_KEY = "AIzaSyAceKCVYFltcS7Ci2B4Tp7KYT2A0_EvGgA";

function YoutubeChannel() {
    const fetchYoutubeChannelData = () => {
        axios({
            method: "GET",
            url: `https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet&part=contentDetails&part=id&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${API_KEY}`
        }).then((res) => {
            console.log(JSON.stringify(res));
        }).catch((err) => {
            console.log("ERROR: ", err);
        })
    }
    useEffect(() => {
        fetchYoutubeChannelData()
    }, [])
    return (
        <div>
            <h1>Youtube Channel</h1>
        </div>
    )
}

export default YoutubeChannel
