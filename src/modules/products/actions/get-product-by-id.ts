import { tesloApi } from "@/api/TesloApi";
import { getProductImage } from './get-product-image';

export const getProductByID = async (productId:string)=>{

    try {
        const {data}=await tesloApi.get(`/products/${productId}`);
        return{
            ...data,
            images:data.images.map(getProductImage)
        }
    } catch (error) {
        console.log(error);
        throw new Error(`Error al obtener el producto por ID ${productId}`);
    }

};