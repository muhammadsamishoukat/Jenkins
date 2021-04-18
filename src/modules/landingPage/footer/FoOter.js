import "./Footer.css";
import footerImg from "../../../assets/images/88.png"
export function FoOter() {
    return(
        <div className="container-fluid Footerclr">
            <div className="container footer-cont1">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style={{marginLeft:-17}}>
                        
                           <div className="container">
                           <p className="footer-p-clr"><a href="" className="col-6p-a">Improve this page</a> | <a href="" className="col-6p-a"> Repost a problem</a></p>
                           <a href=""><img src={footerImg} alt=""/></a>
                           <p className="footer-p2-clr">The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.</p>
                           </div>
                        
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 ">
                        <div className="border-top"></div>
                        <p className="footer-col2-p ">Resources</p>
                        <ul className="footer-ul">
                            <li><a href="" className="footer-col2-a">Downloads</a></li>
                            <li><a href="" className="footer-col2-a">Blog</a></li>
                            <li><a href="" className="footer-col2-a">Documentation</a></li>
                            <li><a href="" className="footer-col2-a">Plugins</a></li>
                            <li><a href="" className="footer-col2-a">Security</a></li>
                            <li><a href="" className="footer-col2-a">Contributing</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 ">
                    <div className="border-top"></div>
                    <p className="footer-col2-p ">projects</p>
                        <ul className="footer-ul">
                            <li><a href="" className="footer-col2-a">Structure and governancw</a></li>
                            <li><a href="" className="footer-col2-a">Issue tracker</a></li>
                            <li><a href="" className="footer-col2-a">Roadmap</a></li>
                            <li><a href="" className="footer-col2-a">Github</a></li>
                            <li><a href="" className="footer-col2-a">Jenkins on Jenkins</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <div className="border-top"></div>
                    <p className="footer-col2-p  ">Community</p>
                        <ul className="footer-ul">
                            <li><a href="" className="footer-col2-a">Events</a></li>
                            <li><a href="" className="footer-col2-a">Mailing lists</a></li>
                            <li><a href="" className="footer-col2-a">Chats</a></li>
                            <li><a href="" className="footer-col2-a">Special Interest Groups</a></li>
                            <li><a href="" className="footer-col2-a">Twitter</a></li>
                            <li><a href="" className="footer-col2-a">Reddit</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 ">
                    <div className="border-top"></div>
                    <p className="footer-col2-p ">Others</p>
                        <ul className="footer-ul">
                            <li><a href="" className="footer-col2-a">Code of Conduct</a></li>
                            <li><a href="" className="footer-col2-a">Press information</a></li>
                            <li><a href="" className="footer-col2-a">Merchandise</a></li>
                            <li><a href="" className="footer-col2-a">Artwork</a></li>
                            <li><a href="" className="footer-col2-a">Awards</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}