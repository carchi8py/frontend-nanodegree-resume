
var bio = {
	"name" : "Chris Archibald",
	"role" : "Software Developer",
	"contacts " : {
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
			"dates" : "2013-Present"
		},
		{
			"employer" : "NetApp",
			"title" : "MTS 2",
			"location" : "Sunnyvale",
			"dates" : "2010-2013"
		},
		{
			"employer" : "NetApp",
			"title" : "MTS 1",
			"location" : "Sunnyvale",
			"dates" : "2008-2010"
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

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	formattedJob = formattedJob + HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(formattedJob);
}

