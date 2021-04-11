export const WeightUnits = [
    { value: "oz", label: "oz"},
    { value: "lbs", label: "lbs"},
    { value: "g", label: "g"},
    { value: "kg", label: "kg"},
]

export const Frames = [
    { value: "Frame", label: "Frame" },
    { value: "Frameless", label: "Frameless" },
    { value: "Removable", label: "Removable" }
];

export const Hipbelts = [
    { value: "Hipbelt", label: "Hipbelt" },
    { value: "No Hipbelt", label: "No Hipbelt" },
    { value: "Removable", label: "Removable" }
]

export const WallTypes = [
    { value: "Single Wall", label: "Single Wall" },
    { value: "Double Wall", label: "Double Wall" },
];

export const Freestanding = [
    { value: "Freestanding", label: "Freestanding" },
    { value: "Semi-Freestanding", label: "Semi-Freestanding" },
    { value: "Non-Freestanding", label: "Non-Freestanding" }
];

export const ShoeTypes = [
    { value: "Trail Runners", label: "Trail Runners" },
    { value: "Hiking Shoes", label: "Hiking Shoes" },
    { value: "Hiking Boots", label: "Hiking Boots" }
]

export const Waterproof = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
]

export const EmptySelect = { value: "", label: ""}

export function convertWeight(weight, initialUnits, newUnits) {
    switch(initialUnits) {
        case 'g':
            switch(newUnits) {
                case 'g':
                    return weight;
                case 'kg':
                    return weight * 0.001;
                case 'oz':
                    return weight * 0.035274;
                case 'lbs':
                    return weight * 0.002205;
            }
        case 'kg':
            switch(newUnits) {
                case 'g':
                    return weight * 1000;
                case 'kg':
                    return weight;
                case 'oz':
                    return weight * 35.274;
                case 'lbs':
                    return weight * 2.20462;
            }
        case 'oz':
            switch(newUnits) {
                case 'g':
                    return weight * 28.3495;
                case 'kg':
                    return weight * 0.0283495;
                case 'oz':
                    return weight;
                case 'lbs':
                    return weight * 0.0625;
            }
        case 'lbs':
            switch(newUnits) {
                case 'g':
                    return weight * 453.592;
                case 'kg':
                    return weight * 0.453592;
                case 'oz':
                    return weight * 16;
                case 'lbs':
                    return weight;
            }
    }
}

export function multiExactFilter(filterVal, data, name) {
    if (filterVal.length !== 0) {
        return data.filter(item => {
            console.log(filterVal);
            console.log(item);
            return filterVal.includes(item[name])
        });
    }
    return data;
}