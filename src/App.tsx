import "./global.css"

import { useState } from "react"

import { Button } from "./components/button"

import styles from "./app.module.css"

import { useMessage } from "./hooks/useMessages"

export function App() {
  const [count, setCount] = useState(0)

  // const { show } = useMessage({ age: 25, name: "André Zambroni" })

  function handleAdd() {
    setCount(count + 1)
  }

  function handleRemove() {
    setCount(count - 1)
  }

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      {/* <Button name="Editar" /> */}
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  )
}
