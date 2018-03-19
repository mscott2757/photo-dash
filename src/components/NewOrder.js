import React, { Component } from 'react';
import OrderName from './OrderName';
import OrderType from './OrderType';
import OrderActions from './OrderActions';
import OrderDetails from './OrderDetails';
import { textInput, notesInput, localInput, handleChange } from './utils';

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
    this.textInput = textInput.bind(this);
    this.notesInput = notesInput.bind(this);
    this.localInput = localInput.bind(this);
    this.handleChange = handleChange.bind(this);
  }

  handleSubmit = () => {
    this.props.handleCreate(this.state.data);
  }

  productOptions = () => {
    return this.props.products.filter(({ stock }) => stock > 0 );
  }

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
