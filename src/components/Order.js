import React, { Component } from 'react';
import OrderDetails from './OrderDetails';
import OrderName from './OrderName';
import OrderType from './OrderType';
import OrderActions from './OrderActions';

class Order extends Component {
  constructor(props) {
    super(props);
    let {
      name: { first, last },
      notes, address, city, state, zip, local, done
    } = props.order;
    this.state = {
      expanded: false,
      edit: false,
      data: {
        first, last, notes, done, address, city, state, zip, local,
      }
    }
  }

  toggleDetails = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit }, () => {
      if (!this.state.expanded) {
        this.setState({ expanded: true });
      }
    });
  }

  handleSubmit = () => {
    this.props.handleUpdate({ ...this.state.data, product: this.props.order.product._id });
    this.toggleEdit();
  }

  handleComplete= () => {
    console.log('complete called');
    this.props.handleUpdate({ ...this.state.data, product: this.props.order.product._id, done: true });
  }

  handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: value
      }
    });
  }

  textInput = (field) => {
    return <input type='text' placeholder={field} name={field} value={this.state.data[field]} onChange={this.handleChange} />
  }

  notesInput = () => <textarea name='notes' value={this.state.data.notes} onChange={this.handleChange} />;

  localInput = () => <input name='local' type='checkbox' checked={this.state.data.local} onChange={this.handleChange} />;

  render() {
    let {
      order: {
        product: { name: productName }, name, local, done, isFetching
      }, odd
    } = this.props;

    let productSection = <p>{productName}</p>;
    let statusSection = <p>{(done ? 'completed' : 'in progress')}</p>
    let nameSection = <OrderName edit={this.state.edit} name={name} textInput={this.textInput} />;
    let typeSection = <OrderType edit={this.state.edit} local={local} localInput={this.localInput} />;
    let actionsSection = <OrderActions
      done={done} edit={this.state.edit} expanded={this.state.expanded}
      toggleEdit={this.toggleEdit}
      toggleDetails={this.toggleDetails}
      handleSubmit={this.handleSubmit}
      handleComplete={this.handleComplete}
      handleRemove={this.props.handleRemove}
    />;

    let content = null;
    if (isFetching) {
      content = (
        <div className='row--fetching'>
          <div><i className="fa fa-circle-o-notch fa-spin"></i></div>
        </div>
      );
    } else {
      let sections = [ nameSection, productSection, typeSection, statusSection, actionsSection ];
      content = (
          <div className='row'>
            {sections.map((section, index) => <div key={index} className='section order__section'>{section}</div>)}
          </div>
      );
    }

    let details = null;
    if (this.state.expanded) {
      details = <OrderDetails
        edit={this.state.edit}
        handleChange={this.handleChange}
        textInput={this.textInput}
        notesInput={this.notesInput}
        order={this.props.order}
      />;
    }

    return (
      <div className={'order ' + (odd ? 'row--odd' : '')}>
        <div className='order__summary'>
          {content}
        </div>
        {details}
      </div>
    );
  }
}

export default Order;
