// document.getElementById('nav-toggle').addEventListener('click', function(e){
//     if(true) {
//         document.getElementById('sidebar').classList.add('mobile-sidebar');
//         document.getElementById('social-list').classList.add('flex-col');
//         document.getElementById('content').classList.add('content-full');
//         var y = document.getElementsByClassName('sidebar-items-text');
//         for (var i=0;i<y.length;i+=1){
//             y[i].style.display = 'none';
//         }
//       }
// })

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