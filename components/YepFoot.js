import Link from 'next/link'

export const YepFoot = () => {
  return (
      <footer>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' | '}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </footer>
  )
}
