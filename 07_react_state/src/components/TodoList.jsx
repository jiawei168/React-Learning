import React, { useState } from "react";

const TodoList = () => {
  // 初始化待办事项列表状态，初始有两个任务："学习 React" 和 "做练习"
  const [todos, setTodos] = useState(["学习 React", "做练习"]);

  // 添加新任务的函数
  const addTodo = () => {
    setTodos([...todos, "新任务"]); // 在现有任务列表末尾添加一个新任务
  };

  // 删除任务的函数，这里删除的是列表中的最后一个任务
  const removeTodo = () => {
    setTodos(todos.slice(0, todos.length - 1)); // 截取现有任务列表，除去最后一个任务
  };

  // 渲染组件
  return (
    <div>
      <h3>待办事项</h3> {/* 标题 */}
      <ul>
        {" "}
        {/* 无序列表，用于展示待办事项 */}
        {todos.map(
          (
            todo,
            index // 遍历todos数组，为每个任务生成一个列表项
          ) => (
            <li key={index}>{todo}</li> // 列表项的key设置为索引值，显示任务内容
          )
        )}
      </ul>
      <button onClick={addTodo}>添加任务</button> {/* 添加任务的按钮 */}
      <button onClick={removeTodo}>删除任务</button> {/* 删除任务的按钮 */}
    </div>
  );
};

export default TodoList;
