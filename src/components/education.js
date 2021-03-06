import React, { Component } from 'react'

class EducationalInstitution extends Component {
  render(){
    return(
      <div className="row education-row">
        <div className="col-lg-10 col-md-10 col-sm-10">
          <h3 className="degree">{ this.props.degree }</h3>
          <h4 className="university">
            { this.props.university }.
            <span className="university-location"> { this.props.location }</span>
          </h4>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1">
          <span className="education-year-of-comp">
            { this.props.year_of_completion } 
          </span>
        </div>
      </div>
    );
  }
}

export default class Education extends Component {
  listEducation(){
    const education_list = [
      {
        "university": "Saranathan college of Engineering, Anna Uni.",
        "degree": "Bachelor of Technology(IT)",
        "location": "Trichy, IN.",
        "year_of_completion": 2015
      },
      { 
        "university": "Seshasayee Institute of Technology",
        "degree": "Diploma in Computer Engineering",
        "location": "Trichy, IN.",
        "year_of_completion": 2012
      },
      { 
        "university": "Govt. Higher Secondary School",
        "degree": "Senior Secondary Education - HSC",
        "location": "Trichy, IN.",
        "year_of_completion": 2009
      },
      {
        "university": "St.Joseph's High School",
        "degree": "SSLC",
        "location": "Trichy, IN",
        "year_of_completion": 2007
      }
    ];

    const education_component_list = [];
    education_list.forEach( (ed) => {
      education_component_list.push(
        <EducationalInstitution 
          key={ed.degree}
          degree={ed.degree}
          location={ed.location}
          year_of_completion={ed.year_of_completion}
          university={ed.university}
        />
      )
    });
    return education_component_list;
  }

  render(){
    return (
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-university"></i>
          <span className="section-title-content">Education</span>
        </h2>
        { this.listEducation() } 
      </React.Fragment>
    )
  }
}
