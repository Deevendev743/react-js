// const Carlu = () => {
//   let cars = [
//     {
//       carname: "maybach",
//       image: "https://www.thrillinside.com/wp-content/uploads/2020/05/Mercedes-Maybach-GLS-9.jpg",
//       maxspeed: "speed = 420 kmph",
//     },
//     {
//       carname: "bmw",
//       image: "https://www.autotrader.com/wp-content/uploads/2021/06/2022-bmw-m4-driving.jpg?resize=747",
//       maxspeed: "speed = 430 kmph",
//     },
//     {
//       carname: "audi",
//       image: "https://besthqwallpapers.com/Uploads/19-4-2022/198268/audi-rsq8-r-abt-sportline-front-view-exterior-green-q8.jpg",
//       maxspeed: "speed = 300 kmph",
//     },
//     {
//       carname: "bugati",
//       image: "https://media.evo.co.uk/image/private/s--julLt06a--/v1556217571/evo/2017/08/bugatti_chiron_front_three_quarter.jpg",
//       maxspeed: "speed = 440 kmph",
//     },
//     {
//       carname: "tesla",
//       image: "https://www.hdwallpapers.in/download/tesla_roadster_sports_car-wide.jpg",
//       maxspeed: "speed = 440 kmph",
//     },
//   ];

//   let dimensions = {
//     height: 240,
//     width: 350,
//     marginLeft:"500px"
//   };
//   let headd = {
//     color: "green",
//     borderRadius: 12,
//     // backgroundColor: "lightgrey",
    
//   };
//   let headdd = {
//     color: "red",
//   };
//   let headddd = {
//     border: "2px solid gold",
//     height:"400px",
//     width:"400px",
//     borderRadius: 12,
//     marginTop:"-400px",
//     // marginLeft:"50px"

//   }

//   return (
//     <>
//       {cars.map((something) => (
//         <>
//           <h1 style={headd}>{something.carname}</h1>
//           <img style={headd} src={something.image} height={dimensions.height} width={dimensions.width} />
//           <h2 style={headdd}>{something.maxspeed}</h2>
//           <h3 style={headddd}></h3>
//         </>
//       ))}
//     </>
//   );
// };

// export default Carlu;



import React, { useState } from 'react';

const Product = ({ name, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const Appp = () => {
  return (
    <div>
      <Product name="Product 1" initialQuantity={0} />
      <Product name="Product 2" initialQuantity={5} />
      <Product name="Product 3" initialQuantity={10} />
    </div>
  );
};

export default Appp;
