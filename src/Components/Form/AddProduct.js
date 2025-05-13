import React, { Component } from 'react';
import "./AddProduct.css"
class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      name_category: 'Thời trang nam',
      code: '',
      image: '',
      price: '',
      old_price: '',
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === 'image' && event.target.files.length > 0) {
      value = URL.createObjectURL(event.target.files[0]);
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: this.props.id,
      name: this.state.name,
      name_category: this.state.name_category,
      code: this.state.code,
      image: this.state.image,
      price: this.state.price,
      old_price: this.state.old_price,
    };

    this.props.onAddProduct(newProduct);
    this.setState({
      name: '',
      name_category: 'Thời trang nam',
      code: '',
      image: '',
      price: '',
      old_price: '',
    });
  };

  render() {
    return (
      <>
        <h3>Thêm sản phẩm</h3>
        <form id="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              placeholder="Dép"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="name_category">Category</label>
            <select
              className="form-control"
              id="name_category"
              name="name_category"
              value={this.state.name_category}
              onChange={this.handleChange}
            >
              <option value="Thời trang nam">Nam</option>
              <option value="Thời trang nữ">Nữ</option>
            </select>
          </div>

          {/* Code */}
          <div className="form-group">
            <label htmlFor="code">Code</label>
            <input
              className="form-control"
              id="code"
              name="code"
              placeholder="XXXXXXX"
              value={this.state.code}
              onChange={this.handleChange}
            />
          </div>

          {/* Image */}
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          {/* Price */}
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              id="price"
              name="price"
              placeholder="10000"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="old_price">Old price</label>
            <input
              className="form-control"
              id="old_price"
              name="old_price"
              placeholder="1500"
              value={this.state.old_price}
              onChange={this.handleChange}
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary mb-2" id="submit">
            Save
          </button>
        </form>
      </>
    );
  }
}

export default AddProduct;
