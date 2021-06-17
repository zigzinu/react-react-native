import React from 'react';
import { Component, render } from 'react-dom'

// 리액트 컴포넌트는 하나의 요소만 반환해야되기 때문에 <div> 로 감싸는 경우
// 사용하지 않는 많은 <div> 가 중첩될 수 있다. 
// 이때 <Fragment> Wrapper 요소를 사용하면 실제 랜더링 할 때는 감싸고 있는 내용만
// 렌더링 된다.

class WithFragments extends Component {
    render() {
        return (
            <Fragment>
                <h1>With Fragments</h1>
                <p>Doesn't have any unused DOM elements.</p>
            </Fragment>
        );
    }
}

// 결과
// <div>
//   <h1>With Fragments</h1>
//   <p>Doesn't have any unused DOM elements.</p>
// </div>

render(
    <div>
        <WithFragments />
    </div>,
    document.getElementById('root')
);
