import React from "react";

const man = () =>{
    return(
        <div className='manual'>
        <h2>OR</h2>
        <h4>   Enter details manually</h4>
        <div class="mb-3">
          <input class="form-control" type="file" id="formFile" />
        </div>
        <button type="submit" class="subbtn2 btn btn-primary">Submit</button>
      </div>
    );
}

export default man;