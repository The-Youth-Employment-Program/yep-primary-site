export default {
    name:"testimonials",
    label: "Testimonials",
    list:true,
    type:"object",
    fields:[
        {
            name:"testimonial",
            label:"Testimonials",
            list:true,
            type:"object",
            ui:{
                itemProps (item) { return {label:item?.testimonial_attribution || "Quote"}}
            },
            fields:[
                {
                    label:"Quote",
                    name:"testimonial_quote",
                    type:"string",
                    ui:{ component: "textarea"}
                },
                {
                    label:"Name",
                    name:"testimonial_attribution",
                    type:"string"
                },
                {
                    label:"Role",
                    name:"testimonial_role",
                    type:"string"
                }
            ]
        }
    ]
}
