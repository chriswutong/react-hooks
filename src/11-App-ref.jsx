import React, { useRef } from 'react';

// 转发ref实现
const Input1 = React.forwardRef((props,ref) => {
  return (
    <input ref={ ref }/>
  )
}) 

const App = () => {
  const input1Ref = useRef()
  return (
      <div>
          <Input1 ref={input1Ref} />
          <button onClick={() => {
            input1Ref.current.focus()
          }} >input1获取焦点</button>
      </div>
  );
};

export default App;