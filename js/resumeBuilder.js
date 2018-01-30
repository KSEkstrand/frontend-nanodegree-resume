/*
Build the page
*/

 /*
 Begin JS objects area
 */
const bio = {
  name : "Kyle Ekstrand",
  role : "Guy who codes things",
  contacts : {
    mobile: '(111)867-5309',
    email: 'ksekstrand@gmail.com',
    github: 'ksekstrand',
    blog: 'no blog',
    twitter: 'notwitter',
    location: 'USA'
  },
  welcomeMessage: "Hello Friends, this is my welcome message!",
  skills: {
    skill1: 'petting dogs',
    skill2: 'eating peanut butter',
    skill3: 'bumping into coffee tables'
  },
  biopic: "images\fry.jpg",
  display: () => {
    HTMLheaderName = dataReplace(HTMLheaderName, bio.name);
    HTMLheaderRole = dataReplace(HTMLheaderRole, bio.role);
    HTMLmobile = dataReplace(HTMLmobile, bio.contacts.mobile);
    HTMLtwitter = dataReplace(HTMLtwitter, bio.contacts.twitter);
    HTMLgithub = dataReplace(HTMLgithub, bio.contacts.github);
    HTMLemail = dataReplace(HTMLemail, bio.contacts.email);
    HTMLblog = dataReplace(HTMLblog, bio.contacts.blog);
    HTMLlocation = dataReplace(HTMLlocation, bio.contacts.location);
    HTMLbioPic = dataReplace(HTMLbiopic, 'images/fry.jpg');
    HTMLwelcomeMsg = dataReplace(HTMLwelcomeMsg, bio.welcomeMessage);
    HTMLskills = dataReplaceCollection(HTMLskills, bio.skills);

    $('#header').append(HTMLbioPic);
    $('#header').append(HTMLwelcomeMsg);
    $('#header').append(HTMLskillsStart);
    $('#header').append(HTMLskills);
    $('#topContacts').before(HTMLheaderName);
    $('#topContacts').before(HTMLheaderRole);
    $('#topContacts').append(HTMLmobile);
    $('#topContacts').append(HTMLemail);
    // $('#topContacts').append(HTMLtwitter);
    $('#topContacts').append(HTMLgithub);
    // $('#topContacts').append(HTMLblog);
    $('#topContacts').append(HTMLlocation);
  }
};

const education = {
  schools: {
     name: "Univesity of Alaska Anchorage",
     location: "Anchorage, AK",
     degree: "B.B.A.",
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
       HTMLschoolDegree=dataReplace(HTMLschoolDegree, education.schools.degree);
       HTMLschoolDates=dataReplace(HTMLschoolDates, education.schools.dates);
       HTMLschoolLocation=dataReplace(HTMLschoolLocation, education.schools.location);
       HTMLschoolName=dataReplace(HTMLschoolName, education.schools.name);
       HTMLschoolMajor=dataReplace(HTMLschoolMajor, education.schools.majors);
       HTMLonlineTitle=dataReplace(HTMLonlineTitle, education.onlineCourses.title);
       HTMLonlineSchool=dataReplace(HTMLonlineSchool, education.onlineCourses.school);
       HTMLonlineDates=dataReplace(HTMLonlineDates, education.onlineCourses.dates);
       HTMLonlineURL=dataReplace(HTMLonlineURL, education.onlineCourses.url);

       $('#education').append(HTMLschoolStart);
       $('.education-entry').append(HTMLschoolName + HTMLschoolDegree);
       $('.education-entry').append(HTMLschoolDates);
       $('.education-entry').append(HTMLschoolMajor);
       $('.education-entry').append(HTMLschoolLocation);

       $('#education').append(HTMLonlineClasses);
       $('#onlineCourses').append(HTMLonlineTitle + HTMLonlineSchool);
       $('#onlineCourses').append(HTMLonlineDates);
       $('#onlineCourses').append(HTMLonlineURL);
  }
};

const jobs = {
  jobList:{
    job1:{
      employer: "USAA",
      title: "Software Developer and Integrator II",
      location: "San Antonio, TX",
      dates: "2015-Current",
      description: "I write code."
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
    $('#workExperience').after(HTMLworkStart);
    $.each(jobs.jobList, function(key, value){
      var link = dataReplaceAndKeepOriginal(HTMLworkEmployer, value.employer) +
      dataReplaceAndKeepOriginal(HTMLworkTitle, value.title);
      $('.work-entry').append(link);
      $('.work-entry').append((dataReplaceAndKeepOriginal(HTMLworkDates, value.dates)));
      $('.work-entry').append((dataReplaceAndKeepOriginal(HTMLworkLocation, value.location)));
      $('.work-entry').append((dataReplaceAndKeepOriginal(HTMLworkDescription, value.description)));
    });
  }
};

const projects = {
  projectList: {
    project1:{
      title: "this project",
      dates: "12-12-1912",
      description: "this project was a project made of things and stuff and other things and stuff and it included things and stuff",
      images: ""
    },
    project2:{
      title: "that project",
      dates: "13-13-1913",
      description: "this project was a project made of things and stuff and other things and stuff and it included things and stuff",
      images: ""
    }
  },
  display: () =>  {
    let count = 0;
    $.each(projects.projectList, function(key, value){
      var projectIteratorId = "project" + count;
      var loc = HTMLprojectStart.lastIndexOf("class");
      var newHtmlProjectStart = HTMLprojectStart.slice(0,loc) +
        "id=\""+projectIteratorId +"\" " + HTMLprojectStart.slice(loc);
      $('#projects').append(newHtmlProjectStart);
      $('#'+projectIteratorId).append(dataReplaceAndKeepOriginal(HTMLprojectTitle, value.title));
      $('#'+projectIteratorId).append(dataReplaceAndKeepOriginal(HTMLprojectDates, value.dates));
      // $('#'+projectIteratorId).append(dataReplaceAndKeepOriginal(HTMLprojectImage, value.images));
      $('#'+projectIteratorId).append(dataReplaceAndKeepOriginal(HTMLprojectDescription, value.description));
      count++;
    });
  }
};

/*
End JS objects area
*/


/*
Insert the resume info into page
*/

 dataReplace = function(inputHtml, value) {
  return dataReplaceWithOptionalSelector(inputHtml, value, null);
};

function dataReplaceAndKeepOriginal(inputHTML, value){
  var text = inputHTML;
  text = text.replace('%data%',value);
  return text;
}

 dataReplaceWithOptionalSelector = function(inputHtml, value, selector){
  //null check, ES6 null check
  if(selector && (!inputHtml || !value || value === null || inputHtml === null))
  {
    console.log("null!");
  }

  let oldText = inputHtml;
  let newText;
  if(!selector){
    newText = oldText.replace('%data%',value);
  }
  else{
    newText = oldText.replace(selector,value);
  }
  return newText;
};



function dataReplaceCollection(htmlInstance,collection){
  let temp;
  $.each(collection, function(key, value){
    if (!temp){
      temp = dataReplaceAndKeepOriginal(htmlInstance, value);
    }
    else {
      temp += dataReplaceAndKeepOriginal(htmlInstance, value);
    }
  });
  return temp;
}
