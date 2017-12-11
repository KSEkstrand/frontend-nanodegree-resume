/*
Build the page
 */
export default resumeinfo = function(){
   /*
   Begin JS objects area
   */
  let sectionHolder = [];
  const bio = {
    name : "Kyle Ekstrand",
    role : "Guy who codes things",
    contacts : {
          mobile: '(111)867-5309',
          email: 'ksekstrand@gmail.com',
          github: 'ksekstrand',
          twitter: '',
          location: 'USA'
        },
    welcomeMessage: "Hello Friends, this is my welcome message!",
    skills: {
      skill1: 'petting dogs',
      skill2: 'eating peanut butter',
      skill3: 'bumping into coffee tables'
    },
    biopic: "http://idonthaveabiopic.com",
    display: () => {

    }
  }
  sectionHolder.push(bio);

  const education = {
    schools: {
       name: "Univesity of Alaska Anchorage",
       location: "Anchorage, AK",
       degree: "Management Information Systems",
       majors: "Economics, Management Information Systems",
       dates: "2008-2015",
       url: "https://www.uaa.alaska.edu"
     },
    onlineCourses: {
         title: "Udacity Front End Developer",
         school: "Udacity",
         dates: "2016-2017",
         url: "https://udacity.com"
       },
       display: () => {

    }
  }
  sectionHolder.push(education);

  const jobs = {
    jobList:{
      job1:{
        employer: "USAA",
        title: "Software Developer and Integrator II",
        location: "San Antonio, TX",
        dates: "2015-Current",
        description: "I write code on the mainframe (primaily C++ / Q++ code running on CICS transactions on the z/os platform), java tier (RESTful JAX-RS web services and Wicket), and the UI occassionally."
      },
      job2: {
        employer: "Northern Air Cargo",
        title: "Systems Analyst II",
        location: "Anchorage, AK",
        dates: "2014-2015",
        description: "Application administrator and all-around IT problem solver for a variety of functions, including cargo systems, SAP, and inventory management UDA creation",
      }
    },
    display: () => {

    }
  }
  sectionHolder.push(jobs);

  const projects = {
    projectList: {
      project1:{
        title: "",
        dates: "",
        description: "",
        images: ""
      },
      project2:{
        title: "",
        dates: "",
        description: "",
        images: ""
      }
    },
    display: () =>  {

    }
  }
  sectionHolder.push(projects);

  /*
  End JS objects area
  */

  /*
  Insert the resume info into page
  */
  let currentSection;
};
