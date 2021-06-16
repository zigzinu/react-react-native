import React from 'react';
import { render } from 'react-dom';

// 자식을 렌더링하는 컴포넌트 임포트
import MyButton from './04MyButton';

render(
    <MyButton>My Button Text</MyButton>,
    document.getElementById('root')
);