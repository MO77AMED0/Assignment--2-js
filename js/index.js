var list =[
    {
        quote: '" It,s not what happens to you, but how you react to it that matters." ',
        author:"--Epictetus",
    },

    {
        quote: '"The best revenge is massive success."',
        author:"----Frank Sinatra",
    },

    {
        quote: ' "Do not take life too seriously. You will not get out alive." ',
        author:"--Elbert Hubbard",
    },
    
    {
        quote: ' "You miss 100% of the shots you dont take." ',
        author:"--Wayne Gretzy",
    },
    {
        quote: '"Resentment is like drinking poison and waiting for your enemies to die."',
        author:"--Nelson Mandela",
    },
];

var newindex ;
var lastindex;

 var displayQuotes = []


function outPutQuotes(){

if(displayQuotes.length == list.length){
    displayQuotes=[];
}

    do {
        var newindex = Math.floor(Math.random()*list.length);

    } while (newindex == lastindex || displayQuotes.includes(newindex));
    lastindex = newindex;

    console.log(newindex);
    displayQuotes.push(newindex)

    document.getElementById('quote').innerHTML =list[newindex].quote
    document.getElementById('author').innerHTML =list[newindex].author
};































































// list=[]

// function test(){
//  x=[
//     y=outPut,
//     z=outPut2,
//  ]

//  list.push(x)
//  console.log(list);
// }
// test()
// display()


// function display(){
//     var cartoona= ``;
//     for(var i = 0 ; i <list.length; i++) {
//      cartoona+=` <p class="fs-1 d-block " id="outPut">"You miss 100% of the shots you don't take." </p>
//      <p class="fs-1 d-block" id="outPut-2">--Wayne Gretzy</p>`

//     }
// }

// outPut.innerHTML=cartoona;
// outPut2.innerHTML=cartoona;