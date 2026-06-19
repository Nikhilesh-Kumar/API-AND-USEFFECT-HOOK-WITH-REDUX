import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";


function Details(){
    let {id} = useParams();
    let [product, setProduct] = useState({});
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((product)=>{
            setProduct(product.data);
        })
    }, [id])
    
    const dispatch = useDispatch();
    function handleAddToCart(){
        dispatch(addToCart(product))
    }

    return(
        <>
            <div className="mt-14 w-[700px] mx-auto bg-neutral-50 p-4 mb-14">
                <div className="flex gap-15">
                    <img className="h-56 w-[300px] object-contain my-auto" src={product.image} alt="" />
                    <div className="">
                        <h1 className="text-xl font-semibold">{product.title}</h1>
                        <h1 className="my-2 text-neutral-800 text-xs pr-28">{product.description}</h1>
                        <p className="my-2 text-xs font-semibold">Rs {Math.floor((product.price)*80)}</p>
                        <div className="flex gap-4 mt-4">
                            <button className="border border-black bg-black text-white py-3 px-5">Purchase Now</button>
                            <button className="border border-black bg-white text-black py-3 px-5">Add to Wishlist</button>
                            <button onClick={handleAddToCart} className="border border-black bg-white text-black py-3 px-5">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Details;