import styles from "../../styles/orders.add.module.css";
import { useForm } from 'react-hook-form';
import data from '../../data/data'

const addOrder = () => {
     const { register, handleSubmit, errors, reset } = useForm();

     let save = async (values) => {

         console.log(values);
         const response = await data.saveOrder(values);
         console.log(response);
         if(response != null){
             reset();

         }

     }

    return(
        <>
            <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Add a new order</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.section_title}>
                            Order Items
                        </div>
                        <div className={styles.user_input_box}>
                                                    <label htmlFor="name">Item Name</label>
                                                    <input type="text"
                                                           id="name"
                                                           name="name"
                                                           {...register('name',
                                                               {required: true,
                                                                   message: 'please enter an Item name' })}
                                                           placeholder="Enter Item Name"/>
                                                </div>
                        <div className={styles.user_input_box}>
                                                                            <label htmlFor="quantity">Quantity</label>
                                                                            <input type="number"
                                                                                   id="quantity"
                                                                                   name="quantity"
                                                                                   {...register('quantity',
                                                                                       {required: true,
                                                                                           message: 'please enter the quantity of item' })}
                                                                                   placeholder="Enter Quantity"/>
                                                                        </div>
                        <div className={styles.user_input_box}>
                                                                                                    <label htmlFor="price">Price</label>
                                                                                                    <input type="number"
                                                                                                           id="price"
                                                                                                           name="price"
                                                                                                           {...register('price',
                                                                                                               {required: true,
                                                                                                                   message: 'please enter the price of item' })}
                                                                                                           placeholder="Enter price"/>
                                                                                                </div>
                        <div className={styles.section_title}>
                            Shipping Address
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="shippingState">State</label>
                            <input type="text"
                                   id="shippingState"
                                   name="shippingState"
                                   {...register('shippingState',
                                       {required: true,
                                           message: 'please enter a State name' })}
                                   placeholder="Enter State Name"/>

                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="shippingCity">City</label>
                            <input type="text"
                                   id="shippingCity"
                                   name="shippingCity"
                                   {...register('shippingCity',
                                       {required: true,
                                           message: 'please enter a city name' })}
                                   placeholder="Enter City name"/>
                        </div>
                        <div className={styles.user_input_box}>
                                                    <label htmlFor="shippingPostalCode">Postal Code</label>
                                                    <input type="number"
                                                           id="shippingPostalCode"
                                                           name="shippingPostalCode"
                                                           {...register('shippingPostalCode',
                                                               {required: true,
                                                                   message: 'please enter a postal code' })}
                                                           placeholder="Enter Postal Code"/>
                                                </div>

                        <div className={styles.section_title}>
                             Payment Method
                        </div>
                        <div className={styles.user_input_box}>
                                                                            <label htmlFor="method">Payment Method</label>
                                                                            <input type="text"
                                                                                   id="method"
                                                                                   name="method"
                                                                                   {...register('method',
                                                                                       {required: true,
                                                                                           message: 'please enter a Payment Method' })}
                                                                                   placeholder="Enter Payment Method"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="number">Card Number</label>
                            <input type="number"
                                id="number"
                                name="number"
                                {...register('number',
                                    {required: true,
                                         message: 'please enter a Card Number' })}
                                placeholder="Enter Card Number"/>
                        </div>

                        <div className={styles.section_title}>
                                                    Billing Address
                                                </div>
                                                <div className={styles.user_input_box}>
                                                    <label htmlFor="billingState">State</label>
                                                    <input type="text"
                                                           id="billingState"
                                                           name="billingState"
                                                           {...register('billingState',
                                                               {required: true,
                                                                   message: 'please enter a State name' })}
                                                           placeholder="Enter State Name"/>

                                                </div>

                                                <div className={styles.user_input_box}>
                                                    <label htmlFor="billingCity">City</label>
                                                    <input type="text"
                                                           id="billingCity"
                                                           name="billingCity"
                                                           {...register('billingCity',
                                                               {required: true,
                                                                   message: 'please enter a city name' })}
                                                           placeholder="Enter City name"/>
                                                </div>
                                                <div className={styles.user_input_box}>
                                                                            <label htmlFor="billingPostalCode">Postal Code</label>
                                                                            <input type="number"
                                                                                   id="billingPostalCode"
                                                                                   name="billingPostalCode"
                                                                                   {...register('billingPostalCode',
                                                                                       {required: true,
                                                                                           message: 'please enter a postal code' })}
                                                                                   placeholder="Enter Postal Code"/>
                                                                        </div>
                        <div className={styles.section_title}>
                            Total Price
                        </div>
                        <div className={styles.user_input_box}>
                                <label htmlFor="total">Price Total</label>
                                <input type="number"
                                    id="total"
                                    name="total"
                                    {...register('total',
                                        {required: true,
                                            message: 'please enter a Price Total' })}
                                    placeholder="Enter Price Total"/>
                       </div>

                    </div>

                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="save" ></input>
                    </div>

                </form>
            </div>
            </div>
        </>
    )
}

export default addOrder;