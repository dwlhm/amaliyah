import { Component, lazy } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';
import MainMenu from './wrapper/MainMenu';
import { Route, Routes } from 'solid-app-router';
import Home from './views/Home';
import Menu from './views/Menu';
import Pengaturan from './views/Pengaturan';
import Amaliyah from './views/Amaliyah';
import { PrimaryButtons } from './components/Buttons';
import Tersimpan from './views/Tersimpan'

import "./App.css"
import Category from './views/Category';

const App: Component = () => {

  if (!localStorage.getItem("pengaturan")) {
    localStorage.setItem("pengaturan", JSON.stringify({
      "teksArab":{
          "fontSize":18,
          "visibilitas":"terlihat"
      },
      "teksLatin":{
          "fontSize":18,
          "visibilitas":"terlihat"
      },
      "teksTerjemahanIndonesia":{
          "fontSize":18,
          "visibilitas":"terlihat"
      }
    }));
  }

  return (
    <div class='max-w-2xl m-auto'>
      <MainMenu />
      <div 
        id='views'
        class='p-2 m-2'  
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/pengaturan' element={<Pengaturan />} />
          <Route path='/amaliyah/:id' element={<Amaliyah />} />
          <Route path='/kategori/:id' element={<Category />} />
          <Route path="/tersimpan" element={<Tersimpan />} />
          {/* <Route path='*' element={<p class='text-center m-5 text-xl'><span class='font-bold'>404</span> / <span class='italic line-through'>not found</span></p>} /> */}
        </Routes>
      </div>
      <footer class='flex mt-10 mb-8 items-center justify-center'>
        <p class='text-sm text-center'>dwlhm.space - 2022.</p>
        <PrimaryButtons
          action={backToTop}
          style="text-sm font-semibold"
          >&#8593; scroll to top</PrimaryButtons>
      </footer>
    </div>
  );
};

const backToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}

export default App;
