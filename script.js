

const generateJoke =()=>{
//Api
const request = new XMLHttpRequest();

request.open('GET','https://official-joke-api.appspot.com/jokes/ten' ,true)
request.onload = function(){
    const data = JSON.parse(this.response)
    //console.log(data)

    //pick a random joke
    const item = data[Math.floor(Math.random() * data.length)]
    //console.log(item)
    document.getElementById('joke').innerHTML=`${item.setup}`
    document.getElementById('result').innerHTML=`${item.punchline}`
}

request.send();

}