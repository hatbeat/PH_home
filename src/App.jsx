import './App.css'
import Header from './components/common/Header'
import Content from './components/main/Content'
import Footer from './components/common/Footer'
import DefaultLayout from './components/layout/DefaultLayout';

export default function App() {
  return (
    <DefaultLayout>
      <Content />
    </DefaultLayout>
  );
}