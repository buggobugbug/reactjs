import React from 'react';

class MyComponent extends React.Component {
/* jsx return về một Block (một khối) 
FRAGMENT mãnh vỡ, chứa nhiều block nhưng không báo lỗi
*/

    state = {
        name: 'Huy',
        channel: 'ABS '
    }

    handleOnchangeName = (event) =>{
        this.setState({
            name: event.target.value 
        })
    }

    render() {
    

        

        return (
            
            <div className='first-class'>
                
                <input value={this.state.name} type='text' onChange={(event) => this.handleOnchangeName(event)}>
                    
                </input>
                {console.log('My name is', this.state.name )}    
                hello my component {this.state.name}, my channel is {this.state.channel}
                
            </div>
        )
    }
}


export default MyComponent;


/* dùng {} để export nhiều component */