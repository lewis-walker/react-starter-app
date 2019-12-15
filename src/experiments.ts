export type Result = {
  title: string,
  value: any
}

export const results: Result[] = []
const addResult = (title: string, value: any) => results.push({ title, value })

addResult('not true', !true)
addResult('an object', {a: 'hello', b: true})
