import './Slider.css';
import { Button } from '../../../constants/Button'
import img1 from '../../../assets/images/img-1.svg';
import img2 from '../../../assets/images/img-2.png';
import img3 from '../../../assets/images/img-3.png';
import img4 from '../../../assets/images/img-4.jpg';
import img5 from '../../../assets/images/img6.png';

export function SlideR(params) {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide slider-back " data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>

                </ol>
                <div className="container slider-container">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="row ">
                                <div className="col-sm-7 sliderEqual  " >
                                    <p className="slider1">
                                        SheCodeAfrica <br /> Contributhon
                                </p>
                                    <p >
                                        The SheCodeAfrica Contributhon started April  1, 2021. Jenkins Project is mentoring women in  Africa as they propose pull requests to improve  Pipeline help and Pipeline examples. The participants include Onyinye Ezike, Sharon  Jebitok, Esther Ejidike, Cynthia Iradukunda, and Lucy Karimi

                                </p>
                                    <Button title="More info" marginbtm="20px" />
                                </div>
                                <div className="col-sm-5">
                                    <img class="img-fluid" src={img1} alt="First slide" style={{ width: 196 }} style={{ height: 280 }} />

                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-sm-7 sliderEqual">
                                    <p className="slider1">GSoC 2021: Call for <br /> student proposals</p>
                                    <p>Jenkins project will be a mentoring organization <br /> in Google Summer of Code 2021. We are <br /> looking for students and mentors, join us! <br /> Applications close on April 13.</p>
                                    <Button title="More info" marginbtm="20px" />
                                </div>
                                <div className="col-sm-5"><img class="img-fluid" src={img2} alt="Second slide" style={{ width: 249 }} style={{ height: 300 }} /></div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-sm-7 sliderEqual">
                                    <p className="slider1">Jenkins is the Way!</p>
                                    <p>We are looking for experiences of Jenkins <br /> users from around the world showcasing how <br /> they are building, deploying, and automating <br /> great software with Jenkins. Check out their <br /> user stories and share yours</p>
                                    <Button title="More info" marginbtm="20px" />
                                </div>
                                <div className="col-sm-5 "><img class="img-fluid" src={img3} alt="Third slide" style={{ width: 193 }} style={{ height: 300 }} /></div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-sm-6 sliderEqual">
                                    <p className="slider1">cdCon</p>
                                    <p>Join Jenkins at cdCon on June 22-25, 2021! <br /> The event is focused on improving the world's <br /> capacity to deliver software with security and <br /> speed. Become part of the conversation that <br /> drives continuous delivery by meeting peers, <br /> sharing ideas and talking to industry leaders on <br /> all things software delivery and DevOps.</p>
                                    <Button title="Register for cdCon" marginbtm="20px" />
                                </div>
                                <div className="col-sm-6"><img class="img-fluid" src={img4} style={{ width: 574 }} style={{ height: 300 }} alt="Fourth slide" /></div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-sm-7 sliderEqual">
                                    <p className="slider1">Participate and Contribute!</p>
                                    <p>Jenkins is a community-driven project. We <br /> invite everyone to join us and move it forward. <br /> Any contribution matters: code, documentation, <br /> localization, blog posts, artwork, meetups, and <br /> anything else. If you have five minutes or a few <br /> hours, you can help!</p>
                                    <Button title="More info" color="#C82333" marginbtm="20px" />
                                </div>
                                <div className="col-sm-5 "><img class="img-fluid" src={img5} style={{ width: 226 }} style={{ height: 300 }} alt="Fifth slide" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}