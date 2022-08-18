import React, {useState} from 'react';

const FilterList = (props) =>{
    const [selectedOption, setSelectedOption] = useState();
    
    const handleOptionChange = (event) => {
        var range = event.target.value;
        setSelectedOption(event.target.value);
        let price;
        switch (range) {
        case '0':
            price = '0 & 500';
            break;
        case '1':
            price = '500 & 1000';
            break;
        case '2':
            price = '1000 & 1500';
            break;
        case '3':
            price = '1500 & 2000';
            break;
        case '4':
            price = '2000 & 10000';
            break;   
        default:  
            price = '0';  
            break;    
        }
        props.priceFilter(price);
    }

    return(
        <>
            <div className="card">
                <div className="card-header">
                    PRICE
                </div>
                <div className="card-body">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="priceFilter" id="priceFilter0" value="0" onChange={handleOptionChange} checked={selectedOption === '0'} />
                        <label className="form-check-label" htmlFor="priceFilter0">
                            Up to  £500
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="priceFilter" id="priceFilter1" value="1" onChange={handleOptionChange} checked={selectedOption === '1'}/>
                        <label className="form-check-label" htmlFor="priceFilter1">
                            £500 to £1000
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="priceFilter" id="priceFilter2" value="2" onChange={handleOptionChange} checked={selectedOption === '2'}/>
                        <label className="form-check-label" htmlFor="priceFilter2">
                            £1000 to £1500
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="priceFilter" id="priceFilter3" value="3" onChange={handleOptionChange} checked={selectedOption === '3'}/>
                        <label className="form-check-label" htmlFor="priceFilter3">
                            £1500 to £2000
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="priceFilter" id="priceFilter4" value="4" onChange={handleOptionChange} checked={selectedOption === '4'}/>
                        <label className="form-check-label" htmlFor="priceFilter4">
                            £2000 & above
                        </label>
                    </div>

                </div>
            </div>
        </>
    )
    
}

export default FilterList;