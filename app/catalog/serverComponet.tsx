export default async function ServerComponet() {

  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <div className='bg-blue-500'>Server Component</div>
  )
}
