/**
The MIT License (MIT)

Copyright (c) 2013 Juaumlol

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function ( $ ) {
 	
 	var i = 0;
	var defaultOptions = {
		text: "",
		url: "",
		menunoimage: [
			{
				action: "select",
				name: "Select an image",
				icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAACXBIWXMAABcSAAAXEgFnn9JSAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAgklEQVR42oyRsQ2DQAxFHylSRWIA2gySnoXY4PZBpM8e7BBFIg3VoznQ6ZQg/8qy35MsGzUZT2rUD9ASy/sCjMTzRO3UJbDOonaoqENAGFR24arOJ/CcmUNA7U+EfudKAXX6AU8lUwt3dS3gNff+ClSPTPW8Uetb34BXrh/AtxxuAwDCYGM2Xz+wWAAAAABJRU5ErkJggg=="
			}
		],
		menuimage: [
			{
				action: "delete",
				name: "Delete image",
				icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT5JREFUeNqUU0uKhDAQjUOvBBFRXIjgTr2Al+hzeAbPIC5cuBahL9FX8A4uXIgIIohL/5lJoCRmtIcJFFUvqXr18hMwxuhuRFGEi6JAtm2jIAiEq5yvu2Lf9ylzmqYCi/khsAqyLMPbtqF1Xakty0L9PM80BkwsjmPhRPB6vbDneTRpmqbDxnGkBjHxhLAsS5QkifCA7oQoz3MECqAjSWYxKIDGpy2EYYhd1z0kE08MugJZVVXH2ZwOUVVVZJrmgR3HOTpZlkXXFUVBoihe3wJJ3vcdGYZxYF3X6Rxg/tp/EQAJGcSzRTy+VQAJPGZJLglgkdwEq4hX8PElgnyIeUUftwAFrAKY+xcB25H3f26hrmtKIkkS6vuexpqmoa7raPEwDCeSB1v880Debds+m6Y5fSj2CROTZfkNNd8CDABg938S/VLKaAAAAABJRU5ErkJggg=="
			},
			{
				action: "change",
				name: "Change image",
				icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAACXBIWXMAABcSAAAXEgFnn9JSAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAgklEQVR42oyRsQ2DQAxFHylSRWIA2gySnoXY4PZBpM8e7BBFIg3VoznQ6ZQg/8qy35MsGzUZT2rUD9ASy/sCjMTzRO3UJbDOonaoqENAGFR24arOJ/CcmUNA7U+EfudKAXX6AU8lUwt3dS3gNff+ClSPTPW8Uetb34BXrh/AtxxuAwDCYGM2Xz+wWAAAAABJRU5ErkJggg=="
			}
		],
		alerts:{
			delete: {
				text: "Do you really want to delete a image?",
				options: [{key:"yes", text:"Yes"}, {key:"no", text:"No"}],
				f: function(obj, father){
					if(obj.attr("data-its-key") == "yes"){
						$("#"+father.attr("data-its")).children("input[name=action]").val("delete");
						$("#"+father.attr("data-its")).submit();
					}
				},
				icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJbSURBVHja7Fo7bsJAEPUiDuAjmBtARWtuQHoKhwoJIQOigAqLAgqEHGioEIkoKMMN4pYquQEcgQPwyS7ajUjiz9q7a68lP+lJeA3G4zfzPGMAt9tNSTNySsqRBZAFwIj8fr8XcdwqZBHSwfREuVxmC0CAC+mQ7/j1ELISFARTANfrlfcx1y7bhbQE0IbU/qyhbQuTfxGjFOJEFXLosc/E+//tk0kBlO+qxz60bkM+y5pCGk4fPxiQb7wLOn+5XEQUrp9KjmwK6Ji070VKvMqkwDpCrewgTzIo4GabtPViJa2Aiq9mVMdCaXRMMgAv2wQua26Gj2z1KakUorFNmoZPZ3WlqAqsOZkIc5+UQwGEpI6pcKC23W6ZlASbzSbsZw4BzkNbAwTITgu1Wu0URwpFsU1aN+tEUmC1WoX5ooNPwxZVAYJSvV7/EqmATXHyLLDx9BZOgeVySfM+NN9+0h4zogIIT41GYxdKgfP5THt14oCN+ySuNlrlaJuBtjqfz0P1SGA2m7HaJs8UIrZa6na7Rx5FbAmwTVpbpRo/wWQyYbVN3goQVPr9vsOiQFTb5PWkjGr89CriIqQRU+F69lyj0cgIDAC10y60Pdbjpm1Zlho2haohhnSRNUDq0Hf8BIPBgNU2RQZAUBiPx0eaiSwJ26S9Q7uOn6DX67HaZhwK3G11Op06fgqI7jaFjJ/ANE3yxOxDkR+dF4hfAbRaLQWfvJ6CAO7j52KxOD2mkJGSk3cdP3M+P0rIynaz2dQeFdCU9EEjjyVRACfJ3cetDn5uaiD7s0cWABu+BRgAPhdgwoJRL5IAAAAASUVORK5CYII="
			}
		}
	};

    $.fn.ITS = function(options) {
    	if(options == undefined) options = {};
        var o = $.extend({}, defaultOptions, options);

        if($("#its-frms").length === 0){ 
        	$("body").prepend("<div id='its-frms'></div>");
        	$("#its-frms")
        		.css("visibility", "hidden")
        		.css("height", "0px")
        		.css("overflow", "hidden");
        }

        this.each(function () {
        	var father = $(this);
        	var status = "noimage";

			$(this).attr("data-its", "its_"+(i++));

			$("#its-frms").prepend('<form id="'+$(this).attr("data-its")+'" action="" method="post" enctype="multipart/form-data"><input type="hidden" name="its" value="'+$(this).attr("data-its")+'"><input type="hidden" name="action" value=""><input type="file" name="image"><br></form>');
			//$("#"+$(this).attr("data-its")).css("visibility", "hidden");

			$(this)
				.css("overflow", "hidden")
				.css("position", "relative")
				.css("cursor", "default")
				.css("-webkit-touch-callout", "none")
				.css("-webkit-user-select", "none")
				.css("-khtml-user-select", "none")
				.css("-moz-user-select", "none")
				.css("-ms-user-select", "none")
				.css("-user-select", "none");

			var setDefaultBG = function() {
				father
					.css("background-color", "#959595")
					.css("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABMCAYAAACS9rJ1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozM0VBOTNEMUYwQkUxMUUyOUY3OUM3MzdBQUY1MTkxQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozM0VBOTNEMkYwQkUxMUUyOUY3OUM3MzdBQUY1MTkxQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMzRUE5M0NGRjBCRTExRTI5Rjc5QzczN0FBRjUxOTFCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMzRUE5M0QwRjBCRTExRTI5Rjc5QzczN0FBRjUxOTFCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+W5HngQAAEtdJREFUeNrsXXls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)")
					.css("background-position", "center")
					.css("background-repeat", "no-repeat")
					.css("background-size", "auto");

				$(this).append("<div class='its-txt'>"+o.text+"</div>");
				$(this).children(".its-txt")
					.css("text-align", "center")
					.css("color", "#fff")
					.css("position", "absolute")
					.css("width", "100%")
					.css("top", (15+(76*.5)+($(this).height()*.5))+"px");
			};
			setDefaultBG();			

			$(this).append("<div class='its-bm'></div>");
			$(this).children(".its-bm")
				.css("position", "absolute")
				.css("background-color", "rgba(0,0,0, .7)")
				.css("width", $(this).width())
				.css("height", "35px")
				.css("bottom", "0px");

			var mM = function () {
				if(status == "noimage"){
					arr = o.menunoimage;
				}else if(status == "image"){
					arr = o.menuimage;
				}

				father.children(".its-bm").html("");
				var arrL = arr.length;
				for(var m = 0; m < arrL; m++){
					var arrI = arr[m];
					father.children(".its-bm").append("<div data-its-menu='"+arrI.action+"' class='its-bm-mn'>"+arrI.name+"</div>");
				}

				father.children(".its-bm").children(".its-bm-mn")
				.css("float", "right")
				.css("height", "100%")
				.css("line-height", "35px")
				.css("font-size", "14px")
				.css("color", "#fff")
				.css("padding-left", "10px")
				.css("padding-right", "10px")
				.css("cursor", "pointer");

				for(var m = 0; m < arrL; m++){
					var arrI = arr[m];
					if(arrI.icon != undefined){
						father.children(".its-bm").children(".its-bm-mn[data-its-menu="+arrI.action+"]")
							.css("background-image", "url("+arrI.icon+")")
							.css("background-repeat", "no-repeat")
							.css("background-position", "center left")
							.css("padding-left", "20px");
					}
				}

				father.children(".its-bm").children(".its-bm-mn").hover(
					function(){
						$(this).css("text-decoration", "underline");
					},
					function(){
						$(this).css("text-decoration", "none");
					}
				);

				/**
					TAKE IT AWAY FROM HERE
				*/
				father.children(".its-bm").children(".its-bm-mn[data-its-menu=select]").on("click", function(e){
					$("#"+father.attr("data-its")).children("input[name=action]").val($(this).attr("data-its-menu"));
					$("#"+father.attr("data-its")).children("input[type=file]").trigger("click");
				});

				father.children(".its-bm").children(".its-bm-mn[data-its-menu=change]").on("click", function(e){
					$("#"+father.attr("data-its")).children("input[name=action]").val($(this).attr("data-its-menu"));
					$("#"+father.attr("data-its")).children("input[type=file]").trigger("click");
				});

				father.children(".its-bm").children(".its-bm-mn[data-its-menu=delete]").on("click", function(e){
					oA("delete");					
				});
				//-------
			};

			mM();

			var oA = function(alert) {
				//for(var a = 0; a < o.alerts[.length)
				var alert = o.alerts[alert];
				if(alert === undefined) return;

				father.append("<div class='its-alert-content'><div class='its-alert'><div class='its-alert-txt'>"+alert.text+"</div><div class='its-alert-options'></div></div></div>")
				father.children(".its-alert-content")
					.css("float", "left")
					.css("position", "relative")
					.css("top", "35%")
					.css("width", "100%")
					.css("background-color", "rgba(0,0,0,.7)");

				father.children(".its-alert-content").children(".its-alert")
					.css("display", "table")
					.css("margin", "0 auto")
					.css("width", "250px")
					.css("height", "65px")					
					.css("background-image", "url("+alert.icon+")")
					.css("background-repeat", "no-repeat")
					.css("background-position", "20px center");

				father.children(".its-alert-content").children(".its-alert").children(".its-alert-txt")
					.css("margin-left", "75px")
					.css("float", "left")
					.css("width", (father.children(".its-alert").width()-40-55))
					.css("color", "#fff")
					.css("margin-top", "10px");

				father.children(".its-alert-content").children(".its-alert").children(".its-alert-options")
					.css("margin-left", "75px")
					.css("margin-top", "5px")
					.css("float", "left")
					.css("width", (father.children(".its-alert").width()-40-55))
					.css("color", "#fff");

				father.children(".its-alert-content").children(".its-alert").children(".its-alert-options")
				.delegate(".its-alert-option", "click", function(e){
					alert.f($(this), father);
					father.children(".its-alert-content").remove();
				});

				for(var op = 0; op < alert.options.length; op++){
					var opt = alert.options[op];
					father.children(".its-alert-content").children(".its-alert").children(".its-alert-options")
						.append("<div data-its-key='"+opt.key+"' class='its-alert-option'>"+opt.text+"</div>");
				}

				father.children(".its-alert-content").children(".its-alert").children(".its-alert-options").children(".its-alert-option")
					.css("float", "left")
					.css("cursor", "pointer")
					.css("margin-right", "15px");

				father.children(".its-alert-content").children(".its-alert").children(".its-alert-options").children(".its-alert-option").hover(
					function(){
						$(this).css("text-decoration", "underline");
					},
					function(){
						$(this).css("text-decoration", "none");
					}
				);

			};

			//binding events			
			$("#"+$(this).attr("data-its")).children("input[type=file]").on("change", function(e){
				if($(this).val() == "") return;
				father.children(".its-bm").children(".its-bm-mn[data-its-menu=select]").off("click");
				father.children(".its-bm").children(".its-bm-mn[data-its-menu=change]").off("click");
				$("#"+father.attr("data-its")).submit();
			});

			//ajaxform stuff
			$("#"+$(this).attr("data-its")).ajaxForm({
				url: o.url,
				dataType: "json",
				beforeSend: function() {
					var percentVal = '0%';
					//console.log(percentVal);
				},
				uploadProgress: function(event, position, total, percentComplete) {
					var percentVal = percentComplete + '%';
					//console.log(percentVal);
				},
				success: function(data) {
					var percentVal = '100%';
					//console.log(percentVal);

					$("#"+father.attr("data-its")).children("input[type=file]").val("");
					
					if(data.action == "delete"){
						setDefaultBG();
						status = "noimage";
						mM();
					}else if(data.action == "select" || data.action == "change"){
						father.css("background-image", "url("+data.url+")");
						father.css("background-size", "cover");
						father.children(".its-txt").remove();

						status = "image";
						mM();
					}
				}
			}); 
    	});
        return this;
    };
 
}( jQuery ));