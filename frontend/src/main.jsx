import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { ThemeProvider } from './context/ThemeContext.jsx';
import Layout from './components/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </Provider>
    </ThemeProvider>
  </StrictMode>
)

