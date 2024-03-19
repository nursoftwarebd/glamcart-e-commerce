const DiscountPrice = ({ price, discountPercentage }) => {
  // Calculate discounted price
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  // Return the discounted price
  return <span>৳{discountedPrice}</span>;
};

export default DiscountPrice;
