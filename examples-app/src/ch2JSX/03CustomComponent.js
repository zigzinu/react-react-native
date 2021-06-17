// 1. 컴포넌트 캡슐화
// - 새로운 JSX <태그>를 만들 수 있다.
// - JSX 태그를 만들기 위해 Component 객체를 이용한다.
//
// 2. Component 객체
// - render() {} 함수를 구현해야 한다.
// - MyComponent 는 더 복잡한 HTML을 캡슐화했다.
//
// 3. 스코프
// - 모든 커스텀 요소는 동일 스코프 내에서 선언되어야 한다.
// - 마지막 render() 호출과 호출한 MyComponent 클래스는 동일 스코프에 있다.

import React, { Component } from 'react';
import { render } from 'react-dom';

class MyComponent extends Component {
    render() {
        return (
            <section>
                <h1>My Component</h1>
                <p>Content in my component...</p>
            </section>
        );
    }
}

render(<MyComponent />, document.getElementById('root'));