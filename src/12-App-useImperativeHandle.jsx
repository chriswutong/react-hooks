import React, { useImperativeHandle, useRef } from "react";

// 通过透传ref解决问题
const Input1 = React.forwardRef((props, ref) => {
    const iRef = useRef()
    useImperativeHandle(ref,() => {  // 透传ref， 第二个参数是一个函数，
      return {
          ABCD() {
              // 定义函数
              iRef.current.focus();
          },
      };
    })
    return <input ref={iRef} />;
});

const App = () => {
    const input1Ref = useRef();
    return (
        <div>
            <Input1 ref={input1Ref} />
            <button
                onClick={() => {
                    input1Ref.current.ABCD();  // 调用内部自定义的函数
                }}
            >
                input1获取焦点
            </button>
        </div>
    );
};

export default App;
