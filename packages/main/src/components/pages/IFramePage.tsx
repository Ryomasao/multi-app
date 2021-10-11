import Template from '@/components/templates/IFrameTemplate'

const IFramePage = () => {
  const src = process.env.NEXT_PUBLIC_SITE_B_URL || 'http:://localhost:4000'
  return <Template src={src} />
}

export default IFramePage
