// Fizzbuzz function
function fizzbuzz(n){
    for(let i = 0; i <= n; i++){
        if(i % 15 === 0){
            console.log("fizzbuz")
        }
        else if(i % 5 === 0){
            console.log("fizz")
        }
        else if(i % 3 === 0){
            console.log("buzz")
        }
        else{
            console.log(i)
        }
    }
}
fizzbuzz(20)