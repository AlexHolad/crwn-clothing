import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100
    const publishableKey = "pk_test_51KJf5WHB4FnDHneJK2IUyGQ0zKObZP2ccVjV4Wui08k6RONWdR5Z95Ayy8xuNQnlKpAxxutzOefAERG4i4RmCvqt00BM6wWjn8"
    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton