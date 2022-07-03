const targetEl = document.getElementById('dropdown-example');

const triggerEl = document.querySelector('.payments-btn');

const options = {
    placement: 'bottom',
    onHide: () => {
        console.log('dropdown has been hidden');
    },
    onShow: () => {
        console.log('dropdown has been shown');
    }
  };
const dropdown = new Dropdown(targetEl,null,options);

$(document).on("click","#nav-toggle",function(){
    var checkClass = $("#sidebar").hasClass("mobile-sidebar");
    if ( checkClass ){
        $("#sidebar").removeClass("mobile-sidebar");
        $("#content").removeClass("content-full");
        $(".second-list-a").addClass("pl-11");
        $(".sidebar-items-badge").show(100);
        $(".sidebar-items-text").show(100)
        $(".sidebar-items-second-icon").show(100);
        $(".sidebar-toggle-icon ").show(100);
        $("#social-list").removeClass("flex-col");
        $(".product-box").css("height","485px")
        dropdown.show()
    }else {
        $("#sidebar").addClass("mobile-sidebar");
        $("#content").addClass("content-full");
        $("#social-list").addClass("flex-col");
        $(".second-list-a").removeClass("pl-11");
        $(".sidebar-items-badge").hide(100);
        $(".sidebar-toggle-icon ").hide(100);
        $(".sidebar-items-text").hide(100)
        $(".product-box").css("height","520px")
        dropdown.hide();
    }
});
$(".price-range").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: $("[data-max-price]").data("max-price") ? $("[data-max-price]").data("max-price") : 10000,
    from: 0,
    to: 10000,
    postfix: " $",
    skin: "round",
    onFinish:function(a){
        var from = a.from;
        var to = a.to;
        console.log(a);
        window.filterObj.price = `${from}-${to}`
           var query = buildUrl(window.location.pathname,window.filterObj);
          window.location.href = query
    }
  });