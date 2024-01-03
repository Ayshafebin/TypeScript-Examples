// Inference types-----------Implicit-----------

// var userName = 'Aysha';
// userName = 0 ==== idh error kanikkum
// var sub = 30

//Idhpoole bydefault aaytt ts nammukk type pararanj tharum.oro limit varee paranj tharollu.

// Defaining type----Type Annotation----------explicit----------

//idh type paranj kodth cheynadhaanu.

 var value:string = 'febi';
var ae:number = 20
var values : boolean = true;
var skills : string[] = ['js','css','ts'];
var count : number[] = [1,2,3,4,5];
var emptyArray : [] = [];
var obj : {} = {};
var object : {neme : string; age : number} = {
    neme : 'Aysha',
    age : 20
}

// Interface------------------------------------------

interface person {
    per : string;
    vayas : number;
    gob : string
}

var objj : person = {
    per : 'aysha',
    vayas : 20,
    gob : 'it' 
} 
console.log(objj);

//Array--------------------------

var arr : string[] = ['a','y','s'];
var arry : number[] = [1,2,3,4,5];
var array : (string | number)[] = [1,'s',5,'l'] ;
var arrayy : (string | number)[] = [1,2,'3',4,'8']; 

// Interface-----------------------------

interface personn {
    naamee : string;
    aagee : number;
    wrk : string
}

var obbjj : personn = {
    naamee : 'aaaayshaaa',
    aagee : 60,
    wrk : 'it'
}

//type----------------------------------

type pperson = {
    dfg : string;
    rty : number;
    iuy : string
}

var vaar : pperson = {
    dfg : 'sfdf',
    rty : 7888,
    iuy : 'sds'
}

//Functions--------------------------------

function getUsername(vaar:pperson){
    return vaar.rty
}
getUsername(vaar)






