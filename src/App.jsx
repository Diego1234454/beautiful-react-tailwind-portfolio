import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home.jsx'
import {NotFound} from "./pages/NotFound.jsx";



function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>

        {/*<a href="https://youtu.be/ifOJ0R5UQOc?si=v-D_Lme-a2V9jsZJ&t=3754" target="_blank" rel="noopener noreferrer">*/}
        {/*    <h1>Build And Deploy a Modern Personal Portfolio with ReactJS and TailwindCSS | React Beginner Tutorial*/}
        {/*    </h1>*/}
        {/*</a>*/}

    </>
  )
}

export default App
