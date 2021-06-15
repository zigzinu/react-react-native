import React from 'react';
import { render } from 'react-dom';

// JSX 마크업 태그 규약
// 0. 태그의 대소문자를 구분한다.
//
// 1. 기본 HTML 태그는 전부 소문자로 시작
//  - <Button> 은 ReferenceError로 실패한다.
//
// 2. 제작한 HTML 태그는 대문자로 시작
//
// 3. 인식된 프로퍼티가 아닌 프로퍼티에 대해서는 경고가 뜬다
//  - button 태그에서 foo 는 인식된 프로퍼티가 아니다.

render((
    <button foo="bar">
        My Button
    </button>
    ),
    document.getElementById('root')
);

render(
    <Button />,
    document.getElementById('root')
);