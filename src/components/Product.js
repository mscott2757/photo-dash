import React, { Component } from 'react';
import DeleteConfirmation from './DeleteConfirmation';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      confirm: false,
      data: {
        name: this.props.product.name,
        stock: this.props.product.stock
      }
    }
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  toggleConfirm = () => {
    this.setState({ confirm: !this.state.confirm });
  }

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = () => {
    this.props.handleUpdate(this.state.data);
    this.toggleEdit();
  }

  render() {
    const { product: { name, stock }, isFetching, handleDelete, odd } = this.props;
    let nameSection, stockSection, actionsSection = null;
    let { edit, confirm } = this.state;
    if (edit) {
      nameSection = <input type='text' name='name' value={this.state.data.name} onChange={this.handleChange} />;
      stockSection = <input type='number' name='stock' value={this.state.data.stock} onChange={this.handleChange} />;
      actionsSection = (
        <div className='actions'>
          <div className='action'>
            <button onClick={this.handleSubmit}><i className="fa fa-save"></i></button>
          </div>
          <div className='action'>
            <button onClick={this.toggleEdit}><i className="fa fa-times"></i></button>
          </div>
        </div>
      );
    } else {
      nameSection = <p>{name}</p>;
      stockSection = <p>{stock}</p>;
      actionsSection = (
        <div className='actions'>
          <div className='action'>
            <button onClick={this.toggleEdit}><i className="fa fa-edit"></i></button>
          </div>
          <div className='action'>
            <button onClick={this.toggleConfirm}><i className="fa fa-trash"></i></button>
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
      let sections = [ nameSection, stockSection, actionsSection ];
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
