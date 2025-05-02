import {useEffect, useState} from "react";
import apiCarsService from "../../services/api.cars.service.ts";
import {CarModel} from "../../models/CarModel.ts";
import CarComponent from "./CarComponent.tsx";

const CarsComponent = () => {
    const [cars, setCars] = useState<CarModel[]>([])

    useEffect(() => {
        const fetchCars = async () => {
            setCars(await apiCarsService.getAllCars())
        }
        fetchCars()
    }, []);

    return (

        <div className={'grid grid-cols-10 gap-6 p-4'}>
            {cars.map((car: CarModel, index)=> (
                <div>
                    <h3>Car {index + 1}</h3>
                    <CarComponent car={car}/>
                </div>

            ))}
        </div>
    );
};

export default CarsComponent;