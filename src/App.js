import React, { Component } from 'react';
import './style.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="home">
    {/* <!-- Navbar --> */}
      <nav className="navbar navbar-light bg-secondary fixed-top shadow">
    <div className="container" />
      <a className="navbar-brand" href="#">Surya J</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Link in</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">Contact Info</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
    {/* <!-- Akhir Navbar --> */}

    {/* <!-- Jumbotron --> */}
    <section className="mt-4 p-5 bg-light text-black rounded">
      <div className="jumbotron text-center">
        <img src={require('./imge/lp-.jpg')} alt="Surya-J" width="100px" className="rounded-circle rounded float" />
        <h4>Hi, I'm Surya_J</h4>
        <p className="lead">Learner</p>
        <h1 className="display-4">Welcome to My Port</h1>
      </div>
    </section>
    {/* <!-- Akhir Jumbotron --> */}

    {/* <!-- Services --> */}
    <div className="container text-center" id="bio">
      <h3 className="fs-bold fs-2">Services</h3>
      <p className="fs-6 fst-italic fw-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <br/>
      <br/>
     
      <div className="card-container"></div>
      <div className="row">
        <div className="col">
          <h6 className="fs-5">import</h6>
          <p>
            An import is the receiving country in an export from the sending country. Importation and exportation are the defining financial transs of international trade.
          </p>
        </div>
        <div className="col">
          <h6>Microsoft Office</h6>
          <p>
            Microsoft Office, or simply Office, is a family of client software, server software, and services developed by Microsoft.
          </p>
        </div>
        <div className="col">
          <h6>Income Tax</h6>
          <p>
            An income tax is a tax imposed on individuals or entities (taxpayers) in respect of the income or profits earned by them (commonly called taxable income).
          </p>
        </div>
      </div>
    </div>
    {/* <!-- Akhir Services --> */}

    {/* <!-- Contact --> */}
    <div className="container mt-5" id="Contact">
      <h3 className="fs-bold fs-2 text-center mb-2">Contact Info</h3>
    </div>

    <div className="contact container" id="bio">
    <div className="col-md-1"></div>
    <div className="content">
      <div className="addres details">
        <p> <svg xmlns={"http://www.w3.org/2000/svg"} width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        <i className="bi bi-map"></i> &nbsp;&nbsp; Surabaya, Jawa Timur</p> 
      </div>
    </div>
    <div className="col-md-5">
        <p> <svg xmlns={"http://www.w3.org/2000/svg"} width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg>
          <i className="bi bi-envelope"></i> &nbsp;&nbsp; sur@gmail.com </p>
        <p> <svg xmlns={"http://www.w3.org/2000/svg"} width="16" height="16" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
          <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
        </svg>
          <i className="bi bi-phone-fill"></i> &nbsp;&nbsp; 0987654321 </p>
          <div className="content">
            <div className="right-side">
              <div className="topic-text">Send us a message</div>
              <p>If you have any work from me or any types of queries relate to my work, you can send me message from here. It's my pleasure to help</p>
            </div>
            <form action="#">
              <div className="input-box">
                <input typeName="type" placeholder="enter your name"/>
              </div>
             <div className="input-box">
                <input typeName="text" placeholder="enter your email"/>
              </div>
             <div className="input-box message-box">
                <textarea></textarea>
              </div>
              <div className="button">
                <input typeName="button" value="Send Me"/>
              </div>
            </form>
          </div>
      </div>
    </div>
    </div>
    )
  }
}

export default App;