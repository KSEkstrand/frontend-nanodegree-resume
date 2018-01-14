/*
Build the page
*/

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
  biopic: "I'm Kyle",
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

  }
}
sectionHolder.push(jobs);

const projects = {
  projectList: {
    project1:{
      title: "this project",
      dates: "12-12-1912",
      description: "this project",
      images: ""
    },
    project2:{
      title: "that project",
      dates: "13-13-1913",
      description: "that project",
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

function dataReplace(inputHtml, value) {
  dataReplaceWithOptionalSelector(inputHtml, value, null)
}

function dataReplaceWithOptionalSelector(inputHtml, value, selector){
  //null check, ES6 null check
  if(selector && (!inputHtml || !value || value === null || inputHtml === null))
    console.log("null!");

  let oldText = inputHtml;
  let newText;
  if(!selector){
    newText = oldText.replace('%data%',value);
  }
  else{
    newText = oldText.replace(selector,value);
  }
  return newText;
}

function dataReplaceAndKeepOriginal(inputHTML, value){
  var text = inputHTML;
  text = text.replace('%data%',value);
  return text;
}

function dataReplaceCollection(htmlInstance,collection){
  let temp;
  $.each(collection, function(key, value){
    if (!temp){
      temp = dataReplaceAndKeepOriginal(htmlInstance, value);
      console.log(value);
    }
    else {
      temp += dataReplaceAndKeepOriginal(htmlInstance, value);
      console.log(value);
    }
  });
  return temp;
}

function prependResumeElement(pageId, element){
  $(pageId).prepend(element);
}

function appendResumeElement(pageId, element){
  $(pageId).append(element);
}
