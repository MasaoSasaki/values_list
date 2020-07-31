$(function() {

const Step1 = document.getElementById("step1");
const Step2 = document.getElementById("step2");
const Step3 = document.getElementById("step3");
const Step4 = document.getElementById("step4");
const Step5 = document.getElementById("step5");
const Step6 = document.getElementById("step6");
const goStep2Btn = document.getElementById("go_step2_btn")

goStep2Btn.addEventListener("click", function() {
  Step2.classList.add("open");
  Step1.classList.remove("open");
})

const listItems = [
  {title:"受容", body:"ありのままを受け入れてもらう"},
  {title:"正確", body:"自分の意思や信念を正しく伝える"},
  {title:"達成", body:"なにか重要なことを達成する"},
  {title:"冒険", body:"新しくてワクワクする体験をする"},
  {title:"魅力", body:"身体的な魅力を保つ"},
  {title:"権威", body:"他者に対して責任を持って指導する"},
  {title:"自治", body:"人まかせにしないで自分で決める"},
  {title:"美的", body:"身のまわりの美しいものを味わう"},
]

const Importance3 = document.getElementById("importance_3"); 
const Importance2 = document.getElementById("importance_2"); 
const Importance1 = document.getElementById("importance_1"); 
let importance3Count = 0 //☆
let importance2Count = 0 //○
let importance1Count = 0 //x 
let i = 0; //クリックごとに+1、初期値0

const nextBtn = document.getElementById("next_btn"); //次へ
const backBtn = document.getElementById("back_btn"); //前へ
const resetBtn = document.getElementById("reset_btn"); //最初から

Importance3.addEventListener("click", function() {
  importance3Count += 1
  i += 1
  list_title.innerHTML = listItems[i].title;
  list_body.innerHTML = listItems[i].body;
  item_no.innerHTML = i + 1;
  listItems[i].importance = 3
  $("#back_btn,#reset_btn").css({
    "opacity": "1.0",
    "pointer-events": "initial"
  });
});
Importance2.addEventListener("click", function() {
  importance2Count += 1
  i += 1
  list_title.innerHTML = listItems[i].title;
  list_body.innerHTML = listItems[i].body;
  item_no.innerHTML = i + 1;
  listItems[i].importance = 2
  $("#back_btn,#reset_btn").css({
    "opacity": "1.0",
    "pointer-events": "initial"
  });
});
Importance1.addEventListener("click", function() {
  importance1Count += 1
  i += 1
  list_title.innerHTML = listItems[i].title;
  list_body.innerHTML = listItems[i].body;
  item_no.innerHTML = i + 1;
  listItems[i].importance = 1
  $("#back_btn,#reset_btn").css({
    "opacity": "1.0",
    "pointer-events": "initial"
  });
});

const listTitle = document.getElementById("list_title");
list_title.innerHTML = listItems[i].title;
const listBody = document.getElementById("list_body");
list_body.innerHTML = listItems[i].body;
const itemNo = document.getElementById("item_no");
item_no.innerHTML = i + 1;

nextBtn.addEventListener("click", function() {
  i += 1;
  list_title.innerHTML = listItems[i].title;
  list_body.innerHTML = listItems[i].body;
  item_no.innerHTML = i + 1;
});
backBtn.addEventListener("click", function() {
  i -= 1;
  list_title.innerHTML = listItems[i].title;
  list_body.innerHTML = listItems[i].body;
  item_no.innerHTML = i + 1;
});
resetBtn.addEventListener("click", function() {
  i = 0;
  importance3Count = 0;
  importance2Count = 0;
  importance1Count = 0;
  list_title.innerHTML = listItems[0].title;
  list_body.innerHTML = listItems[0].body;
  item_no.innerHTML = 1;
  $(".btn").css({
    "opacity": "0.4",
    "pointer-events": "none"
  });
  listItems.forEach(function(value) {
    delete value.importance;
  });
});

$(".btn").click(function(){
  if (i === 8)
  alert("lll")
})

})