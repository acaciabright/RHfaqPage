/////////////////////////////////////////////////////////////////
///////////OBJECT CONSTRUCTOR AND PROTOTYPE SECTION//////////////
/////////////////////////////////////////////////////////////////

function _Section(data) {
	this.question = data.prop('question');
	this.answer = data.prop('answer');
	this.screenShot = data.prop('screenShot');
	this.videoURL = data.prop('videoURL');
	this.videoURL2 = data.prop('videoURL2');
	this.steps = [];

	var stepsArray = data.prop('steps');
	for(i in stepsArray) {
		var curStep = stepsArray[i];
		var stepObject = new _Step($(curStep));
		this.addStep(stepObject);
	}
}

_Section.prototype.addStep = function(object) {
	var array = this.steps;
	array.push(object);
};
_Section.prototype.get = function(prop) {
	return this[prop];
}
_Section.prototype.set = function(prop, newVal) {
	this[prop] = newVal;
}

function _Accordion() {
	this.general = [];
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

function _Step(data) {
	this.topicId = data.prop('topicId');
	this.id = data.prop('id');
	this.img = data.prop('images');
	this.text = data.prop('text');
	this.stepNumber = data.prop('stepNumber');
}
_Step.prototype.get = function(prop) {
	return this[prop];
}

/////////////////////////////////////////////////////////////////
////////////////////DATA REQUEST SECTION/////////////////////////
/////////////////////////////////////////////////////////////////

var _deferreds = [];
var accordion = new _Accordion();
var _generalArray;
var _neighborhoodArray;
var _elevationArray;
var _floorplanArray;
var _colortoolArray;
var _siteplanArray;
var _colorschemesArray;

var accordionDeferred = $.Deferred();
_deferreds.push(accordionDeferred);

var generalRequest = $.ajax({
	type: "POST",
	url: 'php/getData.php',
	data: {
		"table": "Topics",
		"sort": "question",
		"section": "GENERAL"
	}
});
generalRequest.done(function(data) {
	if(data.search('OK') < 0) {
		console.log('Failed somehow' + data);
	} else {
		var split = data.split("^S^P^L^I^T^");
		_generalArray = $.parseJSON(split[1]); 
		for(i in _generalArray) {
			var curAccordion = _generalArray[i];
			var generalObject = new _Section($(curAccordion));
			accordion.addObject(generalObject, 'general');
		}
	}
});
generalRequest.fail(function(data) { 
	console.log('Failed somehow' + data);
});

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

var mainSection = document.getElementsByClassName("main-section");
var header = document.getElementsByClassName("header");
var push = $('<div>').addClass("push");
$(body2).append(push);
var body = $('<div>').attr({
	'class': 'body body1'
});
var body2 = $('<div>').attr({
	'class': 'body body2'
});
$(mainSection).append(body);
$(header).after(body2);

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

		var div = $('<div>').attr({
			'id': 'container',
			'class': 'container containerTwo' + counter
		});
		answer.append(div);

		if(data.get('screenShot') !== null || data.get('videoURL') !== null) {
			var revealDiv = $('<div>').addClass("revealDiv revealDivTwo" + counter);
			div.append(revealDiv);
			var imgModal = $('<a>').attr({
				'href': '#',
				'data-reveal-id': 'myModal' + counter,
				'id': 'revealImg',
				'class': 'reveal',
				'style': 'outline:none'
			});
			revealDiv.append(imgModal);
			var revealImg = $('<img>').attr({
				'src': 'images/screenshot2.png',
				'class': 'revealImg revealImgTwo' + counter
			});
			if (data.get('screenShot') !== null) {
				imgModal.append(revealImg);
			}
			var videoModal = $('<a>').attr({
				'href': '#',
				'data-reveal-id': 'videoModal'  + counter,
				'id': 'video',
				'class': 'reveal videoButton button small radius videoButtonTwo' + counter,
				'style': 'outline: none'
			}).text("VIDEO");
			if(data.get('videoURL') !== null) {
				revealDiv.append(videoModal);
			}
			var imgReveal = $('<div data-reveal>').attr({
				'id': 'myModal' + counter,
				'class': 'reveal-modal imgModal xlarge',
				'aria-labelledby': 'myModalTitle',
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
			if(data.get('screenShot') !== null) {
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
				'id': 'videoModal'  + counter,
				'class': 'reveal-modal videoModal xlarge',
				'aria-labelledby': 'videoModalTitle',
				'aria-hidden': 'true',
				'role': 'dialog'
			});
			if(data.get('videoURL') !== null) {
				answer.append(videoReveal);
			}
			var videoDiv = $('<div>').addClass("flex-video widescreen vimeo");
			videoReveal.append(videoDiv);
			var video = $('<video controls allowfullscreen>').attr({
				'width': '100%',
				'height': '100%',
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
		}

		var p = $('<p>').attr({
			'id': 'answerP' + counter,
			'class': 'answer answerTwo' + counter
		}).text(data.get('answer'));
		if(data.get('answer') !== null && data.get('answer') != '') {
			answer.append(p);
		}

		var counter2 = 1;
		var steps = data.get('steps');
		if(steps.length > 0 && data.get('answer') == null) {
			var revealDiv = $('<div>').addClass("revealDiv revealDivTwo" + counter);
			div.append(revealDiv);
			for(i in steps) {
				var step = steps[i];
				var imgModal = $('<a>').attr({
					'href': '#',
					'data-reveal-id': 'myModal2' + counter2 + counter,
					'id': 'revealImg',
					'class': 'reveal',
					'style': 'outline:none'
				});
				revealDiv.append(imgModal);
				var revealImg = $('<img>').attr({
					'src': step.get('img'),
					'class': 'revealImg revealImgTwo' + counter
				});
				if(step.get('img') !== null) {
					imgModal.append(revealImg);
				}
				var imgReveal = $('<div data-reveal>').attr({
					'id': 'myModal2' + counter2 + counter,
					'class': 'reveal-modal imgModal xlarge',
					'aria-labelledby': 'myModalTitle',
					'aria-hidden': 'true',
					'role': 'dialog'
				});
				if (step.get('img') !== null) {
					revealDiv.append(imgReveal);
				}
				var modalImg = $('<img>').attr({
					'src': step.get('img'),
					'class': 'modalImg'
				});
				if(step.get('img') !== null) {
					imgReveal.append(modalImg);
				}
				var imgClose = $('<a>').attr({
					'class': 'close-reveal-modal',
					'aria-label': 'close'
				});
				imgReveal.append(imgClose);
				var imgX = $('<i>').addClass("fi-x");
				imgClose.append(imgX);

				var p = $('<p>').attr({
					'id': 'answerP' + counter,
					'class': 'answer answerTwo' + counter
				}).text(step.get('text'));
				if(step.get('text') !== null && step.get('text') != '') {
					answer.append(p);
				}
				var answerId = $('#' + (panel + counter));
				if($('.revealDivTwo' + counter).length > 0 && $('.revealImgTwo' + counter).length > 1) {
					$(answerId).css({
						'width': '100%'
					});
					$('.revealDivTwo' + counter).css({
						'width': '150px'
					});
					$('.revealImgTwo' + counter).css({
						'height': '80px',
						'width': '80px',
						'margin-right': '10px !important'
					});
				}

				counter2++;
			}
		}

		var revealImgTwo = $('.revealImgTwo' + counter);
		var videoButtonTwo = $('.videoButtonTwo' + counter);
		var revealDivTwo = $('.revealDivTwo' + counter);
		var answerId = $('#' + (panel + counter));
		if(revealImgTwo.length > 1) {
			$("ul").css({
				'margin-left': '195px !important'
			});
		}
		else {
			$("ul").css({
				'margin-left': '135px !important'
			});
		}

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
		//•ul• = ul tags
		//•li• = li tags
		var answerTwo = document.getElementById("answerP" + counter);
		if($(answerTwo).text().indexOf('•br•') >= 0) {
			var res = answerTwo.innerHTML.replace(/•br•/g, "<br>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('•ul•') >= 0) {
			var res = answerTwo.innerHTML.replace(/•ul•/g, "<ul>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('•ol•') >= 0) {
			var res = answerTwo.innerHTML.replace(/•ol•/g, "<ol>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('•li•') >= 0) {
			var res = answerTwo.innerHTML.replace(/•li•/g, "<li>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('Note:') >= 0) {
			var res = answerTwo.innerHTML.replace(/Note:/g, "<b>Note:</b>");
			answerTwo.innerHTML = res;
		}
		counter++;
	}
};

_FAQ.prototype.addSection2 = function(headerText, sectionId, sectionText, entryText, panel) {
	var main = this.el;
	var sectionDiv = $('<div>').attr({
		'id': sectionId
	});
	body2.append(sectionDiv);
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

		var div = $('<div>').attr({
			'id': 'container',
			'class': 'container containerTwo' + counter
		});
		answer.append(div);

		if(data.get('screenShot') !== null || data.get('videoURL') !== null) {
			var revealDiv = $('<div>').addClass("revealDiv revealDivTwo" + counter);
			div.append(revealDiv);
			var imgModal = $('<a>').attr({
				'href': '#',
				'data-reveal-id': 'myModal' + counter,
				'id': 'revealImg',
				'class': 'reveal',
				'style': 'outline:none'
			});
			revealDiv.append(imgModal);
			var revealImg = $('<img>').attr({
				'src': 'images/screenshot2.png',
				'class': 'revealImg revealImgTwo' + counter
			});
			if(data.get('screenShot') !== null) {
				imgModal.append(revealImg);
			}
			var videoModal = $('<a>').attr({
				'href': '#',
				'data-reveal-id': 'videoModal' + counter,
				'id': 'video',
				'class': 'reveal videoButton button small radius videoButtonTwo' + counter,
				'style': 'outline: none'
			}).text("VIDEO");
			if(data.get('videoURL') !== null) {
				revealDiv.append(videoModal);
			}
			var imgReveal = $('<div data-reveal>').attr({
				'id': 'myModal' + counter,
				'class': 'reveal-modal imgModal xlarge',
				'aria-labelledby': 'myModalTitle',
				'aria-hidden': 'true',
				'role': 'dialog'
			});
			if (data.get('screenShot') !== null) {
				revealDiv.append(imgReveal);
			}
			var modalImg = $('<img>').attr({
				'src': data.get('screenShot'),
				'class': 'modalImg'
			});
			if(data.get('screenShot') !== null) {
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
				'id': 'videoModal' + counter,
				'class': 'reveal-modal videoModal xlarge',
				'aria-labelledby': 'videoModalTitle',
				'aria-hidden': 'true',
				'role': 'dialog'
			});
			if(data.get('videoURL') !== null) {
				answer.append(videoReveal);
			}
			/*
			var videoDiv = $('<div>').addClass("flex-video widescreen");
			videoReveal.append(videoDiv);
			*/
			var video = $('<video controls>').attr({
				'width': '100%',
				'height': '100%',
				'class': 'video'
			}).text("Your browser does not support the video.");
			var source = $('<source>').attr({
				'src': data.get('videoURL'),
				'type': 'video/mp4; codecs=h.264',
				'class': 'source1'
			});
			var source2 = $('<source>').attr({
				'src': data.get('videoURL2'),
				'type': 'video/webm',
				'class': 'source2'
			})
			video.append(source);
			video.append(source2);
			if(data.get('videoURL') !== null) {
				videoReveal.append(video);
			}
			var videoClose = $('<a>').attr({
				'class': 'close-reveal-modal',
				'aria-label': 'close'
			});
			videoReveal.append(videoClose);
			var vidX = $('<i>').addClass("fi-x");
			videoClose.append(vidX);
		}

		var p = $('<p>').attr({
			'id': 'answerP' + counter,
			'class': 'answer answerTwo' + counter
		}).text(data.get('answer'));
		if(data.get('answer') !== null && data.get('answer') != '') {
			answer.append(p);
		}
		var counter2 = 1;
		var steps = data.get('steps');
		if(steps.length > 0 && data.get('answer') == null) {
			var revealDiv = $('<div>').addClass("screenshotDiv revealDiv revealDivTwo" + counter);
			div.append(revealDiv);
			for(i in steps) {
				var step = steps[i];
				var imgModal = $('<a>').attr({
					'href': '#',
					'data-reveal-id': 'myModal2' + counter2 + counter,
					'id': 'revealImg',
					'class': 'reveal',
					'style': 'outline:none'
				});
				revealDiv.append(imgModal);
				var revealImg = $('<img>').attr({
					'src': step.get('img'),
					'class': 'revealImg revealImgTwo' + counter
				});
				if(step.get('img') !== null) {
					imgModal.append(revealImg);
				}
				var imgReveal = $('<div data-reveal>').attr({
					'id': 'myModal2' + counter2 + counter,
					'class': 'reveal-modal imgModal xlarge',
					'aria-labelledby': 'myModalTitle',
					'aria-hidden': 'true',
					'role': 'dialog'
				});
				if (step.get('img') !== null) {
					revealDiv.append(imgReveal);
				}
				var modalImg = $('<img>').attr({
					'src': step.get('img'),
					'class': 'modalImg'
				});
				if(step.get('img') !== null) {
					imgReveal.append(modalImg);
				}
				var imgClose = $('<a>').attr({
					'class': 'close-reveal-modal',
					'aria-label': 'close'
				});
				imgReveal.append(imgClose);
				var imgX = $('<i>').addClass("fi-x");
				imgClose.append(imgX);

				var p = $('<p>').attr({
					'id': 'answerP' + counter,
					'class': 'answer answerTwo' + counter
				}).text(step.get('text'));
				if(step.get('text') !== null && step.get('text') != '') {
					answer.append(p);
				}
				var answerId = $('#' + (panel + counter));
				if($('.revealDivTwo' + counter).length > 0 && $('.revealImgTwo' + counter).length > 1) {
					$(answerId).css({
						'width': '100%'
					});
					$('.revealDivTwo' + counter).css({
						'width': '150px'
					});
					$('.revealImgTwo' + counter).css({
						'height': '75px',
						'width': '75px'
					});
				}

				counter2++;
			}
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

		//•ul• = ul tags
		//•li• = li tags
		//since answer column is text below code is needed
		//if answer column was varchar below code would not be needed
		var answerTwo = document.getElementById("answerP" + counter);
		if($(answerTwo).text().indexOf('•br•') >= 0) {
			var res = answerTwo.innerHTML.replace(/•br•/g, "<br>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('•ul•') >= 0) {
			var res = answerTwo.innerHTML.replace(/•ul•/g, "<ul>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('•ol•') >= 0) {
			var res = answerTwo.innerHTML.replace(/•ol•/g, "<ol>");
			answerTwo.innerHTML = res;
		}
		if($(answerTwo).text().indexOf('•li•') >= 0) {
			var res = answerTwo.innerHTML.replace(/•li•/g, "<li>");
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
	_faq.addSection("General FAQs", 'General', 'general', 'general-entry', 'panel1a');
	_faq.addSection2("General FAQs", 'General', 'general', 'general-entry', 'panel1a');
	_faq.addSection("Neighborhood FAQs", 'Neighborhood', 'neighborhood', 'neighborhood-entry', 'panel1b');
	_faq.addSection2("Neighborhood FAQs", 'Neighborhood', 'neighborhood', 'neighborhood-entry', 'panel1b');
	_faq.addSection("Elevation FAQs", 'Elevation', 'elevation', 'elevation-entry', 'panel1c');
	_faq.addSection2("Elevation FAQs", 'Elevation', 'elevation', 'elevation-entry', 'panel1c');
	_faq.addSection("Floorplan FAQs", 'Floorplan', 'floorplan', 'floorplan-entry', 'panel1d');
	_faq.addSection2("Floorplan FAQs", 'Floorplan', 'floorplan', 'floorplan-entry', 'panel1d');
	_faq.addSection("Color Tool FAQs", 'Colortool', 'colortool', 'colortool-entry', 'panel1e');
	_faq.addSection2("Color Tool FAQs", 'Colortool', 'colortool', 'colortool-entry', 'panel1e');
	_faq.addSection("Site Plan FAQs", 'Siteplan', 'siteplan', 'siteplan-entry', 'panel1f');
	_faq.addSection2("Site Plan FAQs", 'Siteplan', 'siteplan', 'siteplan-entry', 'panel1f');
	_faq.addSection("Color Schemes FAQs", 'Colorschemes', 'colorschemes', 'colorschemes-entry', 'panel1g');
	_faq.addSection2("Color Schemes FAQs", 'Colorschemes', 'colorschemes', 'colorschemes-entry', 'panel1g');
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
