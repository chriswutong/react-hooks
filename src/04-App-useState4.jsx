import { useEffect,useState } from "react";

// useState设置初始化状态的方法,拆分状态，
const APP = () => {

  const [rect, ] = useState({w:100,h:100})
  const [position, setPosition] = useState({ x: 0, y:0 });

// useEffect
useEffect(() => { // 相当于componentDidmount,componentDidUpdate,componentWillUnmount
  function moveHandler (event) {
      console.log(event.clientX, event.clientY);
      // setObj({  // 修改完毕发现页面中的宽高丢失
      //     x: event.clientX,
      //     y: event.clientY,
      // });

      // setObj({  // 页面中的宽高不再丢失
      //     ...obj,
      //     x: event.clientX,
      //     y: event.clientY,
      // });

      setPosition({
          // 修改完毕发现页面中的宽高丢失
          x: event.clientX,
          y: event.clientY,
      });
  }
  window.addEventListener('mousemove',moveHandler)
})

    return (
        <div>
            <div>
                元素宽为：{rect.w},高为{rect.h}
            </div>
            <div>
                元素的坐标为{position.x},{position.y}
            </div>
        </div>
    );
};

export default APP;
