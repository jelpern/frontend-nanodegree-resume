var bio = 
	{"name": "Jordan Elpern-Waxman",
	 "role": "Entrepreneur",
	 "email": "jelpern@gmail.com",
	 "pictureUrl": "images/headshot.jpeg",
	 "message": "Thanks for looking at my resume.",
	 "skills": "Javascript"}

var work = {};
work.current = {"title": "Lead, Project WiredXchange",
				"employer": "WiredScore",
				"yearsWorked": "2015-present",
				"city": "New York"};

var education = {};
education["last"] = {"name": "Wharton",
					"years": "2007-2009",
					"city": "Philadelphia"};

$("#main").append(bio.name);
$("#main").append("<br>");

$("#main").append(work["current"]["title"]);
$("#main").append("<br>");
$("#main").append(education.last.name);
$("#main").append("<br>");