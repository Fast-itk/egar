import React from 'react'

const Alert = ({message, type}) => {

    let cls = ['alert']
    if (type === 'success') {
        cls.push('alert-success')
    } else {
        cls.push('alert-danger')
    }
    return (
        <div class={cls.join(' ')} role="alert">
            { message }
        </div>
    )
    
}

export default Alert