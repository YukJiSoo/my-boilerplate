import * as React from 'react';
import * as Style from './style';
import SampleComponents from 'components/Sample';

const SampleContainers = () => {
    return (
        <Style.SampleContainers>
            This is sample container.
            <SampleComponents />
        </Style.SampleContainers>
    );
};

export default SampleContainers;
