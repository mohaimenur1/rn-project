import { View, Text } from "react-native";
import React, { useState } from "react";
import { data } from "@/data/todos";

const CrudPage = () => {
  const [todos, setTodos] = useState(data);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text) {
      setTodos([...todos, { id: todos.length + 1, text }]);
      setText("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Text>CrudPage</Text>
    </View>
  );
};

export default CrudPage;
