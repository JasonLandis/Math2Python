import { InlineMath } from 'react-katex';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Search from '../Search/Search';
import 'katex/dist/katex.min.css';
import './Navbar.scss'

export default function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <nav>
      <Link to="/" className="logo">
        <span style={{ fontSize: 22 }}><InlineMath math="\textit{Math 2 Python}" /></span>
      </Link>
      <Search />
      <Link to="/About" className="logo">
        <span style={{ fontSize: 16 }}><InlineMath math="\textit{About}" /></span>
      </Link>
      <a href="https://github.com/JasonLandis/Math2Python" target='_blank'>
        <span style={{ fontSize: 16 }}><InlineMath math="\textit{Github}" /></span>
      </a>
      <button style={{ fontSize: 16 }} onClick={toggleTheme}><InlineMath math="\textit{Theme}" /></button>
    </nav>
  )
}
