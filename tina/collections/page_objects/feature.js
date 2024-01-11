export default {
    name: "features",
    label: "Features",
    type: "object",
    list: true,
    fields: [
        {
            name:"feature",
            label:"Feature",
            list:true,
            type:"object",
            ui:{
                itemProps (item) { return {label:item?.featureName || "Feature"}}
            },
            fields: [
                {
                    name:"featureName",
                    label:"Feature Name",
                    type:"string"
                },
                {
                    name:"featureImage",
                    label:"Feature Image",
                    type:"image"
                },
                {
                    name:"featureText",
                    label:"Feature Text",
                    type:"string",
                    ui:{ component:"textarea" }
                },
                {
                    name:"featureLink",
                    label:"Page Link",
                    type:"string" // change this to option populated by "Page Content" collection. list: false
                },
                {
                    name:"featureSubtext",
                    label:"Feature Subtext",
                    type:"string"
                }
            ]
        },
    ]
}