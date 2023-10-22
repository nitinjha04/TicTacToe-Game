import React from "react";

const Square = ({value,handleClick}) => {
  return (
    <div onClick={handleClick} style={{border: '1px solid', height: '100px', width: '100%', alignItems: 'center', display:'flex', justifyContent:'center' , fontSize: '5rem'}}>
      <h5>{value}</h5>
    </div>
  );
};

export default Square;
