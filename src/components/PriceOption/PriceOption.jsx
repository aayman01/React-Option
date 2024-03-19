import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const {name, price, features} = option;
    return (
      <div className="bg-blue-500 rounded-xl text-white p-4 flex flex-col">
        <h2 className="text-center">
          <span className="text-7xl font-extrabold">{price}</span>
          <span className="text-2xl">/month</span>
        </h2>
        <h4 className="text-3xl text-center my-4">{name}</h4>
        <div className="pl-6 flex-grow">
          {features.map((feature, idx) => (
            <Feature key={idx} feature={feature}></Feature>
          ))}
        </div>
        <button className="mt-6 text-blue-500 bg-white w-full p-3 rounded-lg font-bold hover:bg-gray-200">Buy Now</button>
      </div>
    );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
