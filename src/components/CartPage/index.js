import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Table from "../Table"

const CartPage = () => {
  const items = useSelector((state) => state.items)
  const [subTotal, setSubTotal] = useState(0.0)
  const [total, setTotal] = useState(0.0)
  const shipping = 10.0

  useEffect(() => {
    let totals = items.map((item) => {
      return item.quantity * item.details.price
    })
    setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0))
    setTotal(subTotal + shipping)
  }, [items, subTotal, total])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm cart">
            <Table items={items} />
          </div>
          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Commande</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Sous-total</li>
                  <li className="text-right">€{subTotal.toFixed(2)}</li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">Livraison</li>
                  <li className="text-right">€{shipping.toFixed(2)}</li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> >> Ajouter coupon</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left">Total</li>
                  <li className="text-right">
                    €{subTotal === 0.0 ? "0.00" : total.toFixed(2)}
                  </li>
                </ul>
              </li>
            </ul>
            <Link
              to="/checkout"
              className={`white btn btn-light btn-lg btn-block checkout ${
                !items.length && "disabled"
              } bg-crimson`}
            >
              Confirmer Panier
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage
