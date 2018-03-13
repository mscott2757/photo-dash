import React, { Component } from 'react';
import OrderDetails from './OrderDetails';
import OrderName from './OrderName';
import OrderType from './OrderType';
import OrderActions from './OrderActions';
import ContentFetching from './ContentFetching';
import DeleteConfirmation from './DeleteConfirmation';

class Order extends Component {
  constructor(props) {
    super(props);
    let {
      name: { first, last },
      notes, address, city, state, zip, local, done
    } = props.order;
    this.state = {
      data: { first, last, notes, done, address, city, state, zip, local },
      expanded: false, edit: false, confirm: false
    }
  }

  toggleDetails = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  toggleConfirm = () => {
    this.setState({ confirm: !this.state.confirm });
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
    this.props.handleUpdate({ ...this.state.data, product: this.props.order.product._id, done: true });
  }

  handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      data: { ...this.state.data, [e.target.name]: value }
    });
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

  notesInput = () => <textarea name='notes' value={this.state.data.notes} onChange={this.handleChange} />;

  localInput = () => <input name='local' type='checkbox' checked={this.state.data.local} onChange={this.handleChange} />;

  render() {
    let {
      order: {
        product: { name: productName }, name, local, done, isFetching
      }, odd, handleDelete
    } = this.props;
    let { edit, expanded, confirm } = this.state;
    const { handleChange, textInput, notesInput, toggleConfirm, toggleDetails,
      toggleEdit, handleSubmit, handleComplete, localInput } = this;

    let content = null;
    if (isFetching) {
      content = <ContentFetching isFetching={isFetching} />
    } else {
      const actionsProps = {
        done, edit, expanded, toggleDetails, toggleEdit, handleSubmit, handleComplete, toggleConfirm
      };
      const sections = [
        <OrderName {...{ edit, name, textInput }} />,
        <p>{productName}</p>,
        <OrderType {...{ edit, local, localInput }} />,
        <p>{(done ? 'completed' : 'in progress')}</p>,
        <OrderActions {...actionsProps} />
      ];
      content = (
        <div className='row'>
          {sections.map((section, index) => <div key={index} className='section order__section'>{section}</div>)}
        </div>
      );
    }

    const confirmationProps = { odd, confirm, handleDelete, toggleConfirm };
    const detailsProps = { edit, expanded, handleChange, textInput, notesInput, order: this.props.order }
    return (
      <div className={'order ' + (odd ? 'row--odd' : '')}>
        <DeleteConfirmation {...confirmationProps} />
        <div className='order__summary'>
          {content}
        </div>
        <OrderDetails {...detailsProps} />
      </div>
    );
  }
}

export default Order;
