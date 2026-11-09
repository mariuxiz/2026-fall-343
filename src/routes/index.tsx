 
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div
      style={{
        backgroundColor: '#171717',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>
        Welcome to Acc 343
      </h1>
    </div>
  )
}
