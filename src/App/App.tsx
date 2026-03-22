import router from "../router/router"
import { RouterProvider } from "react-router-dom";
import { TranslationProvider } from "../data/hooks/useTranslation";



function App() {

  return (
    <TranslationProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </TranslationProvider>

  )
}

export default App
