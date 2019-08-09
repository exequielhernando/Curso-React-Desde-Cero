import React, { Component } from 'react';

const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component{
        
        constructor(props){
            super(props)
        }

        render(){
            console.log(this.props);
            
            return this.props[propValue].length === 0 
            ? <h1 className="t3"> Loading . . .</h1>
            : <WrappedComponent {...this.props}/>
        }
    }
}
export default withLoader;