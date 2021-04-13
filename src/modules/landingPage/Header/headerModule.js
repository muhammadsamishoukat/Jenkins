import './header.css';
import logo from '../../../assets/icons/icon.svg'
export function HeaderComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      {/* <div className="container-fluid"> */}
      {/* <div className="col-1"> */}
      <ul className="navbar-nav">
        <li>
          <a className="navbar-brand brand" href="#" >Jenkins</a>
        </li>

      </ul>
      {/* </div> */}
      <button className="navbar-toggler bg-secondary" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      {/* <div className="col-11"> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle cd-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
              <a className="dropdown-item" href="#">What is CDF</a>
              <a className="dropdown-item" href="#">Jenkins X</a>
              <a className="dropdown-item" href="#">Tekton</a>
              <a className="dropdown-item" href="#">Spinnaker</a>

            </div>
          </li>
          <li className="nav-item ">
            <a className="nav-link link-color" href="#">Blog</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Documentation
        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ overflowY: 'hidden' }}>
              <a className="dropdown-item dropbold" href="#">User Guide</a>
              <a className="dropdown-item" href="#">-Installing jenkins</a>
              <a className="dropdown-item" href="#">-Jenkins Pipeline</a>
              <a className="dropdown-item" href="#">-Jenkins Pipeline</a>
              <a className="dropdown-item" href="#">-Managing Jenkins</a>
              <a className="dropdown-item" href="#">-System Administration</a>
              <a className="dropdown-item" href="#">-Terms and Definations</a>
              <a className="dropdown-item dropbold" href="#">Solution pages</a>
              <a className="dropdown-item dropbold" href="#">Tutorials</a>
              <a className="dropdown-item" href="#">-Guided Tour</a>
              <a className="dropdown-item" href="#">-More Tutorials</a>
              <a className="dropdown-item dropbold" href="#">Developer Guide</a>
              <a className="dropdown-item dropbold" href="#">Contributor Guide</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link link-color" href="#">Plugins</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Community
        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
              <a className="dropdown-item" href="#">Overview</a>
              <a className="dropdown-item" href="#">Chat</a>
              <a className="dropdown-item" href="#">Meet</a>
              <a className="dropdown-item" href="#">Events</a>
              <a className="dropdown-item" href="#">Issue Tracker</a>
              <a className="dropdown-item" href="#">Mailing Lists</a>
              <a className="dropdown-item" href="#">Roadmap</a>
              <a className="dropdown-item" href="#">Account Management</a>
              <a className="dropdown-item dropbold" href="#">Special Intrest Groups</a>
              <a className="dropdown-item" href="#">-Advocacy and Outreach</a>
              <a className="dropdown-item" href="#">-Chinese Localization</a>
              <a className="dropdown-item" href="#">-Cloud Native</a>
              <a className="dropdown-item" href="#">-Documentation</a>
              <a className="dropdown-item" href="#">-Google Summer of Code</a>
              <a className="dropdown-item" href="#">-Hardware and EDA</a>
              <a className="dropdown-item" href="#">-Pipeline Authoring</a>
              <a className="dropdown-item" href="#">-Plateform</a>
              <a className="dropdown-item" href="#">-User Experience</a>

            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Subprojects
        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
              <a className="dropdown-item" href="#">Overview</a>
              <a className="dropdown-item" href="#">Evergreen</a>
              <a className="dropdown-item" href="#">Google Summer of code in Jenkins</a>
              <a className="dropdown-item" href="#">Infrastructure</a>
              <a className="dropdown-item" href="#">CI/CD and Jenkins Area Meetups</a>
              <a className="dropdown-item" href="#">Jenkins Configuration as Code</a>
              <a className="dropdown-item" href="#">Jenkins Configure as Code</a>
              <a className="dropdown-item" href="#">Jenkins Opeerator</a>
              <a className="dropdown-item" href="#">Jenkins Remoting</a>
              <a className="dropdown-item" href="#">Document jenkins on Kubernetes</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About
        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
              <a className="dropdown-item" href="#">Roadmap</a>
              <a className="dropdown-item" href="#">Security</a>
              <a className="dropdown-item" href="#">Press</a>
              <a className="dropdown-item" href="#">Awards</a>
              <a className="dropdown-item" href="#">Conduct</a>
              <a className="dropdown-item" href="#">Artwork</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              English
        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
              <a className="dropdown-item" href="#">Chinese</a>
            </div>
          </li>
        </ul>
        <button className="btn btn-outline-secondary my-2 my-sm-0 btn-lg btn-block nav-button" type="download">Download</button>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

        </form>
      </div>
      {/* </div> */}
      {/* </div> */}
    </nav>
  )
}