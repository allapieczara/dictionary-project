import React from "react";
import "./Photos.css";

export default function (props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          <div></div>
          {props.photos.map(function (photo, index) {
            console.log(photo);
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                ></a>
                <img src={photo.src.landscape} className="img-fluid"></img>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
