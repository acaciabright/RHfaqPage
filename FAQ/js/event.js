////////////////////////////////////////////////////////////////////
////////////////////////////EVENT SECTION///////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////STICKY NAVIGATION//////////////////////////

var nav = $('.nav');
var header = $('.headerImg');
$(window).scroll(function() {
	if ($(this).scrollTop() > 55) {
		nav.addClass("sticky");
		header.addClass("stickyHeader");
	} 
	else {
		nav.removeClass("sticky");
		header.removeClass("stickyHeader");
	}
});

$('body').off();

$('body').on(
	'click', '.neighborhood-entry', function(evt) {
		evt.preventDefault();
		evt.stopImmediatePropagation();
		var dataId = parseInt($(this).attr('data-id'), 10);
		if(!$(this).hasClass("active")) {
			var activeNeighborhood = $('.neighborhood-entry.active');
			if(activeNeighborhood.length > 0) {
				var activeDataId = activeNeighborhood.attr('data-id');
				$('#panel1a' + activeDataId).hide();
			}
			var activeElevation = $('.elevation-entry.active');
			if(activeElevation.length > 0) {
				var activeDataId = activeElevation.attr('data-id');
				$('#panel1b' + activeDataId).hide();
			}
			var activeFloorplan = $('.floorplan-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1c' + activeDataId).hide();
			}
			var activeFloorplan = $('.colortool-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1d' + activeDataId).hide();
			}
			var activeFloorplan = $('.siteplan-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1e' + activeDataId).hide();
			}
			var activeFloorplan = $('.colorschemes-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1f' + activeDataId).hide();
			}
			$('.neighborhood-entry').removeClass('active outline');
			$('.elevation-entry').removeClass('active outline');
			$('.floorplan-entry').removeClass('active outline');
			$('.colortool-entry').removeClass('active outline');
			$('.siteplan-entry').removeClass('active outline');
			$('.colorschemes-entry').removeClass('active outline');
			$(this).addClass('active outline');
			$('#panel1a' + dataId).show();
		} else {
			$('#panel1a' + dataId).hide();
			$(this).removeClass('active outline');
		}
	}
);
$('body').on(
	'click', '.elevation-entry', function(evt) {
		evt.preventDefault();
		evt.stopImmediatePropagation();
		var dataId = parseInt($(this).attr('data-id'), 10);
		if(!$(this).hasClass("active")) {
			var activeElevation = $('.elevation-entry.active');
			if(activeElevation.length > 0) {
				var activeDataId = activeElevation.attr('data-id');
				$('#panel1b' + activeDataId).hide();
			}
			var activeNeighborhood = $('.neighborhood-entry.active');
			if(activeNeighborhood.length > 0) {
				var activeDataId = activeNeighborhood.attr('data-id');
				$('#panel1a' + activeDataId).hide();
			}
			var activeFloorplan = $('.floorplan-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1c' + activeDataId).hide();
			}
			var activeFloorplan = $('.colortool-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1d' + activeDataId).hide();
			}
			var activeFloorplan = $('.siteplan-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1e' + activeDataId).hide();
			}
			var activeFloorplan = $('.colorschemes-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1f' + activeDataId).hide();
			}
			$('.elevation-entry').removeClass('active outline');
			$('.neighborhood-entry').removeClass('active outline');
			$('.floorplan-entry').removeClass('active outline');
			$('.colortool-entry').removeClass('active outline');
			$('.siteplan-entry').removeClass('active outline');
			$('.colorschemes-entry').removeClass('active outline');
			$(this).addClass('active outline');
			$('#panel1b' + dataId).show();
		} else {
			$('#panel1b' + dataId).hide();
			$(this).removeClass('active outline');
		}
	}
);
$('body').on(
	'click', '.floorplan-entry', function(evt) {
		evt.preventDefault();
		evt.stopImmediatePropagation();
		var dataId = parseInt($(this).attr('data-id'), 10);
		if(!$(this).hasClass("active")) {
			var activeFloorplan = $('.floorplan-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1c' + activeDataId).hide();
			}
			var activeNeighborhood = $('.neighborhood-entry.active');
			if(activeNeighborhood.length > 0) {
				var activeDataId = activeNeighborhood.attr('data-id');
				$('#panel1a' + activeDataId).hide();
			}
			var activeElevation = $('.elevation-entry.active');
			if(activeElevation.length > 0) {
				var activeDataId = activeElevation.attr('data-id');
				$('#panel1b' + activeDataId).hide();
			}
			var activeColortool= $('.colortool-entry.active');
			if(activeColortool.length > 0) {
				var activeDataId = activeColortool.attr('data-id');
				$('#panel1d' + activeDataId).hide();
			}
			var activeSiteplan = $('.siteplan-entry.active');
			if(activeSiteplan.length > 0) {
				var activeDataId = activeSiteplan.attr('data-id');
				$('#panel1e' + activeDataId).hide();
			}
			var activeColorschemes = $('.colorschemes-entry.active');
			if(activeColorschemes.length > 0) {
				var activeDataId = activeColorschemes.attr('data-id');
				$('#panel1f' + activeDataId).hide();
			}
			$('.floorplan-entry').removeClass('active outline');
			$('.neighborhood-entry').removeClass('active outline');
			$('.elevation-entry').removeClass('active outline');
			$('.colortool-entry').removeClass('active outline');
			$('.siteplan-entry').removeClass('active outline');
			$('.colorschemes-entry').removeClass('active outline');
			$(this).addClass('active outline');
			$('#panel1c' + dataId).show();
		} else {
			$('#panel1c' + dataId).hide();
			$(this).removeClass('active outline');
		}
	}
);
$('body').on(
	'click', '.colortool-entry', function(evt) {
		evt.preventDefault();
		evt.stopImmediatePropagation();
		var dataId = parseInt($(this).attr('data-id'), 10);
		if(!$(this).hasClass("active")) {
			var activeColortool= $('.colortool-entry.active');
			if(activeColortool.length > 0) {
				var activeDataId = activeColortool.attr('data-id');
				$('#panel1d' + activeDataId).hide();
			}
			var activeNeighborhood = $('.neighborhood-entry.active');
			if(activeNeighborhood.length > 0) {
				var activeDataId = activeNeighborhood.attr('data-id');
				$('#panel1a' + activeDataId).hide();
			}
			var activeElevation = $('.elevation-entry.active');
			if(activeElevation.length > 0) {
				var activeDataId = activeElevation.attr('data-id');
				$('#panel1b' + activeDataId).hide();
			}
			var activeFloorplan = $('.floorplan-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1c' + activeDataId).hide();
			}
			var activeSiteplan = $('.siteplan-entry.active');
			if(activeSiteplan.length > 0) {
				var activeDataId = activeSiteplan.attr('data-id');
				$('#panel1e' + activeDataId).hide();
			}
			var activeColorschemes = $('.colorschemes-entry.active');
			if(activeColorschemes.length > 0) {
				var activeDataId = activeColorschemes.attr('data-id');
				$('#panel1f' + activeDataId).hide();
			}
			$('.colortool-entry').removeClass('active outline');
			$('.neighborhood-entry').removeClass('active outline');
			$('.elevation-entry').removeClass('active outline');
			$('.floorplan-entry').removeClass('active outline');
			$('.siteplan-entry').removeClass('active outline');
			$('.colorschemes-entry').removeClass('active outline');
			$(this).addClass('active outline');
			$('#panel1d' + dataId).show();
		} else {
			$('#panel1d' + dataId).hide();
			$(this).removeClass('active outline');
		}
	}
);
$('body').on(
	'click', '.siteplan-entry', function(evt) {
		evt.preventDefault();
		evt.stopImmediatePropagation();
		var dataId = parseInt($(this).attr('data-id'), 10);
		if(!$(this).hasClass("active")) {
			var activeSiteplan = $('.siteplan-entry.active');
			if(activeSiteplan.length > 0) {
				var activeDataId = activeSiteplan.attr('data-id');
				$('#panel1e' + activeDataId).hide();
			}
			var activeNeighborhood = $('.neighborhood-entry.active');
			if(activeNeighborhood.length > 0) {
				var activeDataId = activeNeighborhood.attr('data-id');
				$('#panel1a' + activeDataId).hide();
			}
			var activeElevation = $('.elevation-entry.active');
			if(activeElevation.length > 0) {
				var activeDataId = activeElevation.attr('data-id');
				$('#panel1b' + activeDataId).hide();
			}
			var activeFloorplan = $('.floorplan-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1c' + activeDataId).hide();
			}
			var activeColortool= $('.colortool-entry.active');
			if(activeColortool.length > 0) {
				var activeDataId = activeColortool.attr('data-id');
				$('#panel1d' + activeDataId).hide();
			}
			var activeColorschemes = $('.colorschemes-entry.active');
			if(activeColorschemes.length > 0) {
				var activeDataId = activeColorschemes.attr('data-id');
				$('#panel1f' + activeDataId).hide();
			}
			$('.siteplan-entry').removeClass('active outline');
			$('.neighborhood-entry').removeClass('active outline');
			$('.elevation-entry').removeClass('active outline');
			$('.floorplan-entry').removeClass('active outline');
			$('.colortool-entry').removeClass('active outline');
			$('.colorschemes-entry').removeClass('active outline');
			$(this).addClass('active outline');
			$('#panel1e' + dataId).show();
		} else {
			$('#panel1e' + dataId).hide();
			$(this).removeClass('active outline');
		}
	}
);
$('body').on(
	'click', '.colorschemes-entry', function(evt) {
		evt.preventDefault();
		evt.stopImmediatePropagation();
		var dataId = parseInt($(this).attr('data-id'), 10);
		if(!$(this).hasClass("active")) {
			var activeColorschemes = $('.colorschemes-entry.active');
			if(activeColorschemes.length > 0) {
				var activeDataId = activeColorschemes.attr('data-id');
				$('#panel1f' + activeDataId).hide();
			}
			var activeNeighborhood = $('.neighborhood-entry.active');
			if(activeNeighborhood.length > 0) {
				var activeDataId = activeNeighborhood.attr('data-id');
				$('#panel1a' + activeDataId).hide();
			}
			var activeElevation = $('.elevation-entry.active');
			if(activeElevation.length > 0) {
				var activeDataId = activeElevation.attr('data-id');
				$('#panel1b' + activeDataId).hide();
			}
			var activeFloorplan = $('.floorplan-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1c' + activeDataId).hide();
			}
			var activeFloorplan = $('.floorplan-entry.active');
			if(activeFloorplan.length > 0) {
				var activeDataId = activeFloorplan.attr('data-id');
				$('#panel1c' + activeDataId).hide();
			}
			var activeSiteplan = $('.siteplan-entry.active');
			if(activeSiteplan.length > 0) {
				var activeDataId = activeSiteplan.attr('data-id');
				$('#panel1e' + activeDataId).hide();
			}
			$('.colorschemes-entry').removeClass('active outline');
			$('.neighborhood-entry').removeClass('active outline');
			$('.elevation-entry').removeClass('active outline');
			$('.floorplan-entry').removeClass('active outline');
			$('.colortool-entry').removeClass('active outline');
			$('.siteplan-entry').removeClass('active outline');
			$(this).addClass('active outline');
			$('#panel1f' + dataId).show();
		} else {
			$('#panel1f' + dataId).hide();
			$(this).removeClass('active outline');
		}
	}
);