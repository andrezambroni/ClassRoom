import { useEffect } from "react"

type Props = {
  name: string
  age: number
}
export function useMessage({ name, age }: Props) {
  function show(message: string) {
    console.log(name, age, message)
  }

  useEffect(() => {
    console.log("useEffect do useMessage")
  }, [])
  return { show }
}
