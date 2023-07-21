
import { minHeight } from '@mui/system';
import { Select } from 'antd';
import { useState } from 'react';
const OPTIONS = [
    'Text',
    'Video Call',
    'Phone Call',

];





const Antselect = ({ setFormData, value, formData }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    const handleChange = (selectedValues) => {
        setSelectedItems(selectedValues);
        setFormData({ ...formData, ["contactvia"]: selectedValues });
    };



    return (
        <Select
            mode="single"
            placeholder="Please Select the Option"
            value={selectedItems}
            onChange={handleChange}
            style={{
                minWidth: '200px',
                padding: "8px",
                minHeight: "40px",

            }}
            className="my-selectContactVia"
            // inputHeight={300}
            options={filteredOptions.map((item) => ({
                value: item,
                label: item,
            }))}
        />
    );
};
export default Antselect;