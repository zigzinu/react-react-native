import React, { Component } from 'react';

class First extends Component {
    render() {
        return (
            <p>First...</p>
        );
    }
}

class Second extends Component {
    render() {
        return (
            <p>Second...</p>
        );
    }
}

class MyComponent extends Component {
    render() {
        return (
            <section>{this.props.children}</section>
        );
    }
}

// Namespace 정의
// - First, Second 컴포넌트가 MyComponent 라는 네임스페이스의 자식 컴포넌트가 된다.
// - 네임스페이스도 하나의 컴포넌트로 쓸 수 있다.
// - 사용 예 : <MyComponent.First>
MyComponent.First = First;
MyComponenet.Second = Second;
export default MyComponent;

// First, Second 컴포넌트를 독립적으로도 사용하기 원할 때 설정.
export { First, Second };