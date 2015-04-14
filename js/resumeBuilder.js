
var bio = {
	"name" : "Chris Archibald",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "650-504-5125",
		"email" : "carchi8py@gmail.com",
		"github" : "carchi8py",
		"twitter" : "ogrebears",
		"location" : "Palo Alto, CA"
	},
	"welcomeMessage" : "This is my welcomeMessage",
	"skills" : [
		"Python",
		"swift",
		"World Domination",
		"ice cream"
	],
	"bioPic" : "images/fry.jpg" 
}

var education = {
	"schools" : [
		{
			"name" : "San Jose State University",
			"location" : "San Jose, CA",
			"degree" : "BS",
			"major" : ["Computer Science"],
			"dates" : "2008",
			"url" : "sjsu.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Web Developer NanoDegree",
			"school" : "Udacity",
			"date" :  "2015",
			"url" : "udacity.com"
		}, 
		{
			"title" : "IOS swift Developer NanoDegree",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "udacity.com"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "NetApp",
			"title" : "MTS 3",
			"location" : "Sunnyvale, CA",
			"dates" : "2013-Present",
			"description" : "I did stuff"
		},
		{
			"employer" : "NetApp",
			"title" : "MTS 2",
			"location" : "Sunnyvale, CA",
			"dates" : "2010-2013",
			"description" : "I did more stuff"
		},
		{
			"employer" : "NetApp",
			"title" : "MTS 1",
			"location" : "Sunnyvale, CA",
			"dates" : "2008-2010",
			"description" : "I did hella stuff"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "project 1",
			"Dates" : "somedate",
			"description" : "This was a project",
			"images" : ["images/fry.jpg"]
		},
		{
			"title" : "project 2",
			"Dates" : "somedate",
			"description" : "This was a project",
			"images" : ["images/fry.jpg"]
		}
	]
}

bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	
	$("#header").prepend(formattedName + formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", formattedMobile + formattedEmail + formattedGithub + formattedBlog + formattedLocation);

	$("#topContacts").append(formattedContactGeneric);
	
	// Add welcome message
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	
	$("#header").append(formattedWelcomeMsg);


	// Add picture
	var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);

	$("#header").append(formattedPicture);



	// Add skills
	$("#header").append(HTMLskillsStart);
	
	for (i = 0; i < bio.skills.length; i++) {		
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}


	// Add footer
	$("#footerContacts").append(formattedContactGeneric);
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription);

	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].Dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			console.log(projects.projects[project].images.length);
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {
	// Display schools
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	
		$(".education-entry:last").append(formattedName + formattedDegree + formattedDate + formattedLocation + "<br>");

	}

	// Display online courses
	$(".education-entry:last").append(HTMLonlineClasses);		
	for (var course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		//var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedTitle + formattedSchool + formattedDate + "<br>");
	}
		
}


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
