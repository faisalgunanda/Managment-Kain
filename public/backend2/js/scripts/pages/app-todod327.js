$(function(){"use strict";var o,t,e,s,i;if($(".todo-application .sidebar-menu-list").length>0)new PerfectScrollbar(".sidebar-menu-list",{theme:"dark"});if($(".todo-application .todo-task-list").length>0)new PerfectScrollbar(".todo-task-list",{theme:"dark"});$(document).on("click",".todo-application .todo-item-info i",function(o){$(this).parent(".todo-item-info").toggleClass("success"),o.stopPropagation()}),$(document).on("click",".todo-application .todo-item-favorite i",function(o){$(this).parent(".todo-item-favorite").toggleClass("warning"),o.stopPropagation()}),$(".menu-toggle").on("click",function(o){$(".app-content .sidebar-left").removeClass("show"),$(".app-content .app-content-overlay").removeClass("show")}),$(".todo-application .sidebar-close-icon").on("click",function(){$(".sidebar-left").removeClass("show"),$(".app-content-overlay").removeClass("show")}),$(".sidebar-toggle").on("click",function(o){o.stopPropagation(),$(".app-content .sidebar-left").toggleClass("show"),$(".app-content .app-content-overlay").addClass("show")}),$(".app-content .app-content-overlay").on("click",function(o){$(".app-content .sidebar-left").removeClass("show"),$(".app-content .app-content-overlay").removeClass("show")}),$(".todo-application .list-group-filters a").on("click",function(){$(".todo-application .list-group-filters a").hasClass("active")&&$(".todo-application .list-group-filters a").removeClass("active"),$(this).addClass("active")}),$(window).width()>992&&$(".todo-application .app-content-overlay").hasClass("show")&&$(".todo-application .app-content-overlay").removeClass("show"),$(".add-task button").on("click",function(o){$(".modal .new-todo-item-title").val(""),$(".modal .new-todo-item-desc").val(""),$(".modal .dropdown-menu input").prop("checked",!1),$(".modal .todo-item-info").hasClass("success")&&$(".modal .todo-item-info").removeClass("success"),$(".modal .todo-item-favorite").hasClass("warning")&&$(".modal .todo-item-favorite").removeClass("warning")}),$(".add-todo-item").on("click",function(o){o.preventDefault();var t="",e="",s="",i=$(".new-todo-item-title").val(),a=$(".new-todo-item-desc").val();$(".modal.show .todo-item-info").hasClass("success")&&(t=" success"),$(".modal.show .todo-item-favorite").hasClass("warning")&&(e=" warning"),$(".modal .dropdown-menu input:checked").each(function(){s+='<div class="chip mb-0"><div class="chip-body"><span class="chip-text" data-value="'+$(this).data("value")+'"><span class="bullet bullet-'+$(this).data("color")+' bullet-xs"></span> '+$(this).data("value")+"</span></div></div>"}),""!=i&&$(".todo-task-list-wrapper").append('<li class="todo-item" style="animation-delay: 0s;"  data-toggle="modal" data-target="#editTaskModal"><div class="todo-title-wrapper d-flex justify-content-between mb-50"><div class="todo-title-area d-flex align-items-center"><div class="title-wrapper d-flex"><div class="vs-checkbox-con"><input type="checkbox" ><span class="vs-checkbox vs-checkbox-sm"><span class="vs-checkbox--check"><i class="vs-icon feather icon-check"></i></span></span></div><h6 class="todo-title mt-50 mx-50">'+i+'</h6></div><div class="chip-wrapper">'+s+'</div></div><div class="float-right todo-item-action d-flex"><a class="todo-item-info'+t+'"><i class="feather icon-info"></i></a><a class="todo-item-favorite'+e+'"><i class="feather icon-star"></i></a><a class="todo-item-delete"><i class="feather icon-trash"></i></a></div></div><p class="mb-0 todo-desc truncate">'+a+"</p></li>"),$("#form-edit-todo .edit-todo-item-title").val(i),$("#form-edit-todo .edit-todo-item-desc").val(a),$("#form-edit-todo .dropdown-menu input").prop("checked",!1),$("#form-edit-todo .edit-todo-item-info").hasClass("success")&&$("#form-edit-todo .edit-todo-item-info").addClass("success"),$("#form-edit-todo .edit-todo-item-favorite").hasClass("warning")&&$("#form-edit-todo .edit-todo-item-favorite").addClass("warning")}),$(document).on("click",".todo-task-list-wrapper .todo-item",function(a){o=$(this).find(".todo-title"),t=$(this).find(".todo-desc"),e=$(this).find(".todo-item-info"),s=$(this).find(".todo-item-favorite"),i=$(this).find(".chip-wrapper");var d=$(this).find(".todo-title").html(),n=$(this).find(".todo-desc").html(),l=$(this).find(".todo-item-info"),c=$(this).find(".todo-item-favorite");$("#form-edit-todo .dropdown-menu input").prop("checked",!1),$(this).find(".chip").each(function(){var o=$(this).find(".chip-text").data("value");$('#form-edit-todo .dropdown-menu input[data-value="'+o+'"]').prop("checked",!0)}),$("#form-edit-todo .edit-todo-item-title").val(d),$("#form-edit-todo .edit-todo-item-desc").val(n),$("#form-edit-todo .todo-item-info").hasClass("success")&&$("#form-edit-todo .todo-item-info").removeClass("success"),$("#form-edit-todo .edit-todo-item-favorite").hasClass("warning")&&$("#form-edit-todo .edit-todo-item-favorite").removeClass("warning"),$(l).hasClass("success")&&$("#form-edit-todo .todo-item-info").addClass("success"),$(c).hasClass("warning")&&$("#form-edit-todo .edit-todo-item-favorite").addClass("warning")}),$(".update-todo-item").on("click",function(){var a=$("#form-edit-todo .edit-todo-item-title").val(),d=$("#form-edit-todo .edit-todo-item-desc").val(),n=$("#form-edit-todo .todo-item-info i"),l=$("#form-edit-todo .todo-item-favorite i");$(o).text(a),$(t).text(d),$(e).hasClass("success")&&$(e).removeClass("success"),$(s).hasClass("warning")&&$(s).removeClass("warning"),$(n).parent(".todo-item-info").hasClass("success")&&e.addClass("success"),$(l).parent(".todo-item-favorite").hasClass("warning")&&s.addClass("warning");var c=$("#form-edit-todo .dropdown-menu input:checked"),r="";c.each(function(){r+='<div class="chip mb-0"><div class="chip-body"><span class="chip-text" data-value="'+$(this).data("value")+'"><span class="bullet bullet-'+$(this).data("color")+' bullet-xs"></span> '+$(this).data("value")+"</span></div></div>"}),i.empty(),$(i).append(r)}),$(document).on("click",".todo-item-delete",function(o){o.stopPropagation(),$(this).closest(".todo-item").remove()}),$(document).on("click",".todo-item input",function(o){o.stopPropagation(),$(this).closest(".todo-item").toggleClass("completed")}),$("#todo-search").on("keyup",function(){var o=$(this).val().toLowerCase();""!=o?($(".todo-item").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(o)>-1)}),0==$(".todo-item:visible").length?$(".no-results").hasClass("show")||$(".no-results").addClass("show"):$(".no-results").removeClass("show")):($(".todo-item").show(),$(".no-results").hasClass("show")&&$(".no-results").removeClass("show"))})}),$(window).on("resize",function(){$(window).width()>992&&$(".app-content .app-content-overlay").hasClass("show")&&($(".app-content .sidebar-left").removeClass("show"),$(".app-content .app-content-overlay").removeClass("show"))});
