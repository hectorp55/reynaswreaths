"use client";
import { ProductColumn } from "@/app/models/column";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

interface ProductsQueryProps {
    orderField?: ProductColumn,
    isOrderAsc?: boolean
}

interface Product {
    name: string,
    price: number,
    image: string
}

async function fetchProducts({ queryKey }: QueryFunctionContext<[string, ProductsQueryProps | null | undefined]>): Promise<Product[]> {
    const [_key, props] = queryKey;
    const orderField = props?.orderField ?? "";
    const isOrderAsc = props?.isOrderAsc ?? "";

    const productsResponse = await fetch(`api/products?orderField=${orderField}&isOrderAsc=${isOrderAsc}`);
    if (!productsResponse.ok) {
        throw new Error('Problem with Products response');
    }
    const propertyData = await productsResponse.json();

    return propertyData;
}

export const useProductSheet = (orderField?: ProductColumn, isOrderAsc?: boolean) => {
    return useQuery({
        queryKey: ['products', {orderField, isOrderAsc}],
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 5 // 5 minutes cache
    });
}