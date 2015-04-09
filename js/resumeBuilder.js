
var bio  = {
	"name" : "Chris Archibald",
	"role" : "Software Engineer",
	"contact" : {
		"email" : "carchi8py@gmail.com",
		"github" : "carchi8py",
		"location" : "Silicon Valley"
	},
	"picture" : "images/me.jpg",
	"message" : "This is a message",
	"skills" : ["Python", "World Domination", "Java", "Swift"],
	"bioPic" : "images/fry.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.message);
var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[0]);
var formattedHTMLskills1 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedHTMLskills2 = HTMLskills.replace("%data%", bio.skills[2]);
var formattedHTMLskills3 = HTMLskills.replace("%data%", bio.skills[3]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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