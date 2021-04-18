import icon from "../../../assets/icons/shuffle-arrows.png";
import icon2 from "../../../assets/icons/download.png";
import icon3 from "../../../assets/icons/settings.png";
import icon4 from "../../../assets/icons/power.png";
import icon5 from "../../../assets/icons/puzzle-piece.png";
import icon6 from "../../../assets/icons/server.png";
import "./segment.css";
export function SegMents() {
    return (
        <div className="container"  style={{padding:60}}>
            <div className="row" style={{marginBottom:38}}>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-6 col-">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-12 col-sm-6 col-">
                            <img src={icon} alt="" className="segicon img-fluid" />
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-12 col-sm-6 col-">
                            <h5>Continuous Integration and Continuous Delivery</h5>
                            <p className="psize">As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-6 col-">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-12 col-sm-6 col-">
                            <img src={icon2} alt="" className="segicon img-fluid" />
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-12 col-sm-6 col-">
                            <h5>Easy installation</h5>
                            <p className="psize">Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-6 col-">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-12 col-sm-6 col-">
                            <img src={icon3} alt="" className="segicon img-fluid" />
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-12 col-sm-6 col-">
                            <h5>Easy configuration</h5>
                            <p className="psize">Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-6 col-">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-12 col-sm-6 col-">
                            <img src={icon4} alt="" className="segicon img-fluid" />
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-12 col-sm-6 col-">
                            <h5>Plugins</h5>
                            <p className="psize">With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-6 col-">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-12 col-sm-6 col-">
                            <img src={icon5} alt="" className="segicon img-fluid" />
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-12 col-sm-6 col-">
                            <h5>Extensible</h5>
                            <p className="psize">Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-6 col-">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-12 col-sm-6 col-">
                            <img src={icon6} alt="" className="segicon img-fluid" />
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-12 col-sm-6 col-">
                            <h5>Distributed</h5>
                            <p className="psize">Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}