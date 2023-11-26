const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
};
  
const showDiscountedPrice = (discountedPrice) => {
    console.log(`Дисконтна ціна: ${discountedPrice}`);
};
  
calculateDiscountedPrice(100, 10, showDiscountedPrice);