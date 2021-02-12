import React from 'react'
import PropTypes from 'prop-types'

function Status(props) {
    return (
        props.data.map((data) =>
            <div class="col-md-4 mb-4">
                <div class="card border-left-${data.color} shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-${data.color} text-uppercase mb-1">{data.titulo}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{data.cifra}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas ${data.icono} fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    ));
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