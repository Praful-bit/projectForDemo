/* eslint-disable react/prop-types */



function CartItem(props) {

  return (
    <div>
      <div className="mb-4 border-b border-gray-300 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold mb-2">{props.tshirt}</p>
            <p className="mb-2">
              ${props.price} * {props.numberOfItems} = ${props.price * props.numberOfItems}
            </p>          
          </div>
          <div className="flex items-center">
            <button
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2"
              onClick={props.handleDecrease}
            >
              -
            </button>
            <button
              className="bg-green-500 text-white px-3 py-1 rounded-full mr-2"
              onClick={props.handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
