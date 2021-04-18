import date from "../../../assets/images/date.PNG"
import date2 from "../../../assets/images/date2.PNG"
import date3 from "../../../assets/images/date3.PNG"
import date4 from "../../../assets/images/date.PNG"

import "./post.css"
export function Post() {
    return (
        <div class="container">
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
			
			<div class="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-3" >
				<div class="card card-block " >
                    <a href="#">
                    <div className="container">
                    <center><img src={ date } alt="date-img" className="img-fluid post-img"/></center>
                    <p className="post-p1">CI/CD Pipelines with Jenkins Webinar by Red Hat</p>
                    <p className="post-p2">Transfroming Test-Driven Workflows Into CI/CD Pipelines With Jenkins. By using Jenkins and Red Hat</p>
                    </div>
                    </a>
                </div>
			</div>
            <div class="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-3" >
				<div class="card card-block " >
                    <a href="#">
                    <div className="container">
                    <center><img src={ date2 } alt="date-img" className="img-fluid post-img"/></center>
                    <p className="post-p1">Jenkins Templating Engine CDF Online Meetup</p>
                    <p className="post-p2">Steven Terrana Will talk about using the jenkins Templating Engine for Pipeline Modeling.</p>
                    </div>
                    </a>
                </div>
			</div>
            <div class="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-3" >
				<div class="card card-block " >
                    <a href="#">
                    <div className="container">
                    <center><img src={ date3 } alt="date-img" className="img-fluid post-img"/></center>
                    <p className="post-p1">CdCon Online</p>
                    <p className="post-p2">Jenkins will be represented at cdCon organized by the Continuous Delivery Foundation. We will have <multiple className="p-blur">multiple plugings </multiple></p>
                    </div>
                    </a>
                </div>
			</div>
            <div class="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-3" >
				<div class="card-block" >
                    <a href="#" >
                    <div className="container">
                    <center><img src={ date4 } alt="date-img" className="img-fluid post-img"/></center>
                    <p className="post-p1">Jenkins Contributor Summit Online</p>
                    <p className="post-p2">The Jenkins Contributor Summit brings together curret and future contributors to the Jenkins <multiple className="p-blur">projects</multiple> </p>
                    </div>
                    </a>
                </div>
			</div>
            <div class="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-3" >
				<div class="card card-block" >
                    <a href="#">
                    <div className="container">
                    <center><img src={ date } alt="date-img" className="img-fluid post-img"/></center>
                    <p className="post-p1">DevOps World <br/> Online</p>
                    <p className="post-p2">Jenkins will be represented at the DevOps World conference.There will be community and <multiple className="p-blur">continuous</multiple></p>
                    </div>
                    </a>
                </div>
			</div>
    </div>
</div>
    )
}