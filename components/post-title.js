export default function PostTitle({ children }) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight md:leading-none text-center mt-12 text-ink">
      {children}
    </h1>
  )
}
