// Lookup Tables

/* 
    Allow us to associate strings with a list of other values.

    It's quick and efficient.

    Ex: months { "January": ["Jan", 01, 1, "I"] }
*/

function getPoemTitle(authorUserSelect) {

    let poemTitlesByAuthor = {
        "Robert Frost": "Stopping by Woods on a Snowy Evening",
        "Shell Silverstein": "Falling Up",
        "Sylvia Plath": ["The Bell Jar", "Daddy", "Lady Lazarus"], 
    }

    return poemTitlesByAuthor[authorUserSelect]
}

console.log(getPoemTitle("Robert_Frost"))

// State Machine

/* 
    System with finite and defined states. States are just information. The information is reliant upon logic in order to transition or be reassigned.
*/

let states = {
    red: ["green", "yield"],
    yellow: ["red"],
    green: ["yellow"],
    yield: ["red"]
}

let currentState = "green"

// enterState takes new state
function enterState(newState) {
    // assigns values of states property that matches currentState to validTransitions
    let validTransitions = states[currentState]
    // if newState is found in validTransitions
    if (validTransitions.includes(newState)) {
        // set currentState variable to newState value
        currentState = newState
    } else {
        // throw error that current state does not have an option to transition to another state
        throw `Invalid state transition from ${currentState} to ${newState}`
    }
}

enterState("red")