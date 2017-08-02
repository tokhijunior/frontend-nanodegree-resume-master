 var bio = {
     "name": "tokhi junior",
     "role": "Front-End developer",
     "contacts": {
         "mobile": "01113962169",
         "email": "mahmodeltokhi@yahoo.com",
         "github": "https://github.com/tokhijunior",
         "location": "cairo,egypt"
     },
     "welcomeMessage": "Hey there! let's see my resume",
     "skills": ["photoshop", "reading", "html", "css"],
     "biopic": "images/fry.jpg"
 };
 /*-------------------------------------*/

 var education = {
     "schools": [{
             "name": "elnokrashy",
             "location": "cairo",
             "degree": "master",
             "majors": ["doctor"],
             "dates": "2010",
             "url": "www.elnokrashy.com"
         },
         {
             "name": "eman",
             "location": "tgamo3",
             "degree": "bachalorya",
             "majors": ["engnieer"],
             "dates": "2013",
             "url": "www.eman.com"
         }
     ],
     "onlineCourses": [{
         "title": "udacity",
         "school": "java script course",
         "dates": "2017",
         "url": "www.google.com",
     }]
 };
 /*-------------------------------------*/

 var work = {
     "jobs": [{
             "employer": "mahmoud",
             "title": "Course Developer",
             "location": "cair, egypt",
             "dates": "septemper 2015",
             "description": "learn students to be genious"
         },
         {
             "employer": "mostafa",
             "title": "Software Engineer",
             "location": "6 october, egypt",
             "dates": "jan 2016- october 2012",
             "description": "who build a software to help people to interact with things."
         }
     ],
 };
 /*-------------------------------------*/

 var projects = {
     "projects": [{
         "title": "snake",
         "dates": "2013",
         "description": "a game that eat cheese",
         "images": ["images/197x148.gif", "images/197x148.gif"]
     }]
 };
 bio.display = function() {
     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     $("#header").prepend(formattedRole);
     $("#header").prepend(formattedName);

     var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     $("#topContacts").append(formattedmobile);

     var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
     $("#topContacts").append(formattedemail);

     var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     $("#topContacts").append(formattedGithub);

     var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
     $("#topContacts").append(formattedlocation);

     var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
     $("#header").append(formattedbioPic);

     var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     $("#header").append(formattedMessage);

     if (bio.skills.length > 0) {
         $("#header").append(HTMLskillsStart);
         for (var skill=0;skill<bio.skills.length;skill++) {
             var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
             $("#skills").append(formattedSkills);
         }
     }
      formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     $("#footerContacts").append(formattedmobile);

      formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
     $("#footerContacts").append(formattedemail);

      formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     $("#footerContacts").append(formattedGithub);

      formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
     $("#footerContacts").append(formattedlocation);

 };
 bio.display();

 work.display = function() {
     for (var job=0; job<work.jobs.length;job++) {
         $("#workExperience").append(HTMLworkStart);

         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

         var formattedEmployerTitle = formattedEmployer + formattedTitle;

         $(".work-entry:last").append(formattedEmployerTitle);

         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
         $(".work-entry:last").append(formattedDates);

         var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
         $(".work-entry:last").append(formattedlocation);

         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
         $(".work-entry:last").append(formattedDescription);

     }
 };
 work.display();



 projects.display = function() {
     for (var project =0;project<projects.projects.length;project++) {
         $("#projects").append(HTMLprojectStart);

         var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
         $(".project-entry:last").append(formattedTitle);

         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
         $(".project-entry:last").append(formattedDates);

         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
         $(".project-entry:last").append(formattedDescription);

         if (projects.projects[project].images.length > 0) {
             for (var image=0 ;image<projects.projects[project].images.length;image++) {
                 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                 $(".project-entry:last").append(formattedImage);
             }
         }
     }
 };
 projects.display();


 education.display = function() {
     for (var i = 0; i < education.schools.length; i++) {
         $("#education").append(HTMLschoolStart);
         var formattedname = HTMLschoolName.replace("%data%", education.schools[i].name);

         var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
         var formattedtitle = formattedname + formatteddegree;
         $(".education-entry:last").append(formattedtitle);

         var formatteddates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
         $(".education-entry:last").append(formatteddates);

         var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
         $(".education-entry:last").append(formattedmajor);

         formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
         $(".education-entry:last").append(formattedlocation);
     }
     for (i = 0; i < education.onlineCourses.length; i++) {
         $(".education-entry:last").append(HTMLonlineClasses);
         var formattedscname = HTMLschoolName.replace("%data%", education.onlineCourses[i].school);
         var formattedschool = HTMLschoolDegree.replace("%data%", education.onlineCourses[i].title);

         var formattedsctitle = formattedscname + formattedschool;
         $(".education-entry:last").append(formattedsctitle);

         var formattedscdates = HTMLschoolDates.replace("%data%", education.onlineCourses[i].dates);
         $(".education-entry:last").append(formattedscdates);

         var formattedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
         $(".education-entry:last").append(formattedurl);
     }
 };
 education.display();



 $("#mapDiv").append(googleMap);

 $(document).click(function(loc) {
     var x = loc.pageX;
     var y = loc.pageY;

     logClicks(x, y);
 });