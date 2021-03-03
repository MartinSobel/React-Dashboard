import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Status extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: [
                {
                    'titulo':'Products in Data Base',
                    'cifra':'',
                    'color':'primary',
                    'icono':'fa-clipboard-list'
                },
                {
                    'titulo':'Amount in products',
                    'cifra':'',
                    'color':'success',
                    'icono':'fa-dollar-sign'
                },
                {
                    'titulo':'Users quantity',
                    'cifra':'',
                    'color':'warning',
                    'icono':'fa-user-check'
                }
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
        this.setState({
                status: [
                    {
                        'titulo':'Products in Data Base',
                        'cifra': data.data.totalProducts,
                        'color':'primary',
                        'icono':'fa-clipboard-list'
                    },
                    {
                        'titulo':'Carts quantity',
                        'cifra': data.data.totalCarts,
                        'color':'success',
                        'icono':'fa-dollar-sign'
                    },
                    {
                        'titulo':'Users quantity',
                        'cifra': data.data.totalUsers,
                        'color':'warning',
                        'icono':'fa-user-check'
                    }
                ]
        }) 
    }

    componentDidMount(){
        console.log('me monte')
        this.apiCall('http://127.0.0.1:3000/api/data/status', this.updateData)
    }

    componentDidUpdate(){
        console.log('me actualice')
        this.apiCall('http://127.0.0.1:3000/api/data/status', this.updateData)
    }

    render() {
        return(
            this.state.status.map((data) =>
                <div className="col-md-4 mb-4">
                    <div className={`card border-left-${data.color} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-${data.color} text-uppercase mb-1`}>{data.titulo}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{data.cifra}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas ${data.icono} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }
}

Status.defaultProps = {
    titulo: "Faltan las PROPS!!",
    cifra:  "Faltan las PROPS!!",
    color:  "Faltan las PROPS!!",
    icono:  "Faltan las PROPS!!"
}

Status.propTypes = {
    titulo: PropTypes.string.isRequired,
    cifra: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['primary', 'success', 'warning']).isRequired,
    icono: PropTypes.oneOf(['fa-clipboard-list', 'fas fa-dollar-sign', 'fas fa-user-check']).isRequired
}

export default Status;