/**
  *
  * main() will be invoked when you Run This Action.
  *
  */

function main(params) {
    var myName;  
    myName = params.name;›
    if (myName == undefined)
        myName = "";     
return {

        html: "<b>" + JSON.stringify(params) + "</b>",

        js: "alert('hello " + myName + "');"

    };

}
