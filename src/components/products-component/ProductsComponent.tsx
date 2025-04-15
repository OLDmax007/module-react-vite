import {getProducts} from "../../services/api.dmjs.service.ts";
import {useEffect, useState} from "react";
import {ProductModel} from "../../models/ProductModel.ts";
import ProductComponent from "./ProductComponent.tsx";

const ProductsComponent = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        (async () => {
            setProducts(await getProducts());
        })();


        return () => {
            console.log('completed')
        }

    }, []);


    return (
        <div className={'grid grid-cols-4 gap-4'}>
            {products.map((product:ProductModel) => (
                <ProductComponent product={product} key={product.id}/>
            ))}
        </div>
    );
};

export default ProductsComponent;