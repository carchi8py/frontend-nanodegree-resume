
var name = "Chris Archibald";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Software Engineer"
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);