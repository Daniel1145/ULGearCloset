import axios from 'axios';

export const Frames = [
    { value: "Frame", label: "Frame"},
    { value: "Frameless", label: "Frameless"},
    { value: "Removable", label: "Removable"}
];

export const Hipbelts = [
    { value: "Hipbelt", label: "Hipbelt"},
    { value: "No Hipbelt", label: "No Hipbelt"},
    { value: "Removable", label: "Removable"}
]

export const WeightUnits = [
    { value: "oz", label: "oz"},
    { value: "lbs", label: "lbs"},
    { value: "g", label: "g"},
    { value: "kg", label: "kg"},
];

export const EmptySelect = { value: "", label: ""}

export function getMaterials() {
    return axios.get('http://10.0.0.202:4000/backpacks')
        .then(res => {
            let materialsSet = new Set();
            let materials = [];
            res.data.forEach((item) => {
                let currMaterials = item.materials.split(', ');
                currMaterials.forEach((material) => {
                    if (!materialsSet.has(material)) {
                        materials.push({value: material, label: material});
                        materialsSet.add(material);
                    }
                })
            });
            return materials;
        })
        .catch(err => {
            console.log(err);
        }
    );
}

export function multiExactFilter(filterVal, data) {
    if (filterVal.length !== 0) {
        return data.filter(item => {
            console.log(filterVal);
            console.log(item);
            return filterVal.includes(item.hipbelt)
        });
    }
    return data;
}