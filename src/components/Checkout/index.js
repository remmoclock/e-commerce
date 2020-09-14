import React, { Fragment, useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { UserProfileContext } from "../../app/context/UserProfileContext"
import "../../app/styles/app.css"

export const Checkout = () => {
  const [isValid, setValid] = useState(false)
  const value = useContext(UserProfileContext)
  const {
    firstName,
    lastName,
    email,
    address,
    zipCode,
    city,
    setUserProfileContext,
  } = value

  const validate = () => {
    let errors = []
    const inputs = document.querySelectorAll(".form-control")
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
        <h2>Coordonnées</h2>
        <br />
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Prénom"
                property=""
                defaultValue={firstName}
                name="firstName"
                onChange={(e) =>
                  setUserProfileContext({ [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                property=""
                defaultValue={lastName}
                name="lastName"
                onChange={(e) =>
                  setUserProfileContext({ [e.target.name]: e.target.value })
                }
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
              defaultValue={email}
              name="email"
              onChange={(e) =>
                setUserProfileContext({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Adresse"
              property=""
              defaultValue={address}
              name="address"
              onChange={(e) =>
                setUserProfileContext({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Code Postal"
                property=""
                defaultValue={zipCode}
                name="zipCode"
                onChange={(e) =>
                  setUserProfileContext({ [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Ville"
                property=""
                defaultValue={city}
                name="city"
                onChange={(e) =>
                  setUserProfileContext({ [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
          <br />

          <Link
            to="/confirm"
            className={`white btn btn-light btn-lg btn-block checkout  ${
              !isValid && "disabled"
            } bg-crimson `}
          >
            Valider
          </Link>
        </form>
      </div>
    </Fragment>
  )
}
