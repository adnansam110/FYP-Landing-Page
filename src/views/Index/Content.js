import React from "react";
import IMG from "../../assets/akuh.png";
import NEDIMG from "../../assets/ned.png";
function Content() {
  return (
    <div style={{ backgroundColor: "#212529", color: "white" }}>
      <div className="container content">
        <div className="row">
          <div className="col-sm-3 talk">
            <h1 style={{ color: "white" }}>Hazard</h1>
            <h1 style={{ color: "white" }}>Prevention Tool</h1>
            <br />
            <h6 className="bold-four">
              An app for schools to train their students to help them how to
              prevent themseleves from traffic hazard and educate them about the
              traffic rules.
              <br />
              <br />
              Join now by clicking below, and play your part in educating the
              youth!
            </h6>
            <br />
            <h6>
              {/* <a className="btn btn-primary start-left start-one" href="#">
                Get Started
              </a> */}
              <a
                className="btn btn-outline-light"
                href="https://preventdesktool20220320122202.azurewebsites.net/"
              >
                Get Started
              </a>
            </h6>
          </div>
          <div className="col-sm-9 showcase-img">
            {/* <div className="circle"></div> */}
          </div>
        </div>
      </div>

      <section class="features-icons bg-light text-center det-ails">
        {/* <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div class="features-icons-icon d-flex  icon-bra-ails">
                  <i class="icon-screen-desktop m-auto text-primary icon-ails"></i>
                </div>
                <h5 style={{ color: "black" }}>Lorem Tag</h5>
                <p style={{ color: "black" }} class="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div class="features-icons-icon d-flex  icon-bra-ails">
                  <i class="icon-layers m-auto text-primary icon-ails"></i>
                </div>
                <h5 style={{ color: "black" }}>Morem Tag</h5>
                <p style={{ color: "black" }} class="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                <div class="features-icons-icon d-flex  icon-bra-ails">
                  <i class="icon-check m-auto text-primary icon-ails"></i>
                </div>
                <h5 style={{ color: "black" }}>Oorem Tag</h5>
                <p style={{ color: "black" }} class="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
          class="col-lg-12"
        >
          <img style={{ width: 380, height: 80, marginTop: 40 }} src={IMG} />
          <img
            style={{ width: 185, height: 170, paddingBottom: 10 }}
            src={NEDIMG}
          />
        </div>
        {/* <div class="col-lg-12">
        </div> */}
      </section>
    </div>
  );
}

export default Content;
