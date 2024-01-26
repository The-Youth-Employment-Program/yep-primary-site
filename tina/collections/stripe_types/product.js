export default {
    name:"product",
    label: "Product",
    type:"object",
    fields:[
        {
            name:"productTitle",
            label:"Product Title",
            description:"Product description",
            type:"string",
            isTitle:true,
            required:true,
        },
        {
            name:"image",
            label:"Product image",
            type:"image",
            required:false,
        },
        // {
        //     name:"paymentType",
        //     label:"Payment Type",
        //     description:"Recurring or One-off",
        //     type:"boolean",
        //     required:true,
        // },
        {
            name:"amount",
            label:"Amount",
            description:"$0.00",
            type:"string",
            required:true,
        },
        {
            name:"billingPeriod",
            label:"Billing Period",
            description:"Timeline for recurring payment",
            type:"string",
            required:false,
        },
        {
            name:"stripeLink",
            label:"Stripe Payment Link",
            description:"Link to Stripe pyament page",
            type:"string",
            required:true,
        },
    ]
}