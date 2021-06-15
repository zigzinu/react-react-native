// 1. 'react' 는 트랜스파일된 JSX 소스에서 사용된다.
// 트랜스파일: JSX -> JS
// 2. 'render()' 함수는 JSX 마크업을 렌더링하고 결과를 DOM에 배치한다.
// 3. 선언적 구조에 유의하자, 렌더링을 위한 명령적인 언어는 없다.

import React from 'react'
import { render } from 'react-dom'

render(
    (<p> Hello, <strong>JSX</strong></p>),
    document.getElementById('root')
)
