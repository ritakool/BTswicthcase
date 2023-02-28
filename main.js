let month1="1";
let month2="2";
let month3="3";
let month4="4";
let month5="5";
let month6="6";
let month7="7";
let month8="8";
let month9="9";
let month10="10";
let month11="11";
let month12="12";
function checkmonth(){
let month = document.getElementById('month').value;
switch (month){
    case month1:
    case month3:
    case month5:
    case month7:
    case month8:
    case month10:
    case month12:
    document.getElementById('result').innerHTML= "Tháng " +month + " có 31 ngày";
        break;
    case month4:
    case month6:
    case month9:
    case month11:
    document.getElementById('result').innerHTML= "Tháng " +month + " có 30 ngày";
        break;
    case month2:
    document.getElementById('result').innerHTML= "Tháng " +month + " có 28 hoặc 29 ngày";
        break;
    default:
    alert("Bạn đang nhập cái gì vậy");
}
}
