//........Task1.........
function showMessage(){
    console.log("Hello, Welcome to the website!")
}
showMessage()

//........Task2.........
function countToTen(){
    for(i=1;i<=10;i++){
        console.log(i)
    }
}
countToTen();

//.......Task3..........
function multiplicationTable(){
    var num=2
    for(i=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num* i}`)
    }
}
multiplicationTable()

//........Task4.........
function showOddNumbers(){
    for(i=1;i<=10;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
showOddNumbers()

