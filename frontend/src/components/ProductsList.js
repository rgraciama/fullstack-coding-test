import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductsList.css';

class ProductsListItem extends React.Component {
  render() {
    return (
      <div className="ProductsListItem">

        <div>
          <strong>
            {this.props.product.firstName} {this.props.product.lastName}
          </strong>
          <br />@{this.props.product.twitter}
          <br />
          {this.props.product.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchProducts(products) {
  const [query, setQuery] = React.useState('');
  const [filteredProducts, setfilteredProducts] = React.useState(products);

  React.useMemo(() => {
    const result = products.filter(product => {
      return `${product.firstName} ${product.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setfilteredProducts(result);
  }, [products, query]);

  return { query, setQuery, filteredProducts };
}

export function ProductsList(props) {
  const products = props.products;

  const { query, setQuery, filteredProducts } = useSearchProducts(products);

  if (filteredProducts.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Products</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No products were found</h3>
        <Link className="btn btn-primary" to="/products/new">
          Create new product
        </Link>
      </div>
    );
  }

  return (
    <div className="ProductsList">
      <div className="form-group">
        <label>Filter Products</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredProducts.map(product => {
          return (
            <li key={product.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/products/${product.id}`}
              >
                <ProductsListItem product={product} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsList;
