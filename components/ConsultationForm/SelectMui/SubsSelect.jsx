
// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
//             width:300 
//         }
//     }
// };

// const valueOptions = [
//     " Brand New  Channel with No Subscribers",
//     "Less than 1000",
//     "  1,000 - 10,000",
//     " 10,001 - 25,000",
//     " 25,001 - 50,000",
//     "   50,001 - 100,000",
//     "100,001 - 500,000",
//     " 500,001 - 1 Million",
//     "1 Million - 5 Million",
//     " 5 Million - 10 Million",

// ];

// export default function SelectSmall({ setFormData, value, formData }) {
//     const handleChange = (event) => {
//         const {
//             target: { value },
//         } = event;
//         setFormData({ ...formData, ["subs"]: value })

//     }



//     return (
//         <FormControl sx={{ minWidth: "280px", marginX: "auto" }} size="small">
//             <InputLabel id="demo-select-small-label">Subscribers</InputLabel>
//             <Select
//                 labelId="demo-select-small-label"
//                 id="demo-select-small"
//                 value={value}
//                 label="Subscribers"
//                 onChange={handleChange}
//                 required
//                 MenuProps={MenuProps}
//                 sx={{
//                     color: 'red',
//                     fontWeight: '300',

//                 }}
//             >
//                 {valueOptions.map((option) => (
//                     <MenuItem key={option} value={option}>
//                         {option}
//                     </MenuItem>
//                 ))}
//             </Select>
//         </FormControl>
//     );
// }

import { Select } from 'antd';
import { useState } from 'react';
const OPTIONS = [
    "Brand New  Channel with No Subscribers",
    "Less than 1000",
    "1,000-10,000",
    "10,001-25,000",
    "25,001-50,000",
    "50,001-100,000",
    "100,001-500,000",
    "500,001-1 Million",
    "1 Million-5 Million",
    "5 Million-10 Million",

]

const Antselect = ({ setFormData, value, formData }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    const handleChange = (selectedValues) => {
        setSelectedItems(selectedValues);
        setFormData({ ...formData, ['subs']: selectedValues });
    };



    return (
        <Select
            mode="single"
            placeholder="Please Select the Subscribers"
            value={selectedItems}
            onChange={handleChange}
            style={{
                minWidth: '200px',
                
            }}
            className="my-selectSubscribers"
            // inputHeight={300}
            options={filteredOptions.map((item) => ({
                value: item,
                label: item,
            }))}
        />
    );
};
export default Antselect;