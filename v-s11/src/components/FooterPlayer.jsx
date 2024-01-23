import React from "react";
import shuffleIcon from "./playerbuttons/Shuffle.png";
import prevIcon from "./playerbuttons/Previous.png";
import playIcon from "./playerbuttons/Play.png";
import nextIcon from "./playerbuttons/Next.png";
import repeatIcon from "./playerbuttons/Repeat.png";
export default function FooterPlayer() {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1 bg-dark border-top border-secondary">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img src={shuffleIcon} alt="shuffle" className="w-50" />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img src={prevIcon} alt="shuffle" className="w-50" />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img src={playIcon} alt="shuffle" className="w-50" />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img src={nextIcon} alt="shuffle" className="w-50" />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img src={repeatIcon} alt="shuffle" className="w-50" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
