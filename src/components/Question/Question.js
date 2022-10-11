import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question'>
            <h2>Question-1: Write difference between probs and state?</h2>
            <h4>Answer:</h4>
            <p>1. In props, the Data is passed from one component to another. In the state, The Data is passed within the component only.</p>
            <p>2. Props is Immutable (cannot be modified and state is Mutable ( can be modified).)</p>
            <p>3. Props can be used with state and functional components, and State can be used only with the state components/class component. </p>
            <p>4. Props are read-only. State is both read and write </p>

            <h2>Question-2: How useState works?</h2>
            <h4>Answer:</h4>
            <p>The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
        </div>
    );
};

export default Question;