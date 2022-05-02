let secret = "12d"; //our string to be found
let charactersList ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"; //all possible characters

//below class loops around each letter in 'charactersList' string.

class eachLetter{
    constructor(l){
        this.l=l;
    }
     //incriment method:
    incriment(){
     //this if statement returns true when it reaches the last character of charactersList
        if(this.l < charactersList.length-1){
            this.l++;
            return true;

        }
        
        //this else statement returns false when 'l' , therefore characterList's length -1 
        //is equal to 0.

        else{
            this.l=0;
            return false;

        }

    }
   //value method with 'get' keyword to bind an object property to the function (look: getter):
    get value(){
        return charactersList[this.l];
    }
}
//below class is for trying to guess the string. 
class phrase{
    constructor(){
        //If class 'eachLetter' returns 'false / 0' , add this to an array.

        this.letters= new Array(new eachLetter(false));
    }
    //below method does a try-catch. Try the for loop, if it doesn't work add the value to the array where it returns false
    incriment(){
        try{
            for(let i = 0; this.letters[i].incriment()==false; i++){}
        }catch(err){
       this.letters.push(new eachLetter(false));
        }
    }
       //below is a value method with 'get' keyword to bind an object property to the function (look: getter):
    get value(){
        let out = "";        //sets variable 'out' as a string, 
        for(let i of this.letters){   //for loop gets the 'i' from letters object and adds upon the value of variable 'out' value of 'i'
            out += i.value;
        }
        //returns the value of variable 'out'
        return out;
    }
}

//calling the 'phrase' class
x = new phrase();
let i = 0; //i is set to zero
while(x.value !=secret){ //this while loop runs as long as variable 'out' of class 'phrase' is not equal (!=) to the value of our secret phrase / string to be found
    console.log("trying..."); //informing the user that we are still trying to guess
    x.incriment(); //calling the incriment method from phrase class
    i++; //increasing value of variable i
}
//printing the attempt number we found the secret phrase at + the secret phrase itself.
console.log("Attempt no: ",i," | Found value: ",x.value);
