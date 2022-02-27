import React from 'react';
import SuperInputText from "./c1-SuperInputText/SuperInputText";
import SuperButton from "./c2-SuperButton/SuperButton";
import SuperCheckbox from "./c3-SuperCheckbox/SuperCheckbox";
import SuperSelect from "./c5-SuperSelect/SuperSelect";
import SuperRadio from "./c6-SuperRadio/SuperRadio";
import SuperRange from "./c7-SuperRange/SuperRange";

const TestComponents = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton/>
            <SuperCheckbox/>
            <SuperSelect/>
            <SuperRadio/>
            <SuperRange/>
        </div>
    );
};

export default TestComponents;