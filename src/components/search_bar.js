import React, { Component } from 'react'


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: '' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({term:event.target.value})}
                />
            </div>
        );
    }



}

export default SearchBar;



/*
components and classes
functional component = is a classic js function

class based component or class component = is used when you want the component to have
some internal record keeping. because the user is going to type into the input,
the component needs to have some records, because it is gonna change in time.
he has to tell the other components that the user wrote inside it and has to
communicate the changes that have been made.


EVENT HANDLERS
call all the event handler according to their usage.

to add an event handler, writ eit after the render's return and attach it to the
return element whom the event handler with.

"event or e" as OBJECT (it's called also "event object") = it describes the context or info that the event occurs. e

"this" keyword = when the event handler is used inside the component where it was
created, we use "this" to reference that event handler.
so it is gonna be: this.[event.handler]

--------
N.B. the above notes refers to the original version (before refactoring)
COMPONENT BEFORE REFACTORING:

class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        console.log(event.target.value);
    }

}


COMPONENT AFTER REFACTORING:

class SearchBar extends Component {
    render() {
        return <input onChange={(event) => console.log(event.target.value) } />;
    }
}

the event handler is put in the return statement.

--------

STATE = is plain js object that is used to record in
react user events. Each class we define has own state object.
whenever the component changes, it re-renders and change its
state.
before using state, we need to initialise it. we do it throguht the
the constructor object.
Every class in js have a special object called constructor.
the props inside the constructor is an object.
the constructor is the first and only function called
automatically when an instance of the class is created.
the constructor function is reserved for creating some setups
in class like initialising state.
whenever we call state we initialise a new object:

e.i.: this.state = {term: '' }

the object we pass has properties: (i.e. 'term'). whenever the object
re-render, the properties change.

we initialise state by defining the constructor.
updating the state is different from initialising.
to initialise it we use [ this.state = property:'' ]
thish is the oly time we write it in this way.
when we change it, we use the method "this.setState({term: event.target.value})"
we call "this.state.term" when we want to show the property
somewhere else. (if we write this.state.term somwwhere in the
rendering we see our changes.)

Controlled field/controlled input is a form field like input which value is
is set by state. our input changing tells the state how it
should be. the state should tell the input what the value should
be.
when we tell the input that the value is provided by this.state.term
we turn it ina controlled component. (it's value updates when its state updates)
this.setState says what is the value so it's important to have
the event handler that manage the action of changing value.
so in few words, when the user types something it's not the
value to change, but it's the even handler to trigger the
action.


continue on index.js


 */