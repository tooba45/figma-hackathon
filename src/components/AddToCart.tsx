// "use client"

// import {useState} from "react";



// const AddToCartButton = ({ product} : {product : any}) =>{
//     const {addToCart} = useCart();
//     const [showNotification, setshowNotification] = useState(false);

//     const handleAddToCart = () => {
//         addToCart ({
//         id: product._id,
//         name : product.title,
//         price : product.price.toFixed(2),
//         image: product.imageUrl,
//         quantity : 1,
//     });
   
//     setshowNotification(true);
//     setTimeout(() => setshowNotification(false), 3000); //hide after 30 sec
//     };

//     return(
//         <div className="relative">
//             <button onClick={handleAddToCart}
//             className="w-full bg-indigo-600 text-white"></button>
//         </div>
//     )
// }