
var bio = {
	"name" : "Chris Archibald",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "650-504-5125",
		"email" : "carchi8py@gmail.com",
		"github" : "carchi8py",
		"twitter" : "ogrebears",
		"location" : "Sunnyvale"
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
			"location" : "San Jose",
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
			"location" : "Sunnyvale",
			"dates" : "2013-Present",
			"description" : "I did stuff"
		},
		{
			"employer" : "NetApp",
			"title" : "MTS 2",
			"location" : "Sunnyvale",
			"dates" : "2010-2013",
			"description" : "I did more stuff"
		},
		{
			"employer" : "NetApp",
			"title" : "MTS 1",
			"location" : "Sunnyvale",
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
			"images" : "images/fry.jpg"
		},
		{
			"title" : "project 2",
			"Dates" : "somedate",
			"description" : "This was a project",
			"images" : "images/fry.jpg"
		}
	]
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedJob = formattedJob + HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedJob);

		var formattedData = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedData);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
 var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedGithub);
 $("#topContacts").append(formattedLocation);
 
 $("#header").append(formattedBioPic);
 $("#header").append(formattedHTMLwelcomeMsg);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var forattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(forattedSkill);
	forattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(forattedSkill);
	forattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(forattedSkill);
	forattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(forattedSkill);

} else {
	console.log("Something in Skill's failed");
}






displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y)
});

function inName(name) {
	console.log(name);
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

