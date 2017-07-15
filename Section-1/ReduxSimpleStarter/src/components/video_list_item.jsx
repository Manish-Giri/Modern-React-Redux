import React from 'react';

const VideoListItem = props => {
    const video = props.video;
    return (
        <li className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <div className="img">

                    </div>
                </div>
            </div>
        </li>
    
   
    )
};

export default VideoListItem;
