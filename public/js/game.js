
var cardPlayer1Area = $('#play-card-group-1')
var startButton = $('#buttonStart')
var cardPlayer2Area = $('#play-card-group-2')
var userButton = $('#playUser')

var enemyAttack = 0
var userAttk = 0

const userList = async () => {
const response = await fetch(`/api/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


    const res = await response.json();
    var userNameArray = []
    for (var i = 0 ; i<res.length;i++){
        userNameArray.push(res[i].name)
    }

    console.log(userNameArray)

    for (var i = 0 ; i<userNameArray.length;i++){
        
        let listDiv = $('<div>');
        cardPlayer2Area.append(listDiv)
        
        let listTemplate = `
        <div id="buttonStart" class="list-group">
        <button type="button" id="${userNameArray[i]}" class="list-group-item list-group-item-action">${userNameArray[i]}</button>
        </div>`
        listDiv.on('click',start)
        listDiv.append(listTemplate)

    }


}




const game1 = async () => {
    
  var currentPlayerId = 2

      const response = await fetch(`/api/users/ ${currentPlayerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const res = await response.json();




          var deckNameArr = []
          var deckAttkArr = []
          var deckIMGArr = []
          var deckIdArr = []
          var deckFactionArr = []
        
          var randomNumberArray = []
        
          for (var i = 0; i<res.deck.cards.length; i++){

            randomNumberArray.push(i)
            deckNameArr.push(res.deck.cards[i].name)
            deckAttkArr.push(res.deck.cards[i].attack)
            deckIMGArr.push(res.deck.cards[i].image_url)
            deckIdArr.push(res.deck.cards[i].id)
            deckFactionArr.push(res.deck.cards[i].faction.name)
            
            randomNumberArray.push(i)

          }
            var number = 15 

            for (var i = 0; i<5; i++){
                
                var randomNumber15 = Math.floor(Math.random()*number)

                let cardDiv = $('<div>');
            
                cardPlayer1Area.append(cardDiv)
            
                let cardTemplate = $(`
                <div id="card-1" class="card card-play">
                    <img id="card-1-img" src="${deckIMGArr[randomNumber15]}" class="card-img-top" alt="photo">
                    <div id="card-1-body" class="card-body">
                    <h5 id="card-1-title" class="card-title">${deckNameArr[randomNumber15]}</h5>
                    </div>
                    <ul id="card-1-list" class="">
                    <li id="card-1-attack" class="list-item"><i class="fad fa-swords me-2"></i>${deckAttkArr[randomNumber15]}</li>
                    <li id="card-1-faction"  class="list-item"><i class="fad fa-eye-evil me-2"></i>${deckFactionArr[randomNumber15]}</li>
                    </ul>
                    <div id="card-1-footer" class="card-footer">
                    <small id="card-1-id" >${deckIdArr[randomNumber15]}</small>
                    </div>
                </div>`)
                cardDiv.append(cardTemplate)


                userAttk = userAttk + deckAttkArr[i]

                deckNameArr.splice(randomNumber15, 1);
                deckAttkArr.splice(randomNumber15, 1);
                deckIMGArr.splice(randomNumber15, 1);
                deckIdArr.splice(randomNumber15, 1);
                deckFactionArr.splice(randomNumber15, 1);
                randomNumberArray.splice(randomNumber15, 1);

                number--
           }
    console.log(`userAttk ${userAttk}`)
    
}     


const game2 = async () => {
    
  var currentPlayerId = 2

      const response = await fetch(`/api/users/${currentPlayerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const res = await response.json();




          var enemyNameArr = []
          var enemyAttackArray = []
          var enemyIMGArr = []
          var enemyIdArr = []
          var enemyFactionArr = []
            var randomNumberArray = []

        
          for (var i = 0; i<res.deck.cards.length; i++){

            randomNumberArray.push(i)
            enemyNameArr.push(res.deck.cards[i].name)
            enemyAttackArray.push(res.deck.cards[i].attack)
            enemyIMGArr.push(res.deck.cards[i].image_url)
            enemyIdArr.push(res.deck.cards[i].id)
            enemyFactionArr.push(res.deck.cards[i].faction.name)


          }
          var number = 15
            for (var i = 0; i<5; i++){
            
          var randomNumber15 = Math.floor(Math.random()*number)


                let cardDiv = $('<div>');
            
                cardPlayer2Area.append(cardDiv)
            
                let cardTemplate = $(`
                <div id="card-1" class="card card-play">
                    <img id="card-1-img" src="${enemyIMGArr[randomNumber15]}" class="card-img-top" alt="photo">
                    <div id="card-1-body" class="card-body">
                    <h5 id="card-1-title" class="card-title">${enemyNameArr[randomNumber15]}</h5>
                    </div>
                    <ul id="card-1-list" class="">
                    <li id="card-1-attack" class="list-item"><i class="fad fa-swords me-2"></i>${enemyAttackArray[randomNumber15]}</li>
                    <li id="card-1-faction"  class="list-item"><i class="fad fa-eye-evil me-2"></i>${enemyFactionArr[randomNumber15]}</li>
                    </ul>
                    <div id="card-1-footer" class="card-footer">
                    <small id="card-1-id" >${enemyIdArr[randomNumber15]}</small>
                    </div>
                </div>`)
                cardDiv.append(cardTemplate)

                
                enemyAttack = enemyAttack + enemyAttackArray[i]

                enemyNameArr.splice(randomNumber15, 1);
                enemyAttackArray.splice(randomNumber15, 1);
                enemyIMGArr.splice(randomNumber15, 1);
                enemyIdArr.splice(randomNumber15, 1);
                enemyFactionArr.splice(randomNumber15, 1);
                randomNumberArray.splice(randomNumber15, 1);

                console.log(enemyNameArr)
                number--
           }

        console.log(enemyAttack)

}     



function compare (){

    var messageWinOrLose = $('#diplayMessage')
  

    if (userAttk>enemyAttack){
        let message = $('<h2>');
        messageWinOrLose.append(message);
        let win = `<h2>Winner Winner Chicken Dinner!!!</h2>`

        message.append(win);


       
    }
    else{
        let message = $('<h2>');
        messageWinOrLose.append(message);
        let lose = `<h2>You Lose</h2>`

        message.append(lose);

} }
function reset (){
    
    var messageWinOrLose = $('#diplayMessage')

    enemyAttack = 0;
    userAttk = 0;
    cardPlayer1Area.empty();
    cardPlayer2Area.empty();
    messageWinOrLose.empty();
}

async function start (event){
    console.log(event)
    await reset()
    await game1()
    await game2()
    compare()

}

startButton.on('click',start)
userButton.on('click',start)

userList();

//possible: Each player has lifepoints, and players will keep drawing cards until the other players life points are diminished.
    // this can have an animation of lifepoints go down on each side
//hopefully: animate losers to side explode with different shapes
//possible: spell cards that will aplify certain factions attack points







