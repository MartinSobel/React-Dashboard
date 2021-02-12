import React from 'react'

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

            /* <div class="col-md-4 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">$546.456</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">38</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-user-check fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */
    ));
  }
export default Status;