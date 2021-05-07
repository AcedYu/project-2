var cardTemplateArea = $('#unknown')


const viewCardCollection = async (event) => {

  var currentPlayerId = 1

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });


  const res = await response.json();



  console.log (res.cards.length)
  
  for (var i = 0 ; i<res.cards.length;i++){

  }



}     


function addToDeck(){
 
  
  const response = await fetch(`/api/deck/addcard`, {
    method: 'POST',
    body: JSON.stringify({ deck_id, card_id  }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(response)


  const res = await response.json();
  console.log(res);
  
  for (var i = 0; i<response.length;i++){
    let cardViewDiv = $('<div>');
    let cardTemplate = $(`
    <div id="card-1" class="card card-play">
        <img id="card-1-img" src="..." class="card-img-top" alt="...">
        <div id="card-1-body" class="card-body">
        <h5 id="card-1-title" class="card-title">${userData.deck.cards[1].name}</h5>
        </div>
        <ul id="card-1-list" class="">
        <li id="card-1-attack" class="list-item"><i class="fad fa-swords me-2"></i>{{Attack}}</li>
        <li id="card-1-faction"  class="list-item"><i class="fad fa-eye-evil me-2"></i>${userData.deck.cards[1].name}</li>
        </ul>
        <div id="card-1-footer" class="card-footer">
        <small id="card-1-id" >${userData.deck.cards[1].name}</small>
        </div>
    </div>`)
    cardViewDiv.append(cardTemplate)
  }




  



}


function removeFromDeck(){

  const response = await fetch(`/api/deck/addcard`, {
    method: 'DELETE',
    body: JSON.stringify({ deck_id, card_id  }),
    headers: {
      'Content-Type': 'application/json',
    },
  });



  const res = await response.json();
  console.log(res);
}