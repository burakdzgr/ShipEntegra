function checkScreen(e){
    if (window.matchMedia('(max-width: 767px)').matches){
        console.log(e);
    }else{
        console.log(e);
    }
}
$(document).on("click","#nav-toggle",function(){
    var checkClass = $("#sidebar").hasClass("mobile-sidebar");
    if ( checkClass ){
        $("#sidebar").removeClass("mobile-sidebar");
        $("#content").removeClass("content-full");
        $(".sidebar-items-badge").show(100);
        $(".sidebar-items-text span").show(100)
        $(".sidebar-items-second-icon").show();
        $("#social-list").removeClass("flex-col");

    }else {
        $("#sidebar").addClass("mobile-sidebar");
        $("#content").addClass("content-full");
        $("#social-list").addClass("flex-col");
        $(".sidebar-items-badge").hide();
        $(".sidebar-items-second-icon").hide();
        $(".sidebar-items-text span").hide(100)
    }
});

