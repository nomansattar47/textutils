import React from 'react'

function Toast(props) {
  return (
   
    props.toast && (
        <div
          className={`toast align-items-center text-bg-${props.toast.type} border-0`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{props.toast.message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      )
   
  )
}

export default Toast
