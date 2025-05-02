import {useForm} from "react-hook-form";
import {FormDataModel} from "../../models/FormDataModel.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "../../validators/car.validator.ts";
import onSubmit from "../../utils/form.utils.ts";

const FormComponent = () => {
    const {register, handleSubmit, formState: {errors, isValid}}  = useForm<FormDataModel>(
        {mode: 'all',
        resolver: joiResolver(carValidator)}
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Brand:
                <input type="text" {...register('brand')} />
            </label>
            {errors.brand && <p>{errors.brand.message}</p>}
            <label>
                Price:
                <input type="number" {...register('price')} />
            </label>
            {errors.price && <p>{errors.price.message}</p>}
            <label>
            Year:
                <input type="number" {...register('year')} />
            </label>
            {errors.year && <p>{errors.year.message}</p>}

            <button disabled={!isValid} type='submit'>Confirm</button>
        </form>
    );
};

export default FormComponent;
