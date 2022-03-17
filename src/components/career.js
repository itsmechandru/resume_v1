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
            {
              this.props.companySummary && this.props.companySummary.length > 0 && this.props.companySummary.map((e) => {
                return (
                  <>
                    <h4 className={'project-name'}>{e.title}</h4>
                    <p className='career-company-summary'>{e.description}</p>
                  </>
                )
              })
            }
            {/*<p className="career-company-summary">{ this.props.companySummary }</p>*/}
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
        "summary": [
          {
            title: 'Microsites',
            description: "Worked on creation and maintenance of an API service web application for college application processing. Architected the data model for the system to efficiently integrate third party APIs & enable high speed data retrieval. Worked with the mobile application development team to deliver specialized APIs for integration with the core application."
          }
        ],
        "stack": "PHP, MySql, CodeIgniter, Javascript, jQuery, CSS",
        "start_date": "Sep, 2015",
        "end_date": "Oct, 2016",
        "designation": "Software Developer"
      },
      {
        "name": "HousingMan",
        "location": "Bengaluru, IN.",
        "summary": [
          {
            title: 'Own product',
            description: "Worked with various teams to design & develop data heavy API systems & Web Applications. Developed Highly efficient data visualization & data processing platforms and content management systems. Worked on building highly modular CRM tools, organizational tracking tools, customer data collection engines and more."
          }
        ],
        "stack": "Ruby, Ruby on Rails, Postgresql, Javascript, ReactJs, jQuery, PHP, Nginx, HTML, CSS, Node Js",
        "start_date": "Nov, 2017",
        "end_date": "Nov, 2019",
        "designation": "Software Engineer"
      },
      {
        "name": "Techmango Technology services",
        "location": "Madurai, IN.",
        "summary": [
          {
            title: 'Logistics Management system',
            description: "Logistics managers are responsible for overseeing the overall supply chain management, the most common responsibilities that are highlighted in the resume include – organizing and monitoring supply and distribution of goods, managing entire order cycle, managing logistics, warehouse, transportation, and customer service, liaising with manufacturers, retailers, and suppliers.\n"
          },
          {
            title: 'Health Service Portal',
            description: "UI/UX modernization of Health Service Portal of Ministry Of Health and Prevention, UAE. This portal enables digitalized application processing System of their Insurance platform. It is a React.js application with .NET Middleware as an API Server.\n"
          },
          {
            title: 'E-learning support for various Learning Management Systems(LMS):',
            description: "They wants to integrate LMSes with Cisco Webex for student community involvement, learning,\n" +
              "attendance, and student success in web application including like Online meetings, Video Conferencing\n" +
              "Course recordings and publishings Adding training, events related to the students."
          }
        ],
        "stack": "React JS, Node Js, Ruby, Ruby on Rails, Postgresql, Javascript, jQuery, Ngrok, HTML, CSS",
        "start_date": "Dec, 2019",
        "end_date": "Feb, 2022",
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
