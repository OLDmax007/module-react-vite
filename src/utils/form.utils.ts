import apiCarService from "../services/api.cars.service.ts";
import {FormDataModel} from "../models/FormDataModel.ts";

const onSubmit = async (formData: FormDataModel) => {
        const res =  await apiCarService.createCar(formData);
        console.log(res)
};

export default onSubmit