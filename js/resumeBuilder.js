
ar bio = {
	"name" : "Chandra Mallipeddi",
	"role" : "Software Developer",
	"contacts": {
		"mobile": "+1 (636) 224-5008",
		"email": "hr.srichandra@gmail.com",
		"alt_email": "smallipeddi@google.com",
		"github": "mchandrra",
		"twitter": "@cool_chandrra",
		"location": "Sunnyvale"
	},
	"welcomeMessage": "Welcome here. Enjoy your stay.",
	"skills": [
"awesomeness", "programming", "Astronomy", "Cooking"
	],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [{
		"name": "Missouri University of Science & Technology",
		"location": "Rolla, MO",
		"degree": "Masters",
		"majors": "Comp Sci",
		"Year": 2015,
		"url": "http://www.mst.edu/"
	}, {
		"name": "Jawaharlal Nehru Technological University",
		"location": "Hyderabad, India",
		"degree": "Bachelors",
		"majors": "Comp Sci"
	}],
	"onlineCourses": [{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804"
		}

	]
}

var work = {
	"jobs": [
	{
		"employer": "Google",
		"title": "Software Engineer/Mobile Application Developer",
		"dates": "September 2014 - Present",
		"description": "Project Abacus"

	},
	{
		"employer": "Google",
		"title": "Software Engineer/Mobile Application Developer",
		"dates": "September 2014 - Present",
		"description": "Project Abacus"

	}
	]
}

var projects = {
	"projects": [
	{
		"title": "Project Abacus",
		"dates": "Sep 2014 - Sep 2015",
		"description": "Project Abacus",
		"images": [
		"https://",
		"https://"
		]
	}
	]
}

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}


/*
$("#main").append("Chandra Mallipeddi ");
var awesomeThoughts = "I am Chandra and I am AWESOME!";
console.log(awesomeThoughts);
var email = "smallipeddi@google.com";
var newEmail = email.replace("google", "live");
console.log(email);
console.log(newEmail);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);


var name = "Chandra Mallipeddi";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness", "programming", "Android", "Java"];
$("#main").append(skills);
//$("#main").append(skills[0]);
console.log(skills.length);
*/
/*
var bio = {
	"name" : "Chandra Mallipeddi",
	"role" : "Software Developer",
	"contacts": {
		"mobile": "+1 (636) 224-5008",
		"email": "hr.srichandra@gmail.com",
		"alt_email": "smallipeddi@google.com",
		"github": "mchandrra",
		"twitter": "@cool_chandrra",
		"location": "Sunnyvale"
	},
	"welcomeMessage": "Welcome here. Enjoy your stay.",
	"skills": [
"awesomeness", "programming", "Astronomy"
	],
	"bioPic": "images/fry.jpg"
}
//$("#main").append(bio.name);
console.log(bio);
*/
/*
var work = {};
work.position = "Software Engineer";
work.employer = "Google";
work.city = "Mountain View, California, US";
work.years = 1.3;

var education = {};
education["name"] = "Missouri University of Science & Technology";
education["years"] = "2013-2015"
education["city"] = "Rolla, Missouri, US"

$("#main").append(work["position"]);
$("#main").append(education.name);
*/
/*
var education = {
	"schools": [{
		"name": "Missouri University of Science & Technology",
		"location": "Rolla, MO",
		"degree": "Masters",
		"majors": "Comp Sci",
		"Year": 2015,
		"url": "http://www.mst.edu/"
	}, {
		"name": "Jawaharlal Nehru Technological University",
		"location": "Hyderabad, India",
		"degree": "Bachelors",
		"majors": "Comp Sci"
	}],
	"onlineCourses": [{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804"
		}

	]
}
*/