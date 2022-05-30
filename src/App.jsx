import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.css';

export default function App() {
  const [text, setText] = useState('');
  return (
    <div className="flex items-center flex-col align-center bg-white dark:bg-slate-800 m-3">
      <Header />
      <Footer />
    </div>
  );
}
