//Тоглогчийн ээлжийг хадгалах хувьсагч, 1р тоглогч 0, 2р тоглогч 1
var activePlayer=0;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores=[0,0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаарай буухыг хадгалах хувьсагч хэрэгтэйь 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;


//Програм эхлэхэд бэлтгэе.
document.getElementById('score-0').textContent =scores[0];
document.getElementById('score-1').textContent = scores[1];

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

var diceDom = document.querySelector(".dice");

diceDom.style.display= "none";

// Шоог шидэх эвент листенер
document.querySelector('.btn-roll').addEventListener("click", function(){
    // санамсаргүй тоо гаргах 1 - 6
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display= "block";
    // буусан шооны зургийг гаргах
    diceDom.src = 'dice-' + diceNumber + '.png';
    
    //буусан тоо 1-ээс ялгаатай бол идвэхтэй тоглогчийн ээлжийн оноог нэмнэ. 
    if(diceNumber !== 1 ){
        //1-ээс ялгаатай бол буусан тоог нэмж өгнө.
        roundScore += diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else{
        //1тэй тэнцүү бол тоглогчийн ээлжийн оноог энэ хэсэгт солж өгнө. 
        switchToNextPlayer();
    }

    

});

document.querySelector('.btn-hold').addEventListener("click", function(){
    scores[activePlayer] += roundScore;
    
    document.getElementById('score-' + activePlayer).textContent =scores[activePlayer];

    
    if(scores[activePlayer] >= 10){
        //ялагч гэсэн текстийг нэрний оронд гарна.
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
    } else
    switchToNextPlayer();
    
})

function switchToNextPlayer(){
    document.getElementById("current-"+activePlayer).textContent = 0;
        roundScore = 0;

    //улаан цэгийг шилжүүлэх
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");

    // Шоог түр арилгах
    diceDom.style.display= "none";
    document.getElementById('score-' + activePlayer).textContent =scores[activePlayer];
    activePlayer = 1 - activePlayer;

    diceDom.style.display = "none";



}
// шинэ тоглоом эхлүүлэх товч
document.querySelector('.btn-new').addEventListener("click",function(){
    scores = [0,0]
    roundScore=0;
    document.getElementById('score-0').textContent =scores[0];
    document.getElementById('score-1').textContent = scores[1];

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;    

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    if(activePlayer === 0){
         document.getElementById("name-" + activePlayer).textContent = "PlAYER 1";
    } else {
        
        document.getElementById("name-" + activePlayer).textContent = "PlAYER 2";
        activePlayer = 0;
    }
    
    

    diceDom.style.display = "none";
})


