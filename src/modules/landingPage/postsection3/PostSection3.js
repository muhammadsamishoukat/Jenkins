import postpic1 from "../../../assets/images/cloudbees.png";
import postpic2 from "../../../assets/images/osuosl.png";
import postpic3 from "../../../assets/images/cdf.png";
import postpic4 from "../../../assets/images/redhat.png";
import postpic5 from "../../../assets/images/aws.png";
import postpic6 from "../../../assets/images/github.png";
import postpic7 from "../../../assets/images/jfrog.png";
import "./postSection3.css"


export function PostSection3() {
    return (
        <div className="container-fluid container-padding">
            <center><p className="Sec-P">We thank the following organizations for their major commitments to support the Jenkins project.</p></center>
            <div className="container-fluid" style={{ marginTop: 50 }}>
                <div className="row ">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="row">
                            <div className="col-4"> <center> <img src={postpic1} alt="" className="img-fluid" style={{ paddingTop: 33 }} /></center></div>
                            <div className="col-4"><center>   <img src={postpic2} alt="" className="img-fluid Sec-img" /></center></div>
                            <div className="col-4"><center><img src={postpic3} alt="" className="img-fluid Sec-img" /></center></div>
                        </div>
                        {/* <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <center> <img src={postpic1} alt="" className="img-fluid" style={{ paddingTop: 33 }} /></center>
                    </div>
                    <div className="col-2 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <center>   <img src={postpic2} alt="" className="img-fluid Sec-img" /></center>
                    </div>
                    <div className="col-2 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <center><img src={postpic3} alt="" className="img-fluid Sec-img" /></center>
                    </div> */}
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="row">
                            <div className="col-6">
                                <center><img src={postpic4} alt="" className="img-fluid" /></center>

                            </div>
                            <div className="col-6">
                                <center><img src={postpic5} alt="" className="img-fluid Sec-img" /></center>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={postpic6} alt="" className="img-fluid Sec-img2" />
                    </div>
                    <div className="col-6">
                        <img src={postpic7} alt="" className="img-fluid" />

                    </div>
                </div>
            </div>
            <center>
                <p className="Sec-P" style={{ paddingTop: 20 }}>We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.</p>
            </center>
            <div className="container">
                <center>
                <div class="row row-flex">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <ul className="row row-flex">
                            <li className="col-4 col-sm-4 col-lg-4 col-lg-3 col-xl-3">
                                <center><a href="" className="links">Atlassian</a></center>
                            </li>
                            <li className="col-4 col-sm-4 col-lg-4 col-lg-2 col-xl-2 ">
                                <a href=""  className="links">Datadog</a>
                            </li>
                            <li className="col-4 col-sm-4 col-lg-4 col-lg-3 col-xl-3">
                                <center>  <a href=""  className="links">Mac Cloud</a></center>
                            </li>
                            <li className="col-4 col-sm-4 col-lg-4 col-lg-2 col-xl-2">
                                <a href=""  className="links">PageDuty</a>
                            </li>
                            <li className="col-4 col-sm-4 col-lg-4 col-lg-2 col-xl-2">
                                <a href=""  className="links">Sentry</a>
                            </li>

                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <ul className="row row-flex" >
                            <li className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <a href=""  className="links">XMission</a>
                            </li> 
                            <li className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <center> <a href=""  className="links">Tsinghua University</a></center>
                            </li>
                            <li className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <a href=""  className="links">Fastly</a>
                            </li>
                            <li className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <a href="" className="links">SpinUp</a>
                            </li>
                            <li className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <a href=""  className="links">IBM</a>
                            </li>

                        </ul>
                    </div>
                </div>
                </center>
            </div>
        </div>

    )
}