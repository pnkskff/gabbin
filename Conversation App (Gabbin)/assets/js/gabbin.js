document.querySelector('#kanyeButton').addEventListener('click', stoictalk)
document.querySelector('#excuserButton').addEventListener('click', excuserTalk)
document.querySelector('#gabbinButton').addEventListener('click', gabbintalk)
document.querySelector('#corporateButton').addEventListener('click', corporateTalk)
document.querySelector('#techyButton').addEventListener('click', techyTalk)

function stoictalk(){

    fetch('https://api.kanye.rest')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.textSpace1').innerText = data.quote
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function excuserTalk(){

    fetch('https://excuser.herokuapp.com/v1/excuse')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      document.querySelector('.textSpace1').innerText = data[0].excuse
    })
    .catch(err => {
        console.log(`error ${err}`)
      });
     }

function gabbintalk(){
    fetch('https://api.aakhilv.me/fun/facts')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      document.querySelector('.textSpace1').innerText = data
    })
    .catch(err => {
        console.log(`error ${err}`)
      });
    }

function corporateTalk(){
    fetch('https://corporatebs-generator.sameerkumar.website/')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      document.querySelector('.textSpace1').innerText = data.phrase
    })
    .catch(err => {
        console.log(`error ${err}`)
      });
    }

function techyTalk(){
    fetch('https://techy-api.vercel.app/api/json')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      document.querySelector('.textSpace1').innerText = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
      });
    }
