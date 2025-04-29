import React, { Component } from 'react';
import AddProduct from './AddProduct';
import './Thoitrang.css';

class Thoitrang extends Component {
  constructor(props) {
    super(props);

    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

    this.state = {
      products: savedProducts,
      id: savedProducts.length > 0 ? parseInt(savedProducts[savedProducts.length - 1].id) + 1 : 1,
      showForm: false,
    };
  }

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleAddProduct = (newProduct) => {
    const updatedProducts = [...this.state.products, newProduct];

    this.setState({
      products: updatedProducts,
      id: newProduct.id + 1,
      showForm: false,
    });

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    alert('Một sản phẩm đã được thêm vào!');
  };

  render() {
    return (
      <div className="container">
        <div className="addProduct">
          {!this.state.showForm && (
            <div className="col-12 mb-3">
              <button className="btn btn-success" onClick={this.handleShowForm}>
                Thêm sản phẩm
              </button>
            </div>
          )}


          {this.state.showForm && (
            <div className="col-sm-6">
              <AddProduct id={this.state.id} onAddProduct={this.handleAddProduct} />
            </div>
          )}

          <div className="col-sm-6">
            <h3>Danh sách sản phẩm</h3>
            {this.state.products.length === 0 && <p>Chưa có sản phẩm nào.</p>}

            <div className="row">
              {this.state.products.map((product) => (
                <div key={product.id} className="product-card">
                  <p><strong>Name:</strong> {product.name}</p>
                  <p><strong>Category:</strong> {product.name_category}</p>
                  <p><strong>Code:</strong> {product.code}</p>
                  <p><strong>Price:</strong> {product.price}</p>
                  <p><strong>Old Price:</strong> {product.old_price}</p>
                  {product.image && (
                    <img
                      src={product.image}
                      alt="Product"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Thoitrang;
