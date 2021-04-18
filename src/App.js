import { HeaderComponent } from "./modules/landingPage/Header/headerModule"
import { Body1 } from "./modules/landingPage/Body/Body1"
import { SlideR } from "./modules/landingPage/slider/SlideR"
import { SegMents } from "./modules/landingPage/segments/SegMents"
import { Video } from "./modules/landingPage/video/video";
import { Post } from "./modules/landingPage/postEvent/post";
import { PostSection2 } from "./modules/landingPage/post-section2/postsection2";
import { PostSection3 } from "./modules/landingPage/postsection3/PostSection3";
import { FoOter } from "./modules/landingPage/footer/FoOter" 
import './App.css';

function App() {
  return (
    <div>
      <div> <HeaderComponent /></div>
      <div>  <Body1 /></div>
      <div> <SlideR /></div>
      <div> <SegMents /></div>
      <div> <Video /> </div>
      <div><Post/></div>
      <div><PostSection2/></div>
      <div><PostSection3/></div>
      <div><FoOter/></div>
    </div>
  );
}

export default App;
