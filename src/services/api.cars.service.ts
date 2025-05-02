import axiosInstance from "./axiosInstance.ts";
import {CarModel} from "../models/CarModel.ts";
import {FormDataModel} from "../models/FormDataModel.ts";

const apiCarService = {
    getAllCars: async () => {
        return  (await axiosInstance.get<CarModel[]>('/cars')).data
    },
    createCar: async (formData: FormDataModel):Promise<FormDataModel> => {
        return  (await axiosInstance.post<FormDataModel>('/cars', formData)).data
    },
}

export default apiCarService