import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import Navbar from '../../shared/Navbar/Navbar';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-10 mt-10'>
                <div className="card  glass">
                    <div className="card-body">
                        <h2 className="card-title flex items-center gap-x-2"> <FaQuestion className='mb-16 h-9 w-9' /> What are the different ways to manage a state in a React application?</h2>
                        <p>  There are Four kinds of state to manage. <br />1. Local state. <br />2. Global state. <br />3. Server state. <br /> 4.URL state.</p>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <div className="card-body">
                        <h2 className="card-title flex items-center gap-x-2"> <FaQuestion className='mb-16 h-9 w-9' />How does prototypical inheritance works?</h2>
                        <p> The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
                    </div>
                </div>
                <div className="card  glass">
                    <div className="card-body">
                        <h2 className="card-title flex items-center gap-x-2"><FaQuestion className='mb-12 h-6 w-6' />What is a unit test?Why should we write unit tests?</h2>
                        <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br />Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently. </p>
                    </div>
                </div>
                <div className="card glass">
                    <div className="card-body">
                        <h2 className="card-title flex items-center gap-x-1"><FaQuestion className='mb-5 h-6 w-6' />React vs Angular vs Vue?</h2>
                        <p> <strong>Angular:</strong> has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                            <br />
                            <strong>React:</strong> offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries.
                            <br />
                            <strong>Vue:</strong>provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;