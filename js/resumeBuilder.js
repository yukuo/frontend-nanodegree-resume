/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Create bio object
var bio = {
  "name": "Kuo Yu",
  "role": "Product",
  "contacts": {
    mobile: "+65 98596158",
    email: "yukuo.yu@gmail.com",
    github: "yukuo",
    twitter: "yukuo_yu",
    location: "Singapore"
  },
  "welcomeMessage": "Hello World!",
  "biopic": "images/fry.jpg",
  "skills": ["Product Lifecycle", "Scrum", "Java", "AB Testing", "Product Analytics"]
};


//Display bio object data into HTML
bio.display = function() {
  //Insert bio object data into HTML
  var myName = HTMLheaderName.replace("%data%", bio.name);
  var myRole = HTMLheaderRole.replace("%data%", bio.role);
  var myMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var myPic = HTMLbioPic.replace("%data%", bio.biopic);
  var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var myTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  //Need to convert skills to HTMLskills
  $("#header").prepend(myRole);
  $("#header").prepend(myName);
  $("#header").append(myMessage, myPic);
  $("#topContacts").append(myMobile, myEmail, myGithub, myTwitter, myLocation);

  //Add contact information to footer
  $("#footerContacts").append(myMobile, myEmail, myGithub, myTwitter, myLocation);

  //Check if skills have value, if so, display each value in skills
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach (function(skill) {
      var mySkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(mySkill);
    }
    );
  }
};



//Create education object
var education = {
  "schools": [
    {
      "name": "INSEAD",
      "location": "Singapore",
      "degree": "Master",
      "majors": ["MBA"],
      "dates": "2012",
      "url": "https://www.insead.edu/"
    },
    {
      "name": "National University of Singapore",
      "location": "Singapore",
      "degree": "Master",
      "majors": ["Information Systems"],
      "dates": "2007",
      "url": "https://www.comp.nus.edu.sg/about/depts/cs/"
    },
    {
      "name": "National University of Singapore",
      "location": "Singapore",
      "degree": "Bachelor",
      "majors": ["Computer Science"],
      "dates": "2005",
      "url": "https://www.comp.nus.edu.sg/about/depts/cs/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Udacity Frontend Development Nanodegree Course",
      "school": "Udacity",
      "dates": "2017",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};


//Display education object content to HTML
education.display = function() {
  //Display school information
  education.schools.forEach( function(school) {
    $("#education").append(HTMLschoolStart);
    var schoolName = HTMLschoolName.replace("%data%", school.name);
    var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry:last").append(schoolName + schoolDegree);

    var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(schoolDates);

    var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(schoolLocation);

    school.majors.forEach(function(major) {
      var schoolMajor = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry:last").append(schoolMajor);
    });
  });

  //Display online course information
  education.onlineCourses.forEach(function(course) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    var courseTitle = HTMLonlineTitle.replace("%data%", course.title);
    var courseSchool = HTMLonlineSchool.replace("%data%", course.school);
    $(".education-entry:last").append(courseTitle + courseSchool);

    var courseDates = HTMLonlineDates.replace("%data%", course.dates);
    $(".education-entry:last").append(courseDates);

    var courseURL = HTMLonlineURL.replace("%data%", course.url);
    $(".education-entry:last").append(courseURL);
  });
};



//Create work object
var work = {
  "jobs": [
    {
      "employer": "PayPal",
      "title": "Senior Manager Web Experiments",
      "location": "Singapore",
      "dates": "2017 to Present",
      "description": "Managing PayPal.com web experiments for 14 APAC countries"
    },
    {
      "employer": "WalmartLabs",
      "title": "Senior Product Manager",
      "location": "Sunnyvale, CA",
      "dates": "2013 to 2016",
      "description": "Product Manager for Walmart.com Search, Browse, and Category pages experience"
    },
    {
      "employer": "Singapore Airlines",
      "title": "Senior Business Analyst",
      "location": "Singapore",
      "dates": "2008 to 2012",
      "description": "Product Manager for Singapore Airlines Mobile App, Content Pages and Content Management System, and site transactional features"
    }
  ]
};

//Display Work Experience to HTML
work.display = function() {
  work.jobs.forEach ( function(job) {
    $("#workExperience").append(HTMLworkStart);
    var myJobEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var myJobTitle = HTMLworkTitle.replace("%data%", job.title);
    $(".work-entry:last").append(myJobEmployer + myJobTitle);

    var myJobDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(myJobDates);

    var myJobLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(myJobLocation);

    var myJobDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(myJobDescription);
  });
};



//Create projects object
var projects = {
  "projects": [
    {
      "title": "Udacity Frontend Development Course",
      "dates": "2017",
      "description": "Learning how to code a website",
      "images": ["images/197x148.gif"]
    }
  ]
};

//Display project information to HTML
projects.display = function() {
  projects.projects.forEach( function(project) {
    $("#projects").append(HTMLprojectStart);

    var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(projectTitle);

    var projectDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(projectDates);

    var projectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(projectDescription);

    project.images.forEach(function() {
      var projectImages = HTMLprojectImage.replace("%data%", project.images);
      $(".project-entry:last").append(projectImages);
    });
  });
};


bio.display();
education.display();
work.display();
projects.display();


//Add Google Map
$("#mapDiv").append(googleMap);
