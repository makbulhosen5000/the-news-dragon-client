import React from 'react';
import img1 from '../../../assets/qZone1.png';
import img2 from "../../../assets/qZone2.png";
import img3 from "../../../assets/qZone3.png";
//import bg from "../../../assets/bg.png";


const QZone = () => {
    return (
      <div className="bg-secondary text-center py-4 my-4">
        <h4>QZone</h4>
        <div>
          <img src={img1} className="img-fluid" alt="" />
          <img src={img2} className="img-fluid" alt="" />
          <img src={img3} className="img-fluid" alt="" />
        </div>
      </div>
    );
};

export default QZone;