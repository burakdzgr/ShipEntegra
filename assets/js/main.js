$(document).on("click","#nav-toggle",function(){
    var checkClass = $("#sidebar").hasClass("mobile-sidebar");
    if ( checkClass ){
        $("#sidebar").removeClass("mobile-sidebar");
        $("#content").removeClass("content-full");
        $(".sidebar-items-badge").show(100);
        $(".sidebar-items-text").show(100)
        $(".sidebar-items-second-icon").show(100);
        $(".sidebar-toggle-icon ").show(100);
        $("#social-list").removeClass("flex-col");

    }else {
        $("#sidebar").addClass("mobile-sidebar");
        $("#content").addClass("content-full");
        $("#social-list").addClass("flex-col");
        $(".sidebar-items-badge").hide(100);
        $(".sidebar-toggle-icon ").hide(100);
        $("#dropdown-example").hide(100)
        $(".sidebar-items-text").hide(100)
    }
});