import React, { Component } from 'react'

class CareerCompany extends Component {
  render(){
    return(
      <div className="row career-company-container">
        <div className="col-lg-2 col-md-2 col-sm-2">
          <span className="company-period-of-service">{ this.props.companyStart } - {this.props.companyEnd } </span>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10">
          <div className="career-company">
            <h3 className="career-company-name">
              { this.props.companyName }
              <span className="career-company-location">{ this.props.companyLocation}</span>
            </h3>
            <h4 className="career-company-designation">{ this.props.companyDesignation }</h4>
            <p className="career-company-summary">{ this.props.companySummary }</p>
            <div className="company-tech-stack">
              <span className="company-tech-stack-descriptor">Tech Stack: </span>{this.props.companyStack}
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default class Career extends Component {
  loadCompanies(){
    const companies = [
      {
        "name": "Harsha InfoTech",
        "location": "Trichy, IN.",
        "summary": "Worked on creation and maintenance of an API service web application for college application processing. Architected the data model for the system to efficiently integrate third party APIs & enable high speed data retrieval. Worked with the mobile application development team to deliver specialized APIs for integration with the core application.",
        "stack": "PHP, MySql, CodeIgniter, Javascript, jQuery, CSS",
        "start_date": "Sep, 2015",
        "end_date": "Oct, 2016",
        "designation": "Software Developer"
      },
      {
        "name": "HousingMan",
        "location": "Bengaluru, IN.",
        "summary": "Worked with various teams to design & develop data heavy API systems & Web Applications. Developed Highly efficient data visualization & data processing platforms and content management systems. Worked on building highly modular CRM tools, organizational tracking tools, customer data collection engines and more.",
        "stack": "Ruby, Ruby on Rails, Postgresql, Javascript, ReactJs, jQuery, PHP, Nginx, Html, Css, Node Js",
        "start_date": "Nov, 2017",
        "end_date": "Nov, 2019",
        "designation": "Software Engineer"
      },
      {
        "name": "Techmango Technology services",
        "location": "Madurai, IN.",
        "summary": "MOHAP - "+
          "UI/UX modernization of Health Service Portal of Ministry Of Health and Prevention, UAE. This portal enables digitalized application processing System of their Insurance platform. It is a React.js application with .NET Middleware as an API Server.\n",
        "stack": "React JS, Node Js, Ruby, Ruby on Rails, Postgresql, Javascript, jQuery, Ngrok, HTML, CSS",
        "start_date": "Dec, 2019",
        "end_date": "Present",
        "designation": "Software Engineer"
      }
    ]
    const companyRenderList = [];
    companies.reverse().forEach((company) => {
      companyRenderList.push(
        <CareerCompany
          key={company.name}
          companyName={company.name}
          companyLocation={company.location}
          companySummary={company.summary}
          multipleProject={company.summary.length > 0 ? company.summary : '' }
          companyStack={company.stack}
          companyStart={company.start_date}
          companyEnd={company.end_date}
          companyDesignation={company.designation}
        />
      )
    });
    return companyRenderList;
  }

  render(){
    return(
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-briefcase"></i>
          <span className="section-title-content">Career</span>
        </h2>
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12">
            { this.loadCompanies() }
          </div>
        </div>
      </React.Fragment>
    )
  }
}
