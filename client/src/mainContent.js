import React from "react";

const mainContent = () =>{
    return(
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
    )
};

export default mainContent;