import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './MultiRange.css'

const MultiRange = () => {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    return (
       <>
        <div className="App">
            <MultiRangeSlider
                min={0}
                max={100}
                step={5}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e);
                }}
            />
        </div>
    <div className="flex justify-between items-center">
        <span className="py-[7px] pl-[14px] border rounded-md w-[100px] ">$ {minValue}</span>
        -
        <span className="py-[7px] pl-[14px] border rounded-md w-[100px] ">$ {maxValue}</span>
    </div>
       </>)
};

export default MultiRange;
