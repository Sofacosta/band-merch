import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const { item } = props;
  let name;
  let description;
  let quantity;

  if (item !== undefined) {
    name = item.name;
    description = item.description;
    quantity = item.quantity;
  }

  return (
    <React.Fragment>
    < form onSubmit={props.formSubmissionHandler}>
      <input
      type='text'
      name='name'
      defaultValue={name}
      placeholder='Name' />
    <input
      type='text'
      name='description'
      defaultValue={description}
      placeholder='Description' />
    <input
      type='number'
      name='quantity'
      defaultValue={quantity}
      placeholder='Quantity' />
    <button type='submit'>{props.buttonText}</button>
  </form>
  </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  item: PropTypes.object 
};

export default ReusableForm;