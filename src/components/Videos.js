import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import axios from "axios";

const VideoFrame = ({ videos }) => {
  if (videos === "error") {
    return (
      <div>
        <h4 className="text-primary">
          Sorry, Somethin is wrong with the API, try to refresh the page later.
        </h4>
      </div>
    );
  } else {
    return videos.map(video => {
      let videoUrl = `https://www.youtube.com/embed/${video.id}`;
      let srcDoc = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
      span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
      </style><a href=${videoUrl}?autoplay=1><img src=${video.thumbnail} alt=${video.title}><span>▶</span></a>`;
      return (
        <div className="col-12 col-md-6" key={video.title}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title={video.title}
              src={videoUrl}
              srcDoc={srcDoc}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowFullScreen"
              className="border border-dark embed-responsive-item"
            ></iframe>
          </div>
          <p className="font-weight-bold">{video.title}</p>
        </div>
      );
    });
  }
};

const Videos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchVideos() {
      try {
        const result = await axios(
          "https://archery-api.now.sh/api/archery/videos"
        );
        setVideos(result.data);
      } catch (error) {
        setVideos("error");
      }
    }
    fetchVideos();
  }, []);

  return (
    <div className="m-4">
      <Row>
        <div className="col-12">
          <h2 className="text-primary">VIDEOS</h2>
          <p className="lead">
            Here you can find Youtube videos to get an idea and learn about
            Archery.
          </p>
        </div>
      </Row>
      <Row className="text-center mt-4">
        <VideoFrame videos={videos} />
      </Row>
    </div>
  );
};

export default Videos;
