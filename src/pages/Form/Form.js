import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomHook } from '../CustomHook/CustomHook'
import useRazorpay from "react-razorpay";
import { DriverController } from '../../redux/controllers/DriverController';

export default function RegisterData() {

    const { formData, handleChange, handleSubmit } = CustomHook()

    const [Razorpay] = useRazorpay();

    const postData = () => {
        const data ={
            name:formData.name,
            password:formData.email,
            email:formData.password
        }
        console.log('data going',data)
        handleSubmit()
    }

    const razorPayPayment = async () => {
        const data = {
            amount: 12000,
        };

        const result = await DriverController.payment(data)
        console.log('result ', result)


        var options = {
            description: 'Purchase Description',
            currency: 'INR', // Change it based on your currency
            key: "rzp_test_DNDRtYFOQjaovg",
            description: "Payment",
            order_id: data.id,
            amount: result.data.amount, // Amount in paise (1 INR = 100 paise)
            name: "Jharanai",
            prefill: {
                email: 'testEmail@gmail.com',
                contact: '7852979518',
                name: 'Dinesh',
            },
            order_id: result.data.id,
            theme: { color: '#F37254' },
        };
        const rzp = new Razorpay(options);
        rzp.open();
      };
    return (
        <Container>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  value={formData.password} onChange={(e) => handleChange('password',e.target.value)}/>
                </Form.Group>

                <Button variant="primary"  onClick={postData}>
                    Submit
                </Button>
            </Form>

            <Button variant="primary"  onClick={() => razorPayPayment()}>
                    Submit
                </Button>


        </Container>
    )
}
