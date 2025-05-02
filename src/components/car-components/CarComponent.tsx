import {CarModel} from "../../models/CarModel.ts";
import {FC} from "react";

type CarComponentProps = {
    car: CarModel
}

const CarComponent:FC<CarComponentProps> = ({car}) => {
    return (
        <ul className={'list-disc'}>
            <li>{car.id}</li>
            <li>{car.brand}</li>
            <li>{car.year}</li>
            <li>{car.price}</li>
        </ul>

    );
};

export default CarComponent;