function top_menu_all_hide()
{
  

}

function log_out()
{
  $.ajax({
    type: "POST",
    headers: { "cache-control": "no-cache","pragma": "no-cache" },
    url: "/_process.php",
    data:{
      act : "admin_logout"
    },
    cache: false,
    timeout:3000,
    success:function(data)
    {
      if(data=="Y")
      {          
        //alert("로그아웃 되셨습니다.");
        location.href="/login.html";
      }        
    },
    error: function(request,status,error)
    {
      alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
    }
  });

}



$(document).ready(function(){ 

  $(document).on("mouseover","#top_menu_li",function(){    
    $('[id^=top_menu_div]').hide();    
    $(this).children('[id^=top_menu_div]').show();
  });

  $(document).on("click","#mobile_menu",function(){
    var ul = $(this).parents("ul");
    var li_cnt = ul.children("li").length;
    var this_index = $(this).parents("li").index();
        
    ul.children("li").removeClass("on");
    $(this).parents("li").addClass("on");
    $(this).parents("li").children("div").slideToggle("fast");
    
    for(var i=0; i<li_cnt; i++)
    {
      if(i==this_index) continue;

      if(ul.children("li").eq(i).children("div").css("display")=="block")
      {
        ul.children("li").eq(i).children("div").slideToggle("fast");
      }      
    }    
    
  });


  



  $(document).on("mouseout","#top_menu_li",function(){    
    $('[id^=top_menu_div]').hide();
    //$(this).children("#top_menu_div").show();
    var mkey1 = $("#header").attr("data-mkey1");
    //alert(mkey1)
    $("#top_menu_div_1").show();
  });

  $(document).on("click","#btn_logout",function(){    
    log_out();
  });

  $(document).on("click","#btn_member_edit",function(){    
    
  });

  // 토글
  $(document).on("click",".m_nav_toggle_btn",function(){    
    $('.toggle').css({right:'0%'});
    $(".bk_hide").toggle();
  });
  $(document).on("click",".t_close_btn",function(){    
    $('.toggle').css({right:'-100%'});
    $(".bk_hide").hide();
  });
  
  // 슬라이드 드롭 버튼
  $(document).on("click",".t_close_btn",function(){    
    //$(".search_module").slideToggle("fast");
  });

  // 모바일 검색 버튼
  $(".m_srarch_btn").click(function(){
    $(".search_module").slideToggle("fast");
  });


  




});