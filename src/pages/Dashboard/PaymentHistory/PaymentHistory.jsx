 import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
        
    })
    console.log('user paynebt khujete hbei', user , 'payment:::' ,payments)
    return (
        <div>
            <SectionTitle
                subHeading={"At a Glance!"}
                heading={"PAYMENT HISTORY"}
            ></SectionTitle>

            <h2 className="my-10 font-medium text-2xl"> Total Payments: {payments.length}</h2>
                
             <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full ">
                        <thead className="text-xl bg-[#D1A054]  text-white"> 
                            <tr>
                                <th>No</th>
                                <th>EMAIL</th>
                                <th>TRANSACTION ID</th>
                                <th>TOTAL PRICE</th>
                                <th> DATE</th>
                            </tr>
                        </thead>
                        <tbody className="font-medium">
                            {payments.map((payment, ind) => <tr key={payment._id}>
                                <th>{ind + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.price}</td>
                                <td>{payment.date}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div> 
        </div>
    );
};

export default PaymentHistory; 

