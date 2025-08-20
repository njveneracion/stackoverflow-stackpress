
export default function signin() {


  return (
    <div>
      <h1>Sign In</h1>
      <form method="POST">
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}
