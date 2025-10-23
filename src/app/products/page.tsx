"use client"
import React from 'react';
import { useProductSheet } from '../hooks/queries/fetchProducts';
import Item from '../components/item/item';
import PageForm from '../components/page-form';
import { ProductColumn } from '../models/column';
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import Loading from '../components/loading';

function ProductsPage() {
    const [sortField, setSortField] = React.useState<ProductColumn | undefined>(ProductColumn.Price);
    const [isSortAsc, setIsSortAsc] = React.useState(true);
    const { data, isLoading } = useProductSheet(sortField, isSortAsc);

    const onFilterSelected = (value: string) => {
        const column = ProductColumn[value as keyof typeof ProductColumn];
        setSortField(column);
    }

    const nonSortableColumns = [ProductColumn.Image];
    
    return (
        <PageForm>
            <section className="flex flex-col p-10 gap-4">
                <section className="flex gap-4">
                    <h1>Sort: </h1>
                    <select name="myDropdown" id="myDropdown" onChange={(e) => onFilterSelected(e.target.value)}>
                        {Object.values(ProductColumn).map((column) => {
                            console.log(nonSortableColumns)
                            if (nonSortableColumns.includes(column)) return;
                            return <option key={column} value="column">{column}</option>
                        })}
                    </select>
                    <button onClick={() => setIsSortAsc((prev) => !prev)}>
                        {isSortAsc ? <IoArrowUpOutline/> : <IoArrowDownOutline/>}
                    </button>
                </section>
                {isLoading && <Loading/>}
                <section className="grid grid-cols-5 gap-4">
                    {!isLoading && data && data.map((product) => {
                        return <Item 
                        key={product.name} image={product.image} 
                        name={product.name} price={product.price}
                        className="">
                        </Item>
                    })}
                </section>
            </section>
        </PageForm>
    )
}

export default ProductsPage