
var bio  = {
	"name" : "Chris Archibald",
	"role" : "Software Engineer",
	"contact" : {
		"mobile"  : "650-504-5125",
		"email" : "carchi8py@gmail.com",
		"github" : "carchi8py",
		"location" : "Silicon Valley"
	},
	"picture" : "images/me.jpg",
	"message" : "This is a message",
	"skills" : ["Python", "World Domination", "Java", "Swift"],
	"bioPic" : "images/fry.jpg"
}

var work = {};
work.employer = "NetApp";
work.title = "MTS 3";
work.years = "2008-2015";
work.city = "Sunnyvale";
work.Description = "I did stuff";

var education = {
	"schools" : [
		{
			"name" : "San Jose State University",
			"location" : "San Jose",
			"degree" : "BS",
			"major" : "Computer Science",
			"minor" : "Math",
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


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.message);
var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[0]);
var formattedHTMLskills1 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedHTMLskills2 = HTMLskills.replace("%data%", bio.skills[2]);
var formattedHTMLskills3 = HTMLskills.replace("%data%", bio.skills[3]);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
var formattedDates = HTMLworkDates.replace("%data%", work.years);
var formattedCity = HTMLworkLocation.replace("%data%", work.city);
var formattedDescription = HTMLworkDescription.replace("%data%", work.Description);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedHTMLwelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedHTMLskills);
$("#skills").append(formattedHTMLskills1);
$("#skills").append(formattedHTMLskills2);
$("#skills").append(formattedHTMLskills3);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedEmployer);
$(".work-entry").append(formattedTitle);
$(".work-entry").append(formattedDates);
$(".work-entry").append(formattedCity);
$(".work-entry").append(formattedDescription);