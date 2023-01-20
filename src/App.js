import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

function NavBar(){
  return( 
  <nav className="navbar navbar-expand-lg" style={{background:"#adfac1"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png" alt="Logo" className="d-inline-block align-text-top" />
        <span className='p-2'>Spotify Streams to Money Calculator.</span>
      </a>
      
        <div className="d-flex">
          
        </div>
    </div>
  </nav>);
}

function Calculator(props){

  const [streams,setStreams] = useState(0);
  const [money,setMoney] = useState(0);
  const sptpay = 0.004;

  function get_Values(e){
    setStreams(e.target.value);
    setMoney(sptpay*e.target.value);
  }

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className='card'>
        <div className='card-header'>
          <h5 className='text-center'>Calculate Your Spotify Earnings.</h5>
        </div>
        <div className='card-body'>
          <div className='text-center mb-3 border'>
            1 Stream = $0.004 ~<br/>
            10 Stream = $0.04<br/>
            Only about 70 percent of the total revenue goes directly to the artist.
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Number of Streams :</label>
            <div className="col-8">
              <input type="number" className="form-control" onChange={get_Values}/>
            </div>
          </div>
          <div className='card-body text-center' style={{background:"#adfac1"}}>
            <div className='row g-1'>
              <div className='col-md-12 col-lg-12'>
                Streams : {streams}
              </div>
              <div className='col-md-12 col-lg-12'>
                 Total Earnings : ${money}
              </div>
              <div className='col-md-12 col-lg-12'>
                 Spotify Commission : ${((money*30)/100).toFixed(2)}
              </div>
              <div className='col-md-12 col-lg-12'>
                 You Got : ${((money*70)/100).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <div>
    <NavBar />
    <Calculator />
  </div>;
}

export default App;
