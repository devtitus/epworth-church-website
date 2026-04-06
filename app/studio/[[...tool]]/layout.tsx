export const metadata = {
  title: 'Sanity Studio | Epworth',
  description: 'Manage church website content',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  )
}
