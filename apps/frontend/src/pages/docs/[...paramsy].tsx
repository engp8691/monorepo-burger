import { useRouter } from 'next/router'

export default function DocsCatchAll() {
  const router = useRouter()
  const { paramsy } = router.query

  return (
    <div>
      <h1>Docs Catch-All Page</h1>
      <p>
        Path: {Array.isArray(paramsy) ? paramsy.join(' / ') : 'No params'}
      </p>
    </div>
  )
}
