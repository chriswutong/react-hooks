import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { forwardRef } from 'react';
import { useRef } from 'react';

const Child = forwardRef((props,ref) => {  // 函数式组件的ref转发
    return <div ref={ref} >Child</div>;
});


const App = () => {

  const childRef = useRef()
  const btnRef = useRef();

  useEffect(() => {
    console.log(childRef.current);
    console.log(btnRef.current);
  },[])

  // 发现三秒后打印了用户输入的每一次的值
  // const [name,setName] = useState('')   // 每次修改状态，都相当于冲洗你创建了name
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('name',name)
  //   }, 3000);
  // })

  // 发现三秒后，打印了用户输入的最终的值
    const [name, setName] = useState("");
    const newName = useRef(name)   // ‘ref’在所有的render过程中保持着唯一的引用
    useEffect(() => {
      newName.current = name
        setTimeout(() => {
            console.log("newName", newName);
        }, 3000);
    });

  return (
      <div>
          <Child ref={childRef} />
          <button ref={btnRef}>按钮</button>

          <input type="text" onChange={(event) => setName(event.target.value)} />
      </div>
  );
};

export default App;