import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand h1" href="/">Cultify</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" >Dropdown</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className='vertical'></div>
      <div className='detailsMain'>
        <form>
          <div class="form-group">
            <label className="textMail" for="exampleInputEmail1">Calcium</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount of Calcium in ppm" />
          </div>
          <div class="form-group">
            <label className="textMail" for="exampleInputPassword1">Magnesium</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount of Magnesium in ppm" />
          </div>
          <div class="form-group">
            <label className="textMail" for="exampleInputPassword1">Sodium</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount of Sodium in ppm" />
          </div>
          <div class="form-group">
            <label className="textMail" for="exampleInputPassword1">Potassium</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount of Potassium in ppm" />
          </div>
          <div class="form-group">
            <label className="textMail" for="exampleInputPassword1">Boron</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount of Boron in ppm" />
          </div>
          <div class="form-group">
            <label className="textMail" for="exampleInputPassword1">Chloride</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount of Chloride in ppm" />
          </div>
          <div class="form-group">
            <label className="textMail" for="exampleInputPassword1">Nitrate-N</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount of Nitrate-N in ppm" />
          </div>
          <div class="form-group">
            <label className="textMail" for="exampleInputPassword1">Hardness</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount of Hardness in ppm CaCO3" />
          </div>
          <div class="form-group">
            <label className="textMail" for="exampleInputPassword1">Alkalinity</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount of Alkalinity in ppm CaCO3" />
          </div>

          <button type="submit" class="subbtn btn btn-primary">Submit</button>
        </form>
      </div>
      <div className='manual'>
        <h2>OR</h2>
        <h4>   Enter details manually</h4>
        <div class="mb-3">
          <input class="form-control" type="file" id="formFile" />
        </div>
        <button type="submit" class="subbtn2 btn btn-primary">Submit</button>
      </div>
    </div>
  );
}

export default App;
