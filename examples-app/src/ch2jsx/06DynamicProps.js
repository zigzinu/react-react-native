import React from 'react';
import { render } from 'react-dom';

// JSX 에 전달되기 위한 상수 선언
const enabled = false;
const text = 'A Button';
const placeholder = 'input value...';
const size = 50;

// "{}" 자바스크립트 표현 구문들 통해 JSX 안에 자바스크립트 코드를 작성할 수 있다.
// HTML, Property, Text 는 JSX가 재렌더링돼도 변화가 없다. => 정적이다
// 애플리케이션의 다른 위치에 있는 데이터 기반한다. => 동적이다
render(
    <section>
        <button disabled={!enabled}>{text}</button>
        <input placeholder={placeholder} size={size} />
    </section>,
    document.getElementById('root')
);