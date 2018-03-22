import React, { Component } from 'react';
import OrderDetails from './OrderDetails';
import OrderName from './OrderName';
import OrderType from './OrderType';
import OrderActions from './OrderActions';
import DeleteConfirmation from './DeleteConfirmation';
import classNames from 'classnames';

import { IconSpinner, textInput, notesInput, localInput, handleChange } from './utils';

class Order extends Component {
  constructor(props) {
    super(props);
    let {
      name: { first, last },
      notes, address, city, state, zip, local, done, email
    } = props.order;
    this.state = {
      data: { first, last, notes, done, address, city, state, zip, local, email },
      expanded: false, edit: false, confirm: false
    }
    this.textInput = textInput.bind(this);
    this.notesInput = notesInput.bind(this);
    this.localInput = localInput.bind(this);
    this.handleChange = handleChange.bind(this);
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
      content = <IconSpinner className='row--fetching' />
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
    const orderClass = classNames('order', { 'row--odd': odd });
    return (
      <div className={orderClass}>
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
