// Centered page container — the rigid grid lives inside this.
export default function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 ${className}`}>{children}</div>
}
