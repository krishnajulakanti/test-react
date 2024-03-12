import React from 'react'

export const GroceriesList = (props) => {
  console.log(props.products);
  return (
    <div>
      <h1>GroceriesList</h1>
      <ProductsTable products={props.products}/>
    </div>
  )
}

function ProductCategoryRow(props) {
  return (
    <tr>
      <th>{props.category}</th>
    </tr>
  )
}

function ProductRow(props) {
  const name = props.stocked ? props.name : <span style={{color: 'red'}}>{props.name}</span>
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  )
}

function ProductsTable(props) {
  console.log(props.products, "1");

  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if(product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category}/>
      )
    }
  });

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
}

export default GroceriesList