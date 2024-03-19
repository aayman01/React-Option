import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions = [
      {
        id: 1,
        name: "Basic Membership",
        price: 30,
        features: [
          "Access to cardio machines",
          "Limited access to weight training area",
          "Group fitness classes included",
        ],
      },
      {
        id: 2,
        name: "Premium Membership",
        price: 50,
        features: [
          "Full access to cardio and weight training areas",
          "Access to all group fitness classes",
          "Personal training session included",
        ],
      },
      {
        id: 3,
        name: "Student Membership",
        price: 25,
        features: [
          "Access to cardio and weight training areas during off-peak hours",
          "Discounted rates for group fitness classes",
        ],
      },
      {
        id: 4,
        name: "Family Membership",
        price: 80,
        features: [
          "Access for up to 4 family members",
          "Full access to cardio and weight training areas",
          "Discounts on personal training sessions",
        ],
      },
      {
        id: 5,
        name: "Senior Membership",
        price: 20,
        features: [
          "Access to cardio machines",
          "Limited access to weight training area",
          "Specialized senior fitness classes included",
        ],
      },
      {
        id: 6,
        name: "Annual Membership",
        price: 300,
        features: [
          "Access to cardio and weight training areas",
          "Unlimited group fitness classes",
          "Free personal training session every 3 months",
        ],
      },
    ];


    return (
      <div className='m-12'>
        <h2 className="text-4xl mb-3">Best Prices in town</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {priceOptions.map((option) => (
            <PriceOption key={option.id} option={option}></PriceOption>
          ))}
        </div>
      </div>
    );
};

export default PriceOptions;