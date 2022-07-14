import { createYield } from "typescript"


describe('API Json Object Iteration', ()=>{

    it('JSON objects', ()=>{

    //structure of json objects:

        //Object is always in {}, each object has key and it's value, it's can be strings or numbers
        cy.navigateToGoogle()
        //basic object
        const simpleObject = { "key": "value", "key2": "value2" }
        //array of values 
        const simpleArrayOfValues = [ "one", "two", "three"]
        //array of objects
        const arrayOfObjects = [ {"key": "value"},{"key2": "value2"},{"key3": "value3"}]
        //object with string and number
        const typesOfData = { "string": "this is string", "number": 13 }
        //combain the types of data
        const mixedData = {
            "FirstName": "andrew",
            "LastName": "scottt",
            "Age": 25,
            "Students": [
                {
                    "firstName": "Nina",
                    "secondName": "Parker"
                },
                {
                    "firstName": "Petya",
                    "secondName": "Harison"
                }
            ]

        }
        
        //option 1 to call your object and get your values(data) from the object
        console.log(simpleObject.key2)
        //option 2
        console.log(simpleObject["key2"])
        //get the data from array
        console.log(simpleArrayOfValues[1])
        //get the value from the array of objects
        console.log(arrayOfObjects[2].key3)
        //get data from mixed object
        console.log(mixedData.Students[0].firstName)

        const firstName = mixedData.Students[0].firstName 
        const secondName =  mixedData.Students[0].secondName
        const fullNameOfTheStudent = firstName+' '+secondName
        console.log(fullNameOfTheStudent)
    })

})