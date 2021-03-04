import React, {Component} from 'react'

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [
                {}
            ]
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(
                response => response.json()
            )
            .then(
                data => consecuencia(data)
            )
            .catch(
                error => console.log(error)
            )
    }

    updateData = (data) => {
        console.log(data)
        this.setState({
            categories: data.data
        }) 
    }


    componentDidMount(){
        console.log('me monte')
        this.apiCall('http://127.0.0.1:3000/api/data/categories', this.updateData)
    }
    

    // componentDidUpdate(){
    //     console.log('me actualice')
    //     this.apiCall('http://127.0.0.1:3000/api/data/categories', this.updateData)
    // }
    
    render(){
        return (
            this.state.categories.map((data) =>         
                <div class="col-lg-6 mb-4">
                    <div class="card bg-info text-white shadow">
                        <div class="card-body">
                            {data.name}
                        </div>
                    </div>
                </div>
            )
        )
    }
}
  
export default Category;