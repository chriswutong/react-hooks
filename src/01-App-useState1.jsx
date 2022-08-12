import { useState } from 'react';

// useState修改状态直接写值
const APP = () => {
  // 数组的解构
  const [count, setCount] = useState(10)  // 设置了状态count，初始化的值为number10，修改状态的函数为setCount
  const add = () => {
    setCount(count+1); // 修改状态函数中直接写，运算以后的结果
    console.log(count) // 10 ,说明setCount是一个异步操作
    setCount(count + 1);
    setCount(count + 1);
  }
  return (
    <div>
      <div>
        { count } <button onClick={add}> 加</button>
      </div>
    </div>
  );
};

export default APP;