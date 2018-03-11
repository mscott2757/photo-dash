import React, { Component } from 'react';
import OrderName from './OrderName';
import OrderType from './OrderType';
import OrderActions from './OrderActions';
import OrderDetails from './OrderDetails';

class NewOrder extends Component {
  constructor(props) {
    super(props);
    let { products } = props;
    this.state = {
      data: {
        first: '',
        last: '',
        done: false,
        local: true,
        notes: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        product: products.length > 0 ? products[0]._id : ''
      }
    }
  }

  handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: value
      }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleSubmit = () => {
    this.props.handleCreate(this.state.data);
  }

  toggleEdit = () => {

  }

  textInput = (field) => {
    return <input type='text' placeholder={field} name={field} value={this.state.data[field]} onChange={this.handleChange} />
  }

  notesInput = () => <textarea name='notes' value={this.state.data.notes} onChange={this.handleChange} />;

  localInput = () => <input name='local' type='checkbox' checked={this.state.data.local} onChange={this.handleChange} />;

  render() {
    let { first, last, local, product } = this.state.data;
    let nameSection = <OrderName name={{first, last}} textInput={this.textInput} />;
    let productSection = (
      <select name='product' value={product} onChange={this.handleChange}>
        {this.props.products.map(({ _id, name }) =>  <option value={_id} key={_id}>{name}</option> )}
      </select>
    );
    let typeSection = <OrderType local={local} localInput={this.localInput} />;
    let statusSection = <p>in progress</p>;
    let actionsSection = <OrderActions handleSubmit={this.handleSubmit} toggleEdit={this.props.toggleForm} />;

    const sections = [nameSection, productSection, typeSection, statusSection, actionsSection];
    return (
      <div className={'order' + (this.props.formIsVisible ? '' : ' order--hidden')}>
        <div>
          <div className='row'>
            {sections.map((section, index) => <div key={index} className='section order__section'>{section}</div> )}
          </div>
        </div>
        <OrderDetails
          handleChange={this.handleChange}
          textInput={this.textInput}
          notesInput={this.notesInput}
        />
      </div>
    )
  }
}

export default NewOrder;
