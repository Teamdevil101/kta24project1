console.log(foo);
var foo = 'Foo'

function Foobar(input)
{
    return foo + input
}

let bar = Foobar("bar");
console.log(bar);

let fizzbuzz = function (amount)
{
    for (let i = 0; i < amount; i++) {
        
        let result = "";
        if(i % 3 == 0)
            result += "Fizz";
        if(i % 5 == 0)
            result += "Buzz";
        
        if(i == 0 || result == "")
            result = i;
        
        console.log(result);
    }

    return "Done!";
}

let person = {
    name: 'Alex',
    age: 9,
    occupation: 'Domestic Terrorist',
    die: () => {
        return "dead";
    }
}

console.log(fizzbuzz(24));
console.log(person);