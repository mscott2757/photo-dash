import React, { Component } from 'react';

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      stock: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = () => {
    let { name, stock } = this.state;
    this.props.handleCreate({ name, stock });
  }

  render() {
    return (
      <div className={'product' + (this.props.formIsVisible ? '' : ' product--hidden')}>
        <div className='row'>
          <div className='section product__section'>
            <input placeholder='name' type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className='section product__section'>
            <input placeholder='stock' type='number' name='stock' value={this.state.stock} onChange={this.handleChange} />
          </div>
          <div className='section product__section'>
            <div className='actions'>
              <div className='action'>
                <button onClick={this.handleSubmit}><i className="fa fa-save"></i></button>
              </div>
              <div className='action'>
                <button onClick={this.props.toggleForm}><i className="fa fa-times"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProduct;
