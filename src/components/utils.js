import React from 'react';

export function textInput(field) {
  return <input
    type='text'
    placeholder={field}
    name={field}
    value={this.state.data[field]}
    onChange={this.handleChange}
  />;
}

export function numberInput(field) {
  return <input
    placeholder={field}
    type='number'
    name={field}
    value={this.state.data[field]}
    onChange={this.handleChange} />;
}

export function notesInput() {
  return <textarea
    name='notes'
    placeholder='notes'
    value={this.state.data.notes}
    onChange={this.handleChange}
  />;
}

export function localInput() {
  return <input name='local' type='checkbox' checked={this.state.data.local} onChange={this.handleChange} />;
}

export function handleChange(e) {
  const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
  this.setState({
    data: { ...this.state.data, [e.target.name]: value }
  });
}

export const IconButton = ({ handler, icon }) => {
  return (
    <button onClick={handler}>
      <i className={`fa fa-${icon}`}></i>
    </button>
  );
}

export const IconSpinner = ({ className = '' }) => {
  return (
    <div className={className}>
      <i className="fa fa-circle-o-notch fa-spin"></i>
    </div>
  );
}

export const ColumnTitle = ({ className = '', title }) => {
  return (
    <div className={className}>
      <p>{title}</p>
    </div>
  );
}

