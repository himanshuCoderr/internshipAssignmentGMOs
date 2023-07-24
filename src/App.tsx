// import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Data from './components/Data'
import CustomCheckbox from './components/CustomCheckbox'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={
              <Form></Form>
            } />

          <Route path='/data'
            element={
              <Data></Data>
            } />

          <Route path='/checkBoxes'
            element={
              <CustomCheckbox />
            } /> 
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
