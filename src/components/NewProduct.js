import React, { Component } from 'react';
import { IconButton, textInput, numberInput, handleChange } from './utils';

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        stock: '',
        price: ''
      }
    }
    this.textInput = textInput.bind(this);
    this.numberInput = numberInput.bind(this);
    this.handleChange = handleChange.bind(this);
  }

  handleSubmit = () => {
    this.props.handleCreate(this.state.data);
  }

  render() {
    return (
      <div className={'product' + (this.props.formIsVisible ? '' : ' product--hidden')}>
        <div className='row'>
          <div className='section product__section'>
            {this.textInput('name')}
          </div>
          <div className='section product__section'>
            {this.numberInput('stock')}
          </div>
          <div className='section product__section'>
            {this.numberInput('price')}
          </div>
          <div className='section product__section'>
            <div className='actions'>
              <div className='action'>
                <IconButton handler={this.handleSubmit} icon='save' />
              </div>
              <div className='action'>
                <IconButton handler={this.props.toggleForm} icon='times' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProduct;
