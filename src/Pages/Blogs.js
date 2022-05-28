import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs-container text-center font-bold text-lg'>
            <h2 className='blogs-Ques'>Ques-1: How will you improve the performance of a React Application ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> Here are some ways that I can use for improving the performance of a React Application:
            To begin with, I would avoid inline functions as much as possible. I'll remember that immutability is the key to avoiding unwanted re-renderings.Hidden components like Modals and Dropdowns are always conditionally rendered.And finally I will always use multiple APIs at once
            </h2>
            <h2 className='blogs-Ques'>Ques-2: What are the different ways to manage a state in a React Application ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> In React, the state is an observable object that tracks changes to the state and governs the behavior of the component. If we update the state of any component, for example, the webpage will not re-render since React State will be unable to detect the changes. There are four forms of state that I must correctly handle in my React apps: Local state, global state, server state, and URL state are all examples of states.</h2>
            <h2 className='blogs-Ques'>Ques-3 : Why you do not set the state directly in React .For example,if you have const [products,setProducts]=useState([]) ? Why you do not set products = [...] instead,you set the setProducts.</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> Prototypes, which are other objects, inherit properties from JavaScript objects. The concept is prototypal inheritance. JavaScript looks for inherited attributes in the prototype of the object, as well as the prototype of the prototype, and so on along the prototype chain.</h2>
            <h2 className='blogs-Ques'>Ques-4 : How does prototypical inheritance work ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> Prototypes, which are other objects, are passed down to objects in JavaScript. This is the concept of prototypal inheritance. JavaScript looks for inherited attributes in the prototype of the object, as well as the prototype of the prototype, and so on.</h2>
            <h2 className='blogs-Ques'>Ques-5 : You have an array of products.Each object has a name,price,description,etc.How will you implement a search to find products by name ? </h2>
            <h2 className='blogs-Ans'><span>Ans:</span> If I have a list of products, each with a name, description, price, and so on. I'm going to use distuctering to search for products by name: For example, if I want to get a name, I'll use this approach. I'll use products.description to search for a description, and products.price to look for a price.</h2>
            <h2 className='blogs-Ques'>Ques-6 : What is a unit test ? Why should write unit tests ? </h2>
            <h2 className='blogs-Ans'><span>Ans:</span> If I have a list of products, each with a name, description, price, and so on. I'm going to use distuctering to search for products by name: JavaScript unit testing is a technique for writing JavaScript test code for a web page or web application module. It's then merged with HTML as an inline event handler and tested in the browser to see if all of the features function properly. These unit tests are then used to build the test suite.
            Unit testing guarantees that code meets quality criteria before it is deployed. This promotes a steady engineering environment where quality is prioritized. Unit testing helps developers produce better code faster and saves time and money during the product development life cycle.
            </h2>
        </div>
    );
};

export default Blogs;