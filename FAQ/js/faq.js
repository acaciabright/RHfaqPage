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

var addSections = function(condition, questionClass, section, number) {
	if($(condition).length) {
		var questionElements = document.getElementsByClassName(questionClass);
		var answerElements = document.getElementsByClassName('answer');
		var screenshotElements = document.getElementsByClassName('revealImg');
		var screenshotElements2 = document.getElementsByClassName('modalImg');
		var videoElements = document.getElementsByClassName('video');
		var divElements = document.getElementsByClassName('i');
		var data = accordion.getObjects(section);
		var videoButtonElements = document.getElementsByClassName('videoButton');
		var revealDiv = document.getElementsByClassName('revealDiv');

		var i = 0;
		for(i; i < number; i++) {
			var question = data[i];
			var answer = data[i];
			var screenshot = data[i];
			var screenshot2 = data[i];
			var video = data[i];

			var elementQ = questionElements[i]; 
			var elementA = answerElements[i];
			var elementS = screenshotElements[i];
			var elementS2 = screenshotElements2[i];
			var elementV = videoElements[i];
			var elementI = divElements[i];
			var elementVB = videoButtonElements[i];
			var elementRD = revealDiv[i];

			$(elementI).addClass('paddingI');
			$(elementQ).before($(elementI));
			$(elementQ).text(question.get('question')).addClass("q");
			$(elementA).text(answer.get('answer')).addClass("a");

			if((screenshot.get('screenShot')) !== null) {
				$(elementS).attr({
					'src': screenshot.get('screenShot')
				}).addClass("s");
			}
			else {
				$(elementS).attr({
					'src': '#'
				}).css({
					'display': 'none'
				});
			}
			if((screenshot2.get('screenShot')) !== null) {
				$(elementS2).attr({
					'src': screenshot2.get('screenShot')
				});
			}
			else {
				$(elementS2).attr({
					'src': '#'
				}).css({
					'display': 'none'
				});
			}
			if((video.get('videoURL')) !== null) {
				$(elementV).attr({
					'src': video.get('videoURL')
				}).addClass("v");
			}
			else {
				$(elementV).attr({
					'src': '#'
				});
				$(elementVB).hide();
			}
			if((screenshot.get('screenShot')) === null && 
			(video.get('videoURL')) === null ) {
				$(elementS).hide();
				$(elementV).hide();
				$(elementRD).hide();
			}
			else {
				$(elementS).show();
				$(elementV).show();
				$(elementRD).show();
			}
		}
	}
}
$.when.apply(null, _deferreds).done(function() { //executes code after the response
addSections('.neighborhoodQ', 'neighborhoodQ', 'neighborhood', 7);
addSections('.elevationQ', 'elevationQ', 'elevation', 8);
addSections('.floorplanQ', 'floorplanQ', 'floorplan', 5);
addSections('.colortoolQ', 'colortoolQ', 'colortool', 14);
addSections('.siteplanQ', 'siteplanQ', 'siteplan', 8);
addSections('.colorschemesQ', 'colorschemesQ', 'colorschemes', 5);
});

$(document).foundation();









