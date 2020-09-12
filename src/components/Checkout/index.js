import React, { Fragment, useState, useEffect } from "react"
import "../../app/styles/app.css"

export const Checkout = () => {
  const [isValid, setValid] = useState(false)

  const validate = () => {
    let errors = []
    const inputs = document.querySelectorAll(".from-control")
    inputs.forEach((input) => {
      !input.value ? errors.push(input) : errors.length && errors.pop()
    })
    setValid(!errors.length)
  }

  useEffect(() => {
    validate()
  })

  return (
    <Fragment>
      <div className="col-sm-6 offset-3">
        <h2>Checkout</h2>
        <br />
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Prénom"
                property=""
                defaultValue=""
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                property=""
                defaultValue=""
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              property=""
              defaultValue=""
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Adresse"
              property=""
              defaultValue=""
            />
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Code Postal"
                property=""
                defaultValue=""
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Ville"
                property=""
                defaultValue=""
              />
            </div>
          </div>
          <br />

          <a
            href="/"
            className={`white btn btn-light btn-lg btn-block checkout  ${ !isValid && "disabled"} bg-crimson `}
          >
              
            Valider
          </a>
        </form>
      </div>
    </Fragment>
  )
}
