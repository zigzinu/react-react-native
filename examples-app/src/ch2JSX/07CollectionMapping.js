import React from 'react';
import { render } from 'react-dom';

// JSX 요소들을 동적으로 제어하는 최고의 방법은 컬렉션으로 매핑하는 것이다.
// 컬렉션을 JSX에 매핑하는 것의 장점은 컬렉션 데이터를 기반으로 컴포넌트 구조를 주도할 수 있다는 것이다.
// - 명령형 로직에 의존할 필요가 없다.
const array = ['First', 'Second', 'Third'];
const object = ['First', 'Second', 'Third'];

render((
    <section>
        <h1>Array</h1> 
        { /*array를 <li> 배열에 매핑한다.
            <li>의 key 프로퍼티는 성능상 이유로 필요하며
            누락하면 리액트가 경고를 표시한다. */ }
        <ul>
            {array.map(i => (
                <li key={i}>{i}</li>
            ))}
        </ul> 
        { /*  
            Array
            - First
            - Second
            - Third
        */ }
        
        <h1>Object</h1>
        <ul>
            {Object.keys(object).map(i => (
                <li key={i}>
                    <strong>{i}: </strong>{object[i]}
                </li>
            ))}
        </ul>
        { /*  
            Object
            - 0: First
            - 1: Second
            - 2: Third
        */ }
    </section>
    ),
    document.getElementById('root')
);
