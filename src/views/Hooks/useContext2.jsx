import React, { useState, useContext } from "react";
// eslint-disable-next-line react/require-render-return
class useContext2 extends React.Component {
  componentDidMount() {
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
  }
  componentDidUpdate() {
    /* ... */
  }
  componentWillUnmount() {
    /* ... */
  }
  render() {
    /* 基于 MyContext 组件的值进行渲染 */
  }
}

export default useContext2
// MyClass.contextType = MyContext;