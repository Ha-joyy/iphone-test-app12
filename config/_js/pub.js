// 숫자를 8자리 이상 못넣게
function numberMaxLength(e){
  if(e.value.length > e.maxLength){
	e.value = e.value.slice(0, e.maxLength);
  }
}
// 높이자동
function height_auto()
{
  $("content").css('height',window.innerHeight);
}


