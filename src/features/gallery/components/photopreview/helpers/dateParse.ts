export function dateParse(ms:number):string{
  const date = new Date(ms);
  return `${String(date.getDate()).padStart(2,'0')}.${String(date.getMonth()+1).padStart(2,'0')}.${date.getFullYear()}`
}