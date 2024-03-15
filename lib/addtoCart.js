"use client"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";


export const handleAddToCart = (item) => {
    const dispatch = useDispatch();
    dispatch(addToCart(item));

    toast.success("Added to cart", { position: "top-right", autoClose: 1700 });
  };