import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();


const ShopContextProvider = (props) => {
const currency = '$';
const delivery_fee = 10;
const [search ,setSearch]= useState('');
const [showSearch, setShowSearch] = useState(false);
const [cartItems , setCartItems] = useState({});
const navigate = useNavigate();
 


// this methode to add the item in to cart. 
const addToCart = async (itemId, size) =>{

  if(!size){
    toast.error('Select Product Size');
    return;
  }
  let cartdata = structuredClone(cartItems);
  if(cartdata[itemId]){
      if(cartdata[itemId][size]){
        cartdata[itemId][size] += 1;
       
      }
      else {
        cartdata[itemId][size] = 1;
      }
      
  }
  else{
    cartdata[itemId] = {};
    cartdata[itemId][size] = 1;
  }
  setCartItems(cartdata);
  toast.success('Product Added to Your Cart');
}

// this methode is for to update the cart count. 
const getCartCount = () => {
  let totalCount = 0;
  for(const items in cartItems){
    for(const item in cartItems[items]){
      try {
        if(cartItems[items][item] > 0 ){
          totalCount += cartItems[items][item];
        }    
      }
      catch(error){

      }
    }
  }
  return totalCount;
}

//  this method work on cart page to update the quantity of cart item
const updateQuantity = async(itemId,size,quantity) => {
  let cartData = structuredClone(cartItems);
  cartData[itemId][size] = quantity;
  setCartItems(cartData);
  toast.success('Product Update in to Your Cart');
 

}

// this method is for to get the total amount of the cart. it will used on cart page and checkout page 
const getCartAmount = () => {
let totalAmount = 0; 
for(const items in cartItems){
  let itemInfo = products.find((product ) => product._id === items);
  for(const item in cartItems[items]){
    try {
      if(cartItems[items] [item] > 0){
        totalAmount += itemInfo.price * cartItems[items][item]
      }
    } catch (error) {
      
    }
  }
}
return totalAmount;
}



// this methode is use to pass the product details to components or pages
  const value = {
products, currency , delivery_fee,
search,setSearch,showSearch,setShowSearch,
cartItems,addToCart,
getCartCount,updateQuantity,getCartAmount, navigate
  }
  return (
    <ShopContext.Provider value={value} >
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;