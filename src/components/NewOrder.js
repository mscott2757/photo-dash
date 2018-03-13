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
      data: { ...this.state.data, [e.target.name]: value }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleSubmit = () => {
    this.props.handleCreate(this.state.data);
  }

  textInput = (field) => {
    return <input
      type='text'
      placeholder={field}
      name={field}
      value={this.state.data[field]}
      onChange={this.handleChange}
    />;
  }

  productOptions = () => {
    return this.props.products.filter(({ stock }) => stock > 0 );
  }

  notesInput = () => <textarea name='notes' value={this.state.data.notes} onChange={this.handleChange} />;

  localInput = () => <input name='local' type='checkbox' checked={this.state.data.local} onChange={this.handleChange} />;

  render() {
    let { first, last, local, product } = this.state.data;
    const { textInput, localInput, notesInput, handleSubmit, handleChange } = this;
    const { toggleForm, formIsVisible } = this.props;
    const sections = [
      <OrderName {...{ name: { first, last }, textInput }} />,
      <select name='product' value={product} onChange={handleChange}>
        {this.productOptions().map(({ _id, name }) =>  <option value={_id} key={_id}>{name}</option> )}
      </select>,
      <OrderType {...{ local, localInput }} />,
      <p>in progress</p>,
      <OrderActions {...{ handleSubmit, toggleEdit: toggleForm }} />
    ];
    return (
      <div className={'order' + (formIsVisible ? '' : ' order--hidden')}>
        <div>
          <div className='row'>
            {sections.map((section, index) => <div key={index} className='section order__section'>{section}</div> )}
          </div>
        </div>
        <OrderDetails {...{ handleChange, textInput, notesInput }} />
      </div>
    )
  }
}

export default NewOrder;
