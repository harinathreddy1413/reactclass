import React, { Component } from 'react';
import { DummyContext } from './Parent';

export default class ChildClass extends Component {
    render() {
        return (
            <DummyContext.Consumer>{
                data=>(
                    <div>
                <h2>this is the context we get from parent</h2>
                <h1>{data.place}</h1>
                    </div>
                )}

            </DummyContext.Consumer>
           
        )
    }
}
