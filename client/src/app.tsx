import 'normalize.css'
import { Posts } from '@/features'
import { Layout } from '@/shared/ui'
import { SidebarSettings } from '@/widgets/sidebar-settings'

function App() {
  return (
    <Layout sidebar={<SidebarSettings />}>
      <Posts />
    </Layout>
  )
}

export default App
