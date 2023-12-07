export default {
    name:"left_image",
    label: "Left Image",
    type:"object",
    ui:{
        defaultItem:{main_text:"Lorem Ipsum",image:"/uploads/tina.jpeg"}
    },
    fields:[
        {
            label:"Text",
            name:"main_text",
            type:"string",
            ui:{ component: "textarea"}
        },
        {
            label:"Image",
            name:"image",
            type:"image",
            description:"This image will display to the left of the text",
        },
        {
            label:"Title",
            description:"optional",
            name:"title",
            type:"string"
        }
    ]
}
