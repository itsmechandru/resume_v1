import React, { Component } from 'react'
const dt1 = new Date("September 01, 2015 08:11:00");
const dt2 = new Date();
export  const diff_years = (dt2, dt1) => {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.trunc(diff/365.25));
}
export default class Tagline extends Component {

  render(){
    return(
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h4 className="tagline">{`Offering ${diff_years(dt1, dt2)}+ years of successful experience in Software design and development`}</h4>
        </div>
      </div>
    );
  }
}
