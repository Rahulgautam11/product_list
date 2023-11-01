import './style.scss'
function Dropdown({ options, setInputValue, inputValue }) {

    const handleOptionChange = (e) => {
        let value = e.target.value;
        setInputValue({ ...inputValue, category: value });
    };

    return (
        <div className="dropdown_container">
            <select value={inputValue.category} onChange={handleOptionChange}>
                <option >Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

        </div>
    );
}

export default Dropdown;
