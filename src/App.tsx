import "./global.css"

import { Button } from "./components/button"

import styles from "./app.module.css"

import { useMessage } from "./hooks/useMessages"

export function App() {
  const { show } = useMessage({ age: 25, name: "André Zambroni" })

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={() => show("mensagem do hook")} />
      {/* <Button name="Editar" /> */}
      <span>0</span>
      <Button name="Remover" />
    </div>
  )
}
