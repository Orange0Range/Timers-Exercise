function countDown(num){
    console.log(num);                       
    if(num===0){                                //If arg num is 0, display 'Done!' immediately and exit without calling setTimeout function again. 
        return console.log('"Done!"');
    }
    setTimeout(countDown, 1000,num-1);          //If the number is not 0, call function again with num-1
}


function randomGame(){
    let count = 0;
    let id = setInterval(findNumber, 1000);     //Keep track of id to clear interval.
    function findNumber(){
        count ++;                               
        if(Math.random() > .75){                //Clear ID and return num of tries if rand num is greater than .75
            clearInterval(id);
            return console.log(count);
        }
    }
}

