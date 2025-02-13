export default function PostTitle({ children }) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none text-center mt-12" style={{ color: '#4056a1' }}>
      {children}
    </h1>
  )
}
