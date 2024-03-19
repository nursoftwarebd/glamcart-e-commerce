import { createAsyncThunk } from "@reduxjs/toolkit";

export const allProduct = createAsyncThunk("products/getAllproducts", async()=>{
    try {
        const response = await fetch("https://project-nirvoya-server.vercel.app/products");
        return await response.json();
    } catch (error) {
        console.log(error);
    }
})
