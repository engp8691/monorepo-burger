// app/login/page.tsx
export default function LoginPage() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Sign In</button>
      </form>
    </>
  )
}
