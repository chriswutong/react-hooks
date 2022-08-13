import React, { useMemo } from 'react';
// import { useCallback } from 'react';
import { useState } from 'react';

const Child = React.memo(() => { // React.memo可以提高组件的性能
  console.log('执行了吗？')       // a的值发生改变，就会执行
  return (
    <div>
      child
    </div>
  )
})

const App = () => {
  const [a, setA] = useState(10)
  const [b] = useState(100);
  const add = () => {
    setA(a+1)
  }
  // const testHandler = () => {

  // }

  // useCallback以及useMemo可以用来给组件事件包裹，提高性能

  // const testHandler = useCallback(() => { // 这个函数是必须的
  //   return ( (event) => {   // 这里是真正函数需要执行的代码

  //   })
  // },[b])  // 依赖项，依赖于某一个值得发生改变，才执行里面的函数

  const testHandler = useMemo((event) => {   // 这里是真正函数需要执行的代码

  },[])

// useMemo也可以作为计算属性而存在
  const doubleA = useMemo(() => {
    return a*2
  },[a])

  return (
    <div>
      <button onClick={ add }>a+1</button>  {a}---{doubleA}
      {/* 可以通过react.memo提升性能 */}
      {/* 每次执行，test Handler都会返回一个新的引用，意味着Child组件的属性发生了改变 */}
      {/* 可以通过useCallback或者useMemo解决 */}
      <Child b={ b } handler = { testHandler } />
    </div>
  );
};

export default App;