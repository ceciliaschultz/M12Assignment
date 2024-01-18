// M12 Assignment
// Maria Cecilia Schult
// Practice with JavaScript OOP Concepts

// STEP 1
// Create two classes, one called Cat and another called Dog. 
// Both classes should be created using constructor syntax.
// The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.
function Cat() {
}
const Dog = function() {
}

// STEP 2
// Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
let simba = new Cat()
let fido = new Dog()

// STEP 3
// Create a new class using constructor syntax called Animal.
// Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window.
//
function Animal() {
    console.log('The Animal has been created')
}


// STEP 4
//Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window.
// The message should be passed into the constructor at the moment that the Animal class is instantiated.
//
function Animal(message) {
    console.log(`${message}`)
}


// STEP 5
//Start over and now create a new class using constructor syntax called Animal. 
// Define five properties within your class including properties type, breed, color, height, and length. 
// These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor,
// set the properties, and then pass in the actual values during the object’s instantiation.
//
function Animal(type, breed, color, height, len) {
    this._type = type
    this._breed=breed
    this._color=color
    this._height=height
    this._len=len
}
let silky = new Animal('cat','Siamese','black',8.5,12)

// STEP 6
//Use a for-in loop to loop through and display all of the properties in the Animal class.
// You should see a total of 5 properties displayed in a list within the console window.
// ** STEP 6 uses the class defined in STEP 5 **
//
var props = Object.getOwnPropertyNames(silky)
for (let i=0; i<props.length; i++) {
    console.log(`${props[i]}`)
}

// STEP 7
//Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created.
// If it’s a dog, return “The <color> dog is barking!” 
// If it’s a cat return “The <color> cat is meowing!” instead. 
// Call that method after the Animal class has been instantiated.
//
function Animal(type, breed, color, height, len) {
    this._type = type
    this._breed=breed
    this._color=color
    this._height=height
    this._len=len

    this.speak= function() {
        let action = this._type == 'dog' ? 'barking!' : 'meowing!'
        return `The ${this._color} ${this._type} is ${action}`
    }
}
let silky = new Animal('cat','Siamese','black',8.5,12)
let baloo = new Animal('dog','Labrador', 'golden',17, 22)
console.log(silky.speak())
console.log(baloo.speak())

// STEP 8
// Now, convert all of your properties to private properties. 
// Then, create a private method called checkType(). 
// In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. 
// Then, create a privileged method called speak that returns the value of the checkType() method. 
// The console window should now display “The <animal type> has made a noise!”
//
function Animal(type, breed, color, height, len) {
    let _type = type
    let _breed=breed
    let _color=color
    let _height=height
    let _len=len

    let checkType = function() {
        return _type 
    }

    this.speak= function() {
        return `The ${checkType()} has made a noise!`
    }
}

let silky = new Animal('cat','Siamese','black',8.5,12)
let baloo = new Animal('dog','Labrador', 'golden',17, 22)
console.log(silky.speak())
console.log(baloo.speak())


// STEP 9
//Create your own String method called findWords that inherits from the native String Object. 
// This method should find all instances of a specific word within a provided paragraph of text. 
// It should then alert out to the user the number of time that word was found in the paragraph. 
// Remember, you’ll need to add your method to the String object’s prototype
String.prototype.findWords= function(word) {
    let pattern=new RegExp(word,'g')
    let count = (this.match(pattern) || []).length
    return count
}

let text = getTextInput('Enter text')
let word=getTextInput('Enter word to search for')
alert(`You entered: ${text}\nNumber of occurrences of \'${word}\' is: ${text.findWords(word)}`)

function getTextInput(message) {
    let text = prompt(`${message}: `).trim()
    return text
  }
  