import React, { Component } from 'react';

export default class MyComponent extends Component { 
    
    // 1. 컴포넌트의 상태 State
    // - prop 의 default 값을 설정해주어 예기치 않은 렌더링을 방지할 수 있다.
    // - 리액트 컴포넌트는 <순수 객체>를 상태로 사용해야 한다.
    //   - 배열을 사용하지 말자.

    // JSX의 프로퍼티를 컴포넌트의 초기 상태로 설정
    state = {
        first: false,
        second: true,
    }

    render() {
        
        // 상태 프로퍼티를 상수로 가져와 JSX를 만든다.
        // 초기 프로퍼티 값을 설정했기 때문에 컴포넌트를 안전한게 렌더링 가능하다.
        const { first, second } = this.state;

        return(
            <main>
                <section>
                    <button disabled={first}>First</button>
                </section>
                <section>
                    <button disabled={second}>Second</button>
                </section>
            </main>
        );
    }
}