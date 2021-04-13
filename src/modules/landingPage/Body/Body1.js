import icon2 from '../../../assets/icons/icon2.svg';
import './Body1.css'
export function Body1() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <img src={icon2} className="App-logo img-fluid tag" alt="logo" />
                </div>
                <div className="col-sm-6 col-md-6 ">
                    <p className="pfont-tag">Jenkins</p>
                    <p className="pfont">Buid great things at any scale</p>
                    <p className="p-para">The leading open source automation server,<br /> Jenkins provides hundreds of plugins to support <br /> building, deployingand automating any project</p>
                    <button className="btn btn-secondary btn-md" style={{ marginBottom: 10 }}>Documentation</button>
                    <button className="btn btndown btn-md" style={{ marginBottom: 10 }}>Download</button>
                </div>
            </div>
        </div>
    )
}