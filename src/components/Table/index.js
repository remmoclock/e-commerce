import React from "react"
import Row from "../Row"

const Table = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th width={200}>Produit</th>
          <th width={100}>Référence</th>
          <th width={150}>Prix</th>
          <th width={150}>Quantité</th>
          <th width={200}>Total</th>
        </tr>
        {items.map((item, index) => {
          return <Row key={index} item={item} />
        })}
      </thead>
    </table>
  )
}

export default Table
