Date.prototype.format = function (f) {

    if (!this.valueOf()) return " ";



    var weekKorName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

    var weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];

    var weekEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var d = this;



    return f.replace(/(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi, function ($1) {

        switch ($1) {

            case "yyyy": return d.getFullYear(); // 년 (4자리)

            case "yy": return (d.getFullYear() % 1000).zf(2); // 년 (2자리)

            case "MM": return (d.getMonth() + 1).zf(2); // 월 (2자리)

            case "dd": return d.getDate().zf(2); // 일 (2자리)

            case "KS": return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)

            case "KL": return weekKorName[d.getDay()]; // 요일 (긴 한글)

            case "ES": return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)

            case "EL": return weekEngName[d.getDay()]; // 요일 (긴 영어)

            case "HH": return d.getHours().zf(2); // 시간 (24시간 기준, 2자리)

            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)

            case "mm": return d.getMinutes().zf(2); // 분 (2자리)

            case "ss": return d.getSeconds().zf(2); // 초 (2자리)

            case "a/p": return d.getHours() < 12 ? "오전" : "오후"; // 오전/오후 구분

            default: return $1;

        }

    });

};
String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
Number.prototype.zf = function (len) { return this.toString().zf(len); };




function jusoCallBack(roadFullAddr, roadAddrPart1, addrDetail, roadAddrPart2, engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn, detBdNmList, bdNm, bdKdcd, siNm, sggNm, emdNm, liNm, rn, udrtYn, buldMnnm, buldSlno, mtYn, lnbrMnnm, lnbrSlno, emdNo){
  document.getElementById('zip').value =  zipNo;
  document.getElementById('address1').value =  roadAddrPart1;
  document.getElementById('address2').value =  roadAddrPart2 +" "+ addrDetail;

  //document.getElementById('business_address').value = roadAddrPart1+" "+ addrDetail;  
  /*document.getElementById('roadFullAddr').value = roadFullAddr;
	document.getElementById('roadAddrPart1').value = roadAddrPart1;
	document.getElementById('addrDetail').value = addrDetail;
	document.getElementById('roadAddrPart2').value = roadAddrPart2;
	document.getElementById('engAddr').value = engAddr;
	document.getElementById('jibunAddr').value = jibunAddr;
	document.getElementById('zipNo').value = zipNo;
	document.getElementById('admCd').value = admCd;
	document.getElementById('rnMgtSn').value = rnMgtSn;
	document.getElementById('bdMgtSn').value = bdMgtSn;
	document.getElementById('detBdNmList').value = detBdNmList;
	// 2017년 2월 제공항목 추가 
	document.getElementById('bdNm').value = bdNm;
	document.getElementById('bdKdcd').value = bdKdcd;
	document.getElementById('siNm').value = siNm;
	document.getElementById('sggNm').value = sggNm;
	document.getElementById('emdNm').value = emdNm;
	document.getElementById('liNm').value = liNm;
	document.getElementById('rn').value = rn;
	document.getElementById('udrtYn').value = udrtYn;
	document.getElementById('buldMnnm').value = buldMnnm;
	document.getElementById('buldSlno').value = buldSlno;
	document.getElementById('mtYn').value = mtYn;
	document.getElementById('lnbrMnnm').value = lnbrMnnm;
	document.getElementById('lnbrSlno').value = lnbrSlno;
	/ 2017년 3월 제공항목 추가 
	document.getElementById('emdNo').value = emdNo;	*/
}

function goPopup(){
  var url = location.href;
  //	alert(url);
	// 주소검색을 수행할 팝업 페이지를 호출합니다.
	// 호출된 페이지(jusoPopup.php)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrLinkUrl.do)를 호출하게 됩니다.
	var pop = window.open("../jusoPopup.htm","pop","width=570,height=620, scrollbars=yes, resizable=yes"); 
	
	// 모바일 웹인 경우, 호출된 페이지(jusoPopup.php)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrMobileLinkUrl.do)를 호출하게 됩니다.
  //var pop = window.open("./jusoPopup.php","pop","scrollbars=yes, resizable=yes"); 
}
function idpw_only(val)
{  
  var ch_val = val.replace(/[^\!-z0-9]/gi,"");  
  return ch_val;
}
function number_only(val)
{ 
  var ch_val = val.replace(/[^0-9]/g,"");
  return ch_val;

}
function number_format(num)
{  

  var regexp = /\B(?=(\d{3})+(?!\d))/g;  
  return num.toString().replace(regexp, ',');
  //return num.toLocaleString();
}

function loading(gubun, val)
{
  if(gubun=="Y") 
  {
    /*
    setTimeout(function(){      
      if($("#load_end").length!="1")
      {
        //페이지 로드가 되지 않았다면 출력
        $("#loading").html("<div class=\"loading_box\">\n<div class=\"loading-container\">\n<div class=\"loading\"></div>\n<div class=\"loading-text\">로딩중</div>\n</div>\n<div class=\"loading-info\">"+val+"</div>\n</div>\n");
      }
      
    },1000);
    */
    
    if(val=="") val="잠시만 기다려 주세요.";
    

    //페이지 로드가 되지 않았다면 출력 //데이터를 가져오는 중입니다.
    $("#loading").html("<div class=\"loading_box\">\n<div class=\"loading-container\">\n<div class=\"loading\"></div>\n<div class=\"loading-text\"></div>\n</div>\n<div class=\"loading-info\">"+val+"</div>\n</div>\n");

  }
  else
  {
    $("#loading").html("");
  }
}

function nl2br(str){  
  return str.replace(/\n/g, "<br />");  
}

function isEmpty(value)
{ 
  if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) )
  { 
    return true; 
  }
  else
  { 
    return false; 
  } 
}

function ymd_format(num, gubun)
{

   if(!num) return "";
   var formatNum = '';

   // 공백제거
   num=num.replace(/\s/gi, "");
   
   if(num.length == 8) {
     formatNum = num.replace(/(\d{4})(\d{2})(\d{2})/, '$1'+gubun+'$2'+gubun+'$3');
   }
   else if(num.length == 6) {
     formatNum = num.replace(/(\d{2})(\d{2})(\d{2})/, '$1'+gubun+'$2'+gubun+'$3');
   }
   
   return formatNum;
}

function phoneFomat(num,type)
{
  var formatNum = '';
  if(num.length==11)
  {

    if(type==0)
    {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');
    }
    else
    {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }

  }
  else if(num.length==8)
  {
    formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
  }
  else
  {
    if(num.indexOf('02')==0)
    {
      if(type==0)
      {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');
      }
      else
      {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
      }

    }
    else
    {
      if(type==0)
      {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');
      }
      else
      {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      }
    }
  }
  return formatNum;
}

 
function getRecentDate(){
    var dt = new Date();
 
    var recentYear = dt.getFullYear();
    var recentMonth = dt.getMonth() + 1;
    var recentDay = dt.getDate();
 
    if(recentMonth < 10) recentMonth = "0" + recentMonth;
    if(recentDay < 10) recentDay = "0" + recentDay;
 
    return recentYear + "-" + recentMonth + "-" + recentDay;
}
 
function getPastDate(period){
    var dt = new Date();
 
    dt.setMonth((dt.getMonth() + 1) - period);
 
    var year = dt.getFullYear();
    var month = dt.getMonth();
    var day = dt.getDate();
 
    if(month < 10) month = "0" + month;
    if(day < 10) day = "0" + day;
 
    return year + "-" + month + "-" + day;
}
//3개월 전의 연월일 getPastDate(3)


function clipboard(str)
{   
  $("body").append("<div style=\"position:relative\"><input type='text' id='clipboard_txt' value='"+str+"' ></div>");  
  $('#clipboard_txt').select();
  try { 
    var successful = document.execCommand('copy');  
    alert('클립보드에 주소가 복사되었습니다. Ctrl + V 로 붙여넣기 하세요.'); 
  } catch (err) { 
      alert('이 브라우저는 지원하지 않습니다.'); 
  }

  $("#clipboard_txt").remove();
}


function email_chk(val)
{

  var email_rule = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
  //var email_rule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if(!email_rule.test(val))
  {
    //alert("이메일을 형식에 맞게 입력해주세요.");
    return "N";
  }
  else 
  {
    return "Y";
  }


}


function num2han(num) 
{ 
  num = num.replace(",","");
  var hanA = new Array("","일","이","삼","사","오","육","칠","팔","구","십");
  var danA = new Array("","십","백","천","","십","백","천","","십","백","천","","십","백","천");
  var result = ""; 
  for(i=0; i<num.length; i++) 
  { 
    str = "";
    han = hanA[num.charAt(num.length-(i+1))];
    if(han != "") str += han+danA[i];
    if(i == 4) str += "만";
    if(i == 8) str += "억";
    if(i == 12) str += "조";
    result = str + result; 
  } 
  if(num != 0) result = result; 
  
  return result; 
}

function fillzero(width, str){
  return str.length >= width ? str:new Array(width-str.length+1).join('0')+str;//남는 길이만큼 0으로 채움
}

function device_chk()
{
  
  var filter = "win16|win32|win64|mac|macintel";
  if ( navigator.platform ) 
  {
    if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) 
    { 
      //mobile 
      return "mobile";
    }
    else 
    { 
      //pc
      return "pc";
    }
  }

}



function strip_tags(str_code)
{
  var ptn = new RegExp("<\/?[^>]*>","gi");
  //혹은 아래 처럼 정규표현식 만듬
  var ptn = /<\/?[^>]*>/gi;
  return str_code.replace(ptn,"");
}

function checkMobile(){
 
  var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

  if ( varUA.indexOf('android') > -1) {
      //안드로이드
      return "android";
  } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
      //IOS
      return "ios";
  } else {
      //아이폰, 안드로이드 외
      return "other";
  }
    
}


function maxLengthCheck(object)
{ 
  if(object.value.length > object.maxLength)
  { 
    object.value = object.value.slice(0, object.maxLength);
  } 
}


function ie_chk()
{
  var agent = navigator.userAgent.toLowerCase();
  if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) 
  {
    return "Y";
  }  

}

function zero_fill(str, cnt) {
  str = '0000000000000000000'+str;
  return str.substr(str.length-cnt, cnt);
}


function date_limit(start_date, end_date, checkNum)
{  
  //var checkNum = 3; //3개월

  var s1 = start_date.val();      
  var startYear = s1.substr(0,4);
  var startMonth = s1.substr(5,2);
  var startDay = s1.substr(8,2);
  var s2 = end_date.val();      
  var endYear = s2.substr(0,4);
  var endMonth = s2.substr(5,2);
  var endDay = s2.substr(8,2);

  //계산을 위해 명시적으로 형변환
  var startYearNum = Number(startYear);
  var startMonthNum = Number(startMonth);
  var endYearNum = Number(endYear);
  var endMonthNum = Number(endMonth);
    
  //일단 차이를 재서 위에서 정한 월이 넘어가는지 확인 
  var result = ((endYearNum*12)+endMonthNum) - ((startYearNum*12)+startMonthNum);
     
  if(result>checkNum){
        
      alert("날짜 검색 범위는 "+(checkNum)+"개월 입니다.");
        
      if(endMonthNum<=checkNum){
          startYearNum = endYearNum-1;
          startMonthNum = 12-(checkNum-endMonthNum)
      }else{
          startYearNum = endYearNum;
          startMonthNum = endMonthNum-checkNum;
      }
        
      //console.log(startYearNum+"-"+startMonthNum+"-"+startDay)   
      start_date.val(startYearNum+"-"+zero_fill(startMonthNum, 2)+"-"+zero_fill(startDay, 2));          
        
  };
}

function get_excel(url, params, filename, loading_txt)
{
  if(loading_txt=="") loading_txt="엑셀 다운로드중입니다. 잠시만 기다려 주세요.";
  loading('Y', loading_txt);

  var excelUrl = url;
  var request = new XMLHttpRequest();
  request.open('POST', excelUrl, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.responseType = 'blob';

  request.onload = function(e) {

      loading('', '');
      
      
      /*
      
      var disposition = request.getResponseHeader('Content-Disposition');
      if (disposition && disposition.indexOf('attachment') !== -1) {
          var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          var matches = filenameRegex.exec(disposition);
          if (matches != null && matches[1])
              filename = decodeURI( matches[1].replace(/['"]/g, '') );
      }
      console.log("FILENAME: " + filename);
      */

      if (this.status === 200) {
          var blob = this.response;
          if(window.navigator.msSaveOrOpenBlob) {
              window.navigator.msSaveBlob(blob, filename);
          }
          else{
              var downloadLink = window.document.createElement('a');
              var contentTypeHeader = request.getResponseHeader("Content-Type");
              downloadLink.href = window.URL.createObjectURL(new Blob([blob], { type: contentTypeHeader }));
              downloadLink.download = filename;
              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);
          }
      }
  };

  
  request.send( params);

}

function zerofill(variable)
{
	variable = Number(variable).toString();
	if(Number(variable) < 10 && variable.length == 1)
		variable = "0" + variable;
	return variable;
}

function get_page_name()
{
  var pageName = "";
  var tempPageName = window.location.href;
  var strPageName = tempPageName.split("/");
  pageName = strPageName[strPageName.length-1].split("?")[0];
  
  return pageName;

}

