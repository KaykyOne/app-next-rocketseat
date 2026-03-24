import ClientComponent from './clientComponent'
import ServerComponet from './serverComponet'

export default function Page() {
  return (
    <div>
      <ClientComponent>
        <ServerComponet />
      </ClientComponent>
    </div>
  )
}
