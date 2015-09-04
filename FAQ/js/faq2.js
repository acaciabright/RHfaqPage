/////////////////////////////////////////////////////////////////
///////////OBJECT CONSTRUCTOR AND PROTOTYPE SECTION//////////////
/////////////////////////////////////////////////////////////////

function _Section(data) {
	this.question = data.prop('question');
	this.answer = data.prop('answer');
	this.screenShot = data.prop('screenShot');
	this.videoURL = data.prop('videoURL');
}
_Section.prototype.get = function(prop) {
	return this[prop];
}
_Section.prototype.set = function(prop, newVal) {
	this[prop] = newVal;
}

function _Accordion() {
	this.neighborhood = [];
	this.elevation = [];
	this.floorplan = [];
	this.colortool = [];
	this.siteplan = [];
	this.colorschemes = [];
}
_Accordion.prototype.addObject = function(object, dest) {
	var array = this[dest];
	array.push(object);
};
_Accordion.prototype.getObjects = function(dest) {
	return this[dest];
};

/////////////////////////////////////////////////////////////////
////////////////////DATA REQUEST SECTION/////////////////////////
/////////////////////////////////////////////////////////////////

var _deferreds = [];
var accordion = new _Accordion();
var _neighborhoodArray;
var _elevationArray;
var _floorplanArray;
var _colortoolArray;
var _siteplanArray;
var _colorschemesArray;

var accordionDeferred = $.Deferred();
_deferreds.push(accordionDeferred);

var neighborhoodRequest = $.ajax({
	type: "POST",
	url: 'php/getData.php',
	data: {
		"table": "Topics",
		"sort": "question",
		"section": "NEIGHBORHOOD"
	}
});
neighborhoodRequest.done(function(data) {
	if(data.search('OK') < 0) {
		console.log('Failed somehow' + data);
	} else {
		var split = data.split("^S^P^L^I^T^");
		_neighborhoodArray = $.parseJSON(split[1]); 
		for(i in _neighborhoodArray) {
			var curAccordion = _neighborhoodArray[i];
			var neighborhoodObject = new _Section($(curAccordion));
			accordion.addObject(neighborhoodObject, 'neighborhood');
		}
	}
});
neighborhoodRequest.fail(function(data) { 
	console.log('Failed somehow' + data);
});

var elevationRequest = $.ajax({
	type: "POST",
	url: 'php/getData.php',
	data: {
		"table": "Topics",
		"sort": "question",
		"section": "ELEVATION"
	}
});
elevationRequest.done(function(data) {
	if(data.search('OK') < 0) {
		console.log('Failed somehow' + data);
	} else {
		var split = data.split("^S^P^L^I^T^");
		_elevationArray = $.parseJSON(split[1]); 
		for(i in _elevationArray) {
			var curAccordion = _elevationArray[i];
			var elevationObject = new _Section($(curAccordion));
			accordion.addObject(elevationObject, 'elevation');
		}
	}
});
elevationRequest.fail(function(data) { 
	console.log('Failed somehow' + data);
});

var floorplanRequest = $.ajax({
	type: "POST",
	url: 'php/getData.php',
	data: {
		"table": "Topics",
		"sort": "question",
		"section": "FLOORPLAN"
	}
});
floorplanRequest.done(function(data) {
	if(data.search('OK') < 0) {
		console.log('Failed somehow' + data);
	} else {
		var split = data.split("^S^P^L^I^T^");
		_floorplanArray = $.parseJSON(split[1]); 
		for(i in _floorplanArray) {
			var curAccordion = _floorplanArray[i];
			var floorplanObject = new _Section($(curAccordion));
			accordion.addObject(floorplanObject, 'floorplan');
		}
	}
});
floorplanRequest.fail(function(data) { 
	console.log('Failed somehow' + data);
});

var colortoolRequest = $.ajax({
	type: "POST",
	url: 'php/getData.php',
	data: {
		"table": "Topics",
		"sort": "question",
		"section": "COLORTOOL"
	}
});
colortoolRequest.done(function(data) {
	if(data.search('OK') < 0) {
		console.log('Failed somehow' + data);
	} else {
		var split = data.split("^S^P^L^I^T^");
		_colortoolArray = $.parseJSON(split[1]); 
		for(i in _colortoolArray) {
			var curAccordion = _colortoolArray[i];
			var colortoolObject = new _Section($(curAccordion));
			accordion.addObject(colortoolObject, 'colortool');
		}
	}
});
colortoolRequest.fail(function(data) { 
	console.log('Failed somehow' + data);
});

var siteplanRequest = $.ajax({
	type: "POST",
	url: 'php/getData.php',
	data: {
		"table": "Topics",
		"sort": "question",
		"section": "SITEPLAN"
	}
});
siteplanRequest.done(function(data) {
	if(data.search('OK') < 0) {
		console.log('Failed somehow' + data);
	} else {
		var split = data.split("^S^P^L^I^T^");
		_siteplanArray = $.parseJSON(split[1]); 
		for(i in _siteplanArray) {
			var curAccordion = _siteplanArray[i];
			var siteplanObject = new _Section($(curAccordion));
			accordion.addObject(siteplanObject, 'siteplan');
		}
	}
});
siteplanRequest.fail(function(data) { 
	console.log('Failed somehow' + data);
});

var colorschemesRequest = $.ajax({
	type: "POST",
	url: 'php/getData.php',
	data: {
		"table": "Topics",
		"sort": "question",
		"section": "COLORSCHEMES"
	}
});
colorschemesRequest.done(function(data) {
	if(data.search('OK') < 0) {
		console.log('Failed somehow' + data);
	} else {
		var split = data.split("^S^P^L^I^T^");
		_colorschemesArray = $.parseJSON(split[1]); 
		for(i in _colorschemesArray) {
			var curAccordion = _colorschemesArray[i];
			var colorschemesObject = new _Section($(curAccordion));
			accordion.addObject(colorschemesObject, 'colorschemes');
		}
		accordionDeferred.resolve();
	}
});
colorschemesRequest.fail(function(data) { 
	console.log('Failed somehow' + data);
});

/////////////////////////////////////////////////////////////////
/////////////////////////FILL PAGE SECTION///////////////////////
/////////////////////////////////////////////////////////////////

var _faq;
function _FAQ(el) {
	this.el = $(el).attr({
		'id': "main"
	});
}

var header = document.getElementsByClassName("header");
var body = $('<div>').attr({
	'class': 'body'
});
$(header).after(body);

var counter = 1;
_FAQ.prototype.addSection = function(headerText, sectionId, sectionText, entryText, panel) {
	var main = this.el;
	var sectionDiv = $('<div>').attr({
		'id': sectionId
	});
	body.append(sectionDiv);
	var header = $('<div>').addClass("subheader");
	sectionDiv.append(header);
	var section = $('<h2>').text(headerText);
	header.append(section);
	var accordionDiv = $('<div>').addClass("accordionDiv");
	sectionDiv.append(accordionDiv);
	var ul = $('<ul data-accordion>').addClass("accordion");
	accordionDiv.append(ul);

	var database = accordion.getObjects(sectionText);
	for (e in database) {
		var data = database[e];

		var questionOne = $('<li>').addClass("accordion-navigation");
		ul.append(questionOne);

		var question = $('<a>').attr({
			'href': '#' + panel + counter,
			'class': 'questionHover ' + entryText,
			'data-id': counter
		}).text(data.get('question'));
		questionOne.append(question);
		var iDiv = $('<div>').addClass("i");
		question.append(iDiv);
		var iPlus = $('<i>').addClass("fi-plus");
		iDiv.append(iPlus);
		var iMinus = $('<i>').addClass("fi-minus");
		iDiv.append(iMinus);

		var answer = $('<div>').attr({
			'id': panel + counter,
			'class': 'answer1 qContent content'
		});
		questionOne.append(answer);

		var revealDiv = $('<div>').addClass("revealDiv revealDivTwo" + counter);
		answer.append(revealDiv);
		var imgModal = $('<a>').attr({
			'href': '#',
			'data-reveal-id': 'myModal',
			'id': 'revealImg',
			'class': 'reveal',
			'style': 'outline:none'
		});
		revealDiv.append(imgModal);
		var revealImg = $('<img>').attr({
			'src': data.get('screenShot'),
			'class': 'revealImg revealImgTwo' + counter
		});
		if (data.get('screenShot') !== null) {
			imgModal.append(revealImg);
		}
		var videoModal = $('<a>').attr({
			'href': '#',
			'data-reveal-id': 'videoModal',
			'id': 'video',
			'class': 'reveal videoButton button small radius videoButtonTwo' + counter,
			'style': 'outline: none'
		}).text("VIDEO");
		if(data.get('videoURL') !== null) {
			revealDiv.append(videoModal);
		}
		var imgReveal = $('<div data-reveal>').attr({
			'id': 'myModal',
			'class': 'reveal-modal large',
			'aria-labelledby': 'modalTitle',
			'aria-hidden': 'true',
			'role': 'dialog'
		});
		if (data.get('screenShot') !== null) {
			answer.append(imgReveal);
		}
		var modalImg = $('<img>').attr({
			'src': data.get('screenShot'),
			'class': 'modalImg'
		});
		if(data.get('screenShot') != null) {
			imgReveal.append(modalImg);
		}
		var imgClose = $('<a>').attr({
			'class': 'close-reveal-modal',
			'aria-label': 'close'
		});
		imgReveal.append(imgClose);
		var imgX = $('<i>').addClass("fi-x");
		imgClose.append(imgX);

		var videoReveal = $('<div data-reveal>').attr({
			'id': 'videoModal',
			'class': 'reveal-modal large',
			'aria-labelledby': 'videoModalTitle',
			'aria-hidden': 'true',
			'role': 'dialog'
		});
		if(data.get('videoURL') !== null) {
			answer.append(videoReveal);
		}
		var videoDiv = $('<div>').addClass("flex-video widescreen vimeo");
		videoReveal.append(videoDiv);
		var video = $('<iframe allowfullscreen>').attr({
			'width': '560',
			'height': '315',
			'src': data.get('videoURL'),
			'class': 'video',
			'frameborder': '0'		
		});
		if(data.get('videoURL') !== null) {
			videoDiv.append(video);
		}
		var videoClose = $('<a>').attr({
			'class': 'close-reveal-modal',
			'aria-label': 'close'
		});
		videoReveal.append(videoClose);
		var vidX = $('<i>').addClass("fi-x");
		videoClose.append(vidX);

		var p = $('<p>').attr({
			'id': 'answerP' + counter,
			'class': 'answer answerTwo' + counter
		}).text(data.get('answer'));
		if(data.get('answer') !== null) {
			answer.append(p);
		}

		var revealImgTwo = $('.revealImgTwo' + counter);
		var videoButtonTwo = $('.videoButtonTwo' + counter);
		var revealDivTwo = $('.revealDivTwo' + counter);
		var answerId = $('#' + (panel + counter));
		if(revealImgTwo.length && videoButtonTwo.length) {
			revealDivTwo.show();
			answerId.addClass("video_image_p");
			answerId.removeClass("image_p");
			answerId.removeClass("video_p");
			answerId.removeClass("_p");
		}
		else if(revealImgTwo.length && !videoButtonTwo.length) {
			revealDivTwo.show();
			answerId.removeClass("video_image_p");
			answerId.addClass("image_p");
			answerId.removeClass("video_p");
			answerId.removeClass("_p");
		}
		else if(!revealImgTwo.length && videoButtonTwo.length) {
			revealDivTwo.show();
			answerId.removeClass("video_image_p");
			answerId.removeClass("image_p");
			answerId.addClass("video_p");
			answerId.removeClass("_p");
		}
		else if(!revealImgTwo.length && !videoButtonTwo.length) {
			revealDivTwo.hide();
			answerId.removeClass("video_image_p");
			answerId.removeClass("image_p");
			answerId.removeClass("video_p");
			answerId.addClass("_p");
		}
		else {
			revealDivTwo.show();
			answerId.removeClass("video_image_p");
			answerId.removeClass("image_p");
			answerId.removeClass("video_p");
			answerId.removeClass("_p");
		}

		//ULO = ul opening tag
		//ULc = ul closing tag
		//LIO = li opening tag
		//LIC = li closing tag
		var answerP = data.get('answer');
		var answerTwo = document.getElementById("answerP" + counter);
		if($(answerTwo).text().indexOf('LINEBREAK') >= 0) {
			var res = answerTwo.innerHTML.replace(/LINEBREAK/g, "<br>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('ULO') >= 0) {
			var res = answerTwo.innerHTML.replace(/ULO/g, "<ul>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('ULC') >= 0) {
			var res = answerTwo.innerHTML.replace(/ULC/g, "</ul>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('LIO') >= 0) {
			var res = answerTwo.innerHTML.replace(/LIO/g, "<li>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('LIC') >= 0) {
			var res = answerTwo.innerHTML.replace(/LIC/g, "</li>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('Note:') >= 0) {
			var res = answerTwo.innerHTML.replace(/Note:/g, "<b>Note:</b>");
			answerTwo.innerHTML = res;
		}
		counter++;
	}
};

$.when.apply(null, _deferreds).done(function() { //executes code after the response
	_faq = new _FAQ('<div>');
	$('body').append(_faq.el);
	_faq.addSection("Neighborhood FAQs", 'Neighborhood', 'neighborhood', 'neighborhood-entry', 'panel1a');
	_faq.addSection("Elevation FAQs", 'Elevation', 'elevation', 'elevation-entry', 'panel1b');
	_faq.addSection("Floorplan FAQs", 'Floorplan', 'floorplan', 'floorplan-entry', 'panel1c');
	_faq.addSection("Color Tool FAQs", 'Colortool', 'colortool', 'colortool-entry', 'panel1d');
	_faq.addSection("Site Plan FAQs", 'Siteplan', 'siteplan', 'siteplan-entry', 'panel1e');
	_faq.addSection("Color Schemes FAQs", 'Colorschemes', 'colorschemes', 'colorschemes-entry', 'panel1f');
});

/////////////////////////////////////////////////////////////////
//////////////////////FOUNDATION SECTION/////////////////////////
/////////////////////////////////////////////////////////////////

//removes Foundation's specified behavior for dropdowns on small screens(mobile)
var smallDropdown = function() {
  Foundation.libs.dropdown['small'] = function() {
    return false;
  };
}
smallDropdown();

$(document).foundation();
