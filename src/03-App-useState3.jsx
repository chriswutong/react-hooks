import { useEffect,useState } from "react";

// useState设置初始化状态的方法
const APP = () => {
  const [obj,setObj] = useState({
    w: 100,
    h: 100,
    x: 0,
    y: 0
  })

// useEffect
useEffect(() => { // 相当于componentDidmount,componentDidUpdate,componentWillUnmount
  function moveHandler (event) {
    console.log(event.clientX, event.clientY);
    // setObj({  // 修改完毕发现页面中的宽高丢失
    //     x: event.clientX,
    //     y: event.clientY,
    // });

    setObj({
        ...obj,
        x: event.clientX,
        y: event.clientY,
    });

  }
  window.addEventListener('mousemove',moveHandler)
})

    return (
        <div>
            <div>
            元素宽为：{obj.w},高为{obj.h}
            </div>
            <div>
            元素的坐标为{obj.x},{obj.y}
            </div>
        </div>
    );
};

export default APP;
