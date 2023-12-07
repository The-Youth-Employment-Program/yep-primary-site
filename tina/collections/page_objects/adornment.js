export default {
    name:"adornment",
    type:"object",
    ui:{
        itemProps (item) {return{label:item?.adornment_name || "Floating Object"}}
    },
    fields:[
    {
        name:"adornment_name",
        label:"Object Name",
        type:"string",
    },
    {
        name:"height",
        label:"Image Height",
        type:"string"
    },
    {
        name:"width",
        label:"Image Width",
        type:"string"
    },
    {
        name:"offset_x",
        label:"X Offset",
        type:"string"
    },
    {
        name:"offset_y",
        label:"Y Offset",
        type:"string"
    }
    //Add an animation string option list to select preset animations?
    ]
}
