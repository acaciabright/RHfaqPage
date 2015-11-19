var fakeData = {
	question: "Fake data?",
	answer: "Fake data."
};

var _deferreds = [];
var accordion = new _Accordion();
var _generalArray;
var _neighborhoodArray;
var _elevationArray;
var _floorplanArray;
var _colortoolArray;
var _siteplanArray;
var generalObject;
var neighborhoodObject;
var elevationObject;
var floorplanObject;
var colortoolObject;
var siteplanObject;

/////////////////////////////////////////////////////////////////
////////////////////////TEST SECTION/////////////////////////////
/////////////////////////////////////////////////////////////////

describe('_Accordion', function() {
	it('should assign data properties', function() {
		expect(accordion).to.have.property('general');
		expect(accordion).to.have.property('neighborhood');
		expect(accordion).to.have.property('elevation');
		expect(accordion).to.have.property('floorplan');
		expect(accordion).to.have.property('colortool');
		expect(accordion).to.have.property('siteplan');
	});
});

describe('_Section', function() {
	it('should assign data properties', function() {
		var newSection = new _Section($(fakeData));
		expect(newSection).to.have.property('question');
		expect(newSection).to.have.property('answer');
		expect(newSection).to.have.property('screenShot');
		expect(newSection).to.have.property('videoURL');
		expect(newSection).to.have.property('videoURL2');
		expect(newSection).to.have.property('steps');
	});
});

describe('_Step', function() {
	it('should assign data properties', function() {
		var newStep = new _Step($(fakeData));
		expect(newStep).to.have.property('topicId');
		expect(newStep).to.have.property('id');
		expect(newStep).to.have.property('img');
		expect(newStep).to.have.property('text');
		expect(newStep).to.have.property('stepNumber');
	});
});

describe('_Accordion.prototype.addObject', function() {
	it('should add objects to empty array in this.section', function() {
		var _array = [fakeData];
		for(var i in _array) {
			var curAccordion = _array[i];
			var sectionObject = new _Section($(curAccordion));
			accordion.addObject(sectionObject, 'neighborhood');
			expect(accordion).to.have.property('neighborhood')
			.that.is.an('array').with.deep.property('[' + i + ']');
		}
	});
});

describe('_Accordion.prototype.getObjects', function() {
	it('should get objects from array in this.section', function() {
		var getObject = accordion.getObjects('neighborhood');
		for(var i in getObject) {
			expect(getObject[i]).to.have.property('question');
		}
	});
});

describe('_Section.prototype.get', function() {
	it('should get a properties value', function() {
		var database = accordion.getObjects('neighborhood');
		for (var e in database) {
			var data = database[e];
			expect(data).to.have.property('question');
			expect(data).to.have.property('answer');
			expect(data).to.have.property('screenShot');
			expect(data).to.have.property('videoURL');
			expect(data).to.have.property('videoURL2');
			expect(data).to.have.property('steps');
		} 
	});
});

describe('_Section.prototype.addStep', function() {
	it('should add objects into this.steps array', function() {
		var newSection = new _Section($(fakeData));
		var data = $(fakeData);
		var stepsArray = data.prop('steps');
		for(var i in stepsArray) {
			var curStep = stepsArray[i];
			var stepObject = new _Step($(curStep));
			this.addStep(stepObject);
			console.log(this);
			expect(newSection).to.have.property('steps', 'Array');
		}
	});
});

describe('_Step.prototype.get', function() {
	it('should get a properties value', function() {
		var database = accordion.getObjects('neighborhood');
		for (var e in database) {
			var data = database[e];
			var steps = data.get('steps');
			for(var i in steps) {
				var step = steps[i];
				expect(step).to.have.property('topicId');
				expect(step).to.have.property('id');
				expect(step).to.have.property('img');
				expect(step).to.have.property('text');
				expect(step).to.have.property('stepNumber');
			}
		}
	});
});

var accordionDeferred = $.Deferred();
_deferreds.push(accordionDeferred);

var ajaxRequest = function(section, section2, message, 
	_sectionArray, sectionObject, section3, resolve) {
	var server;
	var type = "POST";
	var url = "php/getData.php";
	var postData = {
		"table": "Topics",
		"sort": "topicId",
		"section": section	
	};
	var data;

	beforeEach(function () {
	  server = sinon.fakeServer.create();
	});

	afterEach(function () {
	  server.restore();
	});

	it('should fake a jQuery ajax request', function() {
		server.respondWith(type, url, [
    	200, {"Content-Type":"application/json"}, JSON.stringify(postData)
  	]);
	});
	it('should execute success callback', function() {
		section2.done(function(data) {
			expect(data).to.have.string('OK');
			if(data.search('OK') < 0) {
				console.log('Data search for ' + message + ' failed somehow ' + data);
			} else {
				console.log('Data search for ' + message + ' succeeded');
				var split = data.split("^S^P^L^I^T^");
				expect(split[1]).to.not.have.string("^S^P^L^I^T^");
				_sectionArray = $.parseJSON(split[1]); 
				for(var i in _sectionArray) {
					var curAccordion = _sectionArray[i];
					sectionObject = new _Section($(curAccordion));
					accordion.addObject(sectionObject, section3);
				}
				resolve;
				}
			});
		});
	it('should execute error callback', function() {
		section2.fail(function(data) { 
			console.log('Ajax request for ' + message + ' failed somehow ' + data);
		});
	});
};

describe('generalRequest', function() {
	ajaxRequest("GENERAL", generalRequest, "GENERAL", 
		_generalArray, generalObject, "general");
});

describe('neighborhoodRequest', function() {
	ajaxRequest("NEIGHBORHOOD", neighborhoodRequest, "NEIGHBORHOOD", 
		_neighborhoodArray, neighborhoodObject, "neighborhood");
});

describe('elevationRequest', function() {
	ajaxRequest("ELEVATION", elevationRequest, "ELEVATION", 
		_elevationArray, elevationObject, "elevation");
});

describe('floorplanRequest', function() {
	ajaxRequest("FLOORPLAN", floorplanRequest, "FLOORPLAN", 
		_floorplanArray, floorplanObject, "floorplan");
});

describe('colortoolRequest', function() {
	ajaxRequest("COLORTOOL", colortoolRequest, "COLORTOOL", 
		_colortoolArray, colortoolObject, "colortool");
});

describe('siteplanRequest', function() {
	ajaxRequest("SITEPLAN", siteplanRequest, "SITEPLAN", 
		_siteplanArray, siteplanObject, "siteplan", accordionDeferred.resolve());
});

describe('deferredWhen', function() {
	it('should callback when all deferreds are resolved', function() {
		expect(accordionDeferred.state()).to.equal("resolved");
	});
});
    