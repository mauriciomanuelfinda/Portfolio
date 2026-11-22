import { Fragment } from 'react'

/** Mostra texto simples, transformando <b>…</b> em negrito (sem HTML arbitrário). */
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/<b>(.*?)<\/b>/g)
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>))}
    </>
  )
}
