import 'normalize.css'
import { Posts } from '@/features'
import { Layout } from '@/shared/ui'
import { SidebarSettings } from '@/widgets/sidebar-settings'
import { StateSettingsProvider } from '@/shared/providers'

function App() {
  return (
    <StateSettingsProvider>
      <Layout sidebar={<SidebarSettings />}>
        <Posts />
      </Layout>
    </StateSettingsProvider>
  )
}

export default App
