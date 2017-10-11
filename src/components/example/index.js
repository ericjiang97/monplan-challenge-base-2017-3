import React from 'react'
import 'whatwg-fetch'

class ExampleComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            data: {}
        }
    }

    componentWillMount(){
        fetch("http://monplan-api-dev.appspot.com/units/FIT3080")
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                this.setState({
                    data: data
                })
            })
    }

    render(){
        const { data } = this.state
        const { unitName, unitCode, description } = data
        return(
            <div style={{width: '80%', textAlign: 'center'}}>
                <h1>{unitCode} - {unitName}</h1>
                <p>{description}</p>
            </div>
        )
    }
}

export default ExampleComponent