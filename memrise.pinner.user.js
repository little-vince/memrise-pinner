// ==UserScript==
// @name           Memrise Course Pinner
// @description    By configuring the code in the user script, more courses can be shown on the home page (in addition to the three already allowed)
// @match          http://www.memrise.com/home/
// @version        0.1.2
// @updateURL      Automatic updating is disabled, to avoid overwriting user configurations
// @downloadURL    https://raw.githubusercontent.com/little-vince/memrise-pinner/master/memrise.pinner.user.js
// @grant          none
// ==/UserScript==

var onLoad = function($) {
  var addBelowPinned = true;
  var addedCourses = [];
  
  $.getJSON('http://www.memrise.com/api/course/learning/?with_progress=true', function(data) {
    var alreadyPinned = [parseInt($(".pinned").eq(0).attr("data-course-id")), parseInt($(".pinned").eq(1).attr("data-course-id")), parseInt($(".pinned").eq(2).attr("data-course-id"))];
    $.each(data.courses, function(key, val) {
      if (($.inArray(val.id, addedCourses)!=-1 || addedCourses.length==0) && $.inArray(val.id, alreadyPinned)==-1) {
        var h = "";
        h += '<div class="course-progress-box pinned " data-role="course-progress-box" data-course-id="'+val.id+'" data-course-name="'+val.name+'" data-pinned="true">';
        h += '    <img class="course-photo" src="'+val.photo_small+'" alt="" title="Pinned by userscript.  Edit the userscript to change or remove.">';
        h += '    <div class="detail">';
        h += '      <div class="title" title="'+val.name+'"><a href="'+val.url+'">'+val.name+'</a></div>';
        h += '      <div class="progress" data-placement="bottom" title="'+val.percent_complete+'% in long term memory"><span class="bar-success bar-abs bar" style="width:'+val.percent_complete+'%;"></span></div>';
        h += '    </div>';
        h += '    <div class="course-actions btn-group" data-role="course-actions">';
        if (val.percent_complete<100) {
          h+='      <a href="/course/next/'+val.id+'" class="btn btn-success" data-placement="top" title="Learn new items">&nbsp; Plant&nbsp;</a>';
        }
        h += '      <a href="'+val.url+'garden/water/" class="btn btn-primary" data-placement="top" title="Review items">Water ('+val.num_ready_to_water+')</a>';
        h += '    </div>';
        h += '</div>';
        if (addBelowPinned) $(".pinned-courses").append(h);
        else                $(".pinned-courses").prepend(h);
      }
    });
  });
};

var injectWithJQ = function(f) {
	var script = document.createElement('script');
	script.textContent = '$(' + f.toString() + '($));';
	document.body.appendChild(script);
};
injectWithJQ(onLoad);
