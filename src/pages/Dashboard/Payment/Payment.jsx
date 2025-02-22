import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"please pay"}
                heading={"PAYMENT"}
            ></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;