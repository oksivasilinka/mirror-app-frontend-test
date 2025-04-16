import 'normalize.css'
import { Posts } from '@/features/posts'
import { Layout } from '@/shared/ui'
import { SidebarSettings } from '@/widgets/sidebar-settings'
import { StateSettingsProvider } from '@/shared/providers'

function App() {
  return (
    <StateSettingsProvider>
      <Layout sidebar={(setPage) => <SidebarSettings setPage={setPage} />}>
        {(props) => <Posts {...props} />}
      </Layout>
    </StateSettingsProvider>
  )
}

export default App
