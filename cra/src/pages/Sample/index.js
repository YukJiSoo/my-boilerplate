import * as React from 'react';
import * as Style from './style';
import SampleContainer from 'containers/Sample';

const SamplePage = () => {
    return (
        <Style.SamplePage>
            This is sample page.
            <SampleContainer />
        </Style.SamplePage>
    );
};

export default SamplePage;
