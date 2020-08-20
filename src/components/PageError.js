import React from 'react'

import './styles/PageError.css';

function PageError(props) {
    return <div className="PageError">
        <div class="alert alert-danger" role="alert">
            {props.error.message}
        </div>
    </div>
}

export default PageError;