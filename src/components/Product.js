import React, { Component } from 'react';
import DeleteConfirmation from './DeleteConfirmation';

import { handleChange, IconButton } from './utils';

class Product extends Component {
  constructor(props) {
    super(props);
    let { name, stock, price } = this.props.product;
    this.state = {
      edit: false,
      confirm: false,
      data: { name, stock, price }
    }
    this.handleChange = handleChange.bind(this);
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  toggleConfirm = () => {
    this.setState({ confirm: !this.state.confirm });
  }

  handleSubmit = () => {
    this.props.handleUpdate(this.state.data);
    this.toggleEdit();
  }

  render() {
    const { product: { name, stock, price }, isFetching, handleDelete, odd } = this.props;
    let nameSection, stockSection, actionsSection, priceSection = null;
    let { edit, confirm } = this.state;
    if (edit) {
      nameSection = <input type='text' name='name' value={this.state.data.name} onChange={this.handleChange} />;
      stockSection = <input type='number' name='stock' value={this.state.data.stock} onChange={this.handleChange} />;
      priceSection = <input type='number' name='price' value={this.state.data.price} onChange={this.handleChange} />;
      actionsSection = (
        <div className='actions'>
          <div className='action'>
            <IconButton handler={this.handleSubmit} icon='save' />
          </div>
          <div className='action'>
            <IconButton handler={this.toggleEdit} icon='times' />
          </div>
        </div>
      );
    } else {
      nameSection = <p>{name}</p>;
      stockSection = <p>{stock}</p>;
      priceSection = <p>{price}</p>;
      actionsSection = (
        <div className='actions'>
          <div className='action'>
            <IconButton handler={this.toggleEdit} icon='edit' />
          </div>
          <div className='action'>
            <IconButton handler={this.toggleConfirm} icon='trash' />
          </div>
        </div>
      );
    }

    let content = null;
    if (isFetching) {
      content = (
        <div className={'row--fetching' + (odd ? 'row--odd' : '')}>
          <div><i className="fa fa-circle-o-notch fa-spin"></i></div>
        </div>
      );
    } else {
      let sections = [ nameSection, stockSection, priceSection, actionsSection ];
      content = (
        <div className={'row product ' + (odd ? 'row--odd' : '')}>
          {sections.map((section, index) => <div key={index} className='section product__section'>{section}</div>)}
        </div>
      );
    }

    const confirmationProps = { odd, confirm, handleDelete, toggleConfirm: this.toggleConfirm };
    return (
      <div className='product'>
        <DeleteConfirmation {...confirmationProps} />
        {content}
      </div>
    );
  }
}

export default Product;
