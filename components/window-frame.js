// A simple browser-window frame around a prototype screenshot.
export default function WindowFrame({ src, alt, className = '', style }) {
  return (
    <div className={`rounded-xl overflow-hidden bg-white ring-1 ring-black/10 shadow-[0_18px_40px_-12px_rgba(10,16,60,0.45)] ${className}`} style={style}>
      <div className="flex items-center gap-1.5 px-3 h-7 bg-[#E7EAF5]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF6159]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C941]" />
      </div>
      <img src={src} alt={alt} width={1200} height={750} className="block w-full h-auto" />
    </div>
  )
}
