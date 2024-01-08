import React,{Component} from 'react'


export default class Class extends Component{
    constructor(){
        super()
        this.state={count:0}
    }
    handleCLick=(val)=>{
        this.setState({count:this.state.count+val})
    }
    render() {
      return (
        <>
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={()=>{this.handleCLick(1)}}>+</button>
        <button onClick={()=>{this.handleCLick(-1)}}>-</button>
        <button onClick={()=>{this.handleCLick(-this.state.count)}}>RESET</button>
        </>
      )
    }
}
