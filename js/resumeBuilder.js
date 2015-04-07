
var name = "Chris Archibald";
var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append(formattedName);

var role = "Software Engineer"
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").append(formattedRole);