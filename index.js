const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
    const copyOfCats = [...cats, "Broom"]
  return copyOfCats
   
}

function prependCat(name){
    const copyOfCats = ["Arnold", ...cats]
    return copyOfCats
}

    function  removeLastCat(){
        const catz = cats.slice(0,cats.length-1)
       return catz
    }

    
    function  removeFirstCat(){
        const catz = cats.slice(1)
       return catz
    }