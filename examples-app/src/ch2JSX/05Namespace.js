import React from 'react';
import { render } from 'react-dom';

// 네임스페이스만 임포트
import MyComponent from './05MyComponent';

// namespaced 요소를 자식으로 렌더링 할 수 있다.
// 네임스페이스를 사용하는 것은 가독성과 개인의 취향이다. 
// 다만 일관성 있게 사용해야 한다.
render((
    <MyComponent>
        <MyComponent.First />
        <MyComponent.Second />
    </MyComponent>
    ),
    document.getElementById('root')
);
