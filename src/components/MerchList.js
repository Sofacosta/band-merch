import React from 'react';
import Item from "./Item";
import PropTypes from "prop-types";

function MerchList(props){
  return( 
    <React.Fragment>
      {props.merchList.map((item) => 
      <Item 
      whenItemClicked={props.onItemSelection}
      name={item.name}
      description={item.description}
      quantity={item.quantity}
      key={item.id}
      id={item.id} />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default MerchList;
