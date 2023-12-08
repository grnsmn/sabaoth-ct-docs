import ReactPlayer from "react-player";

import React from "react";

const VideoPlayer = ({ url, ...props }) => {
  return <ReactPlayer controls url={url} width="100%" {...props} />;
};

export default VideoPlayer;
