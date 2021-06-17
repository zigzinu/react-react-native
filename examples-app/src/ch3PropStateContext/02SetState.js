import React, { Component } from 'react';

class MyComponent extends Component {
    state = {
        heading: 'React Awesomesauce (Busy)',
        content: 'Loading...',
    }

    render() {
        const{ heading, content } = this.state;

        return(
            <main>
                <h1>{heading}</h1>
                <p>{content}</p>
            </main>
        );
    }
}

// 1. 초기 렌더링을 실행하고, 참조를 반환한다
const myComponent = render(
    (<MyComponent />),
    document.getElementById('root')
);

setTimeout(() => {
    myComponent.setState({
        heading: 'React Awesomesauce',
        content: 'Done!',
    });
}, 3000);