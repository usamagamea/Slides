let imgs=Array.from(document.querySelectorAll(".item img")) ;
let lightBoxContainer = document.getElementById("lightBoxContainer");
let lightBoxItem =document.getElementById("lightBoxItem");
let nextBtn =document.getElementById("next");
let prevBtn =document.getElementById("prev");
let closeBtn =document.getElementById("close");
let currentIndex=0;

for (let i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener("click", function(eventInfo){
        currentIndex=imgs.indexOf(eventInfo.target);
        // console.log(currentIndex);
        let imgSrc =eventInfo.target.getAttribute("src");
        lightBoxItem.style.backgroundImage ="URL("+imgSrc+")";
        lightBoxContainer.style.display="flex";
    })
}
function nextSlide(){
    currentIndex++;
  if ( currentIndex==imgs.length) {
        
        currentIndex=0;
    }
    let imgSrc= imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage ="URL("+imgSrc+")";
}
function prevSlide(){
    currentIndex--;
  if ( currentIndex < 0) {
        
        currentIndex=imgs.length-1;//5
    }
    let imgSrc= imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage ="URL("+imgSrc+")";
}
function closeSlide() {
    lightBoxContainer.style.display="none";
}
nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);
closeBtn.addEventListener("click",closeSlide);



// let events=["click","mouseenter","mousemove"]
// for (let i = 0; i < events.length; i++) {
//     closeBtn.addEventListener(events[i],closeSlide);   
// }
//jquery
$('#services').animate({width:'100%'},2000);
$('#services').animate({height:'220vh'},2000,function () {
    $('#services h1').fadeIn(1000, function() {
        $('#services .col-md-4').slideDown(3000,function() {

            $('.caption').fadeIn(2000);
        })
    });
    
});

