import React from "react";
import { Row } from "reactstrap";
import ARCHERY from "../data/archery";

const VideoFrame = ({ source }) => {
  return ARCHERY.videos[source].map(video => {
    let videoUrl = `https://www.youtube.com/embed/${video.id}`;
    let imgUrl = `http://i3.ytimg.com/vi/${video.id}/hqdefault.jpg`;
    let srcDoc = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
    span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
    </style><a href=${videoUrl}?autoplay=1><img src=${imgUrl} alt=${video.title}><span>▶</span></a>`;
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
};

const Videos = () => {
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
        <VideoFrame source="World Archery" />
        <VideoFrame source="Archery 360" />
      </Row>
    </div>
  );
};

export default Videos;
