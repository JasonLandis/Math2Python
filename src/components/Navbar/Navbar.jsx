import { InlineMath } from 'react-katex';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Search from '../Search/Search';
import 'katex/dist/katex.min.css';
import './Navbar.scss'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <Link to="/" className='logo'>
        <img src="logo.png" alt="" />
        <span style={{ fontSize: 22 }}><InlineMath math="\textit{Math 2 Python}" /></span>
      </Link>
      <Search />
      <Link to="/About">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13 11V10C13 8.897 12.103 8 11 8V3.5C11 2.122 9.879 1 8.5 1H5.5C4.121 1 3 2.122 3 3.5C3 4.009 3.154 4.481 3.416 4.877L2.293 6H1C0.724 6 0.5 6.224 0.5 6.5C0.5 6.776 0.724 7 1 7H2V8C2 8.276 2.224 8.5 2.5 8.5C2.776 8.5 3 8.276 3 8V6.707L4.123 5.584C4.518 5.846 4.991 6 5.5 6H7V8H6C4.897 8 4 8.897 4 10V11C2.897 11 2 11.897 2 13C2 14.103 2.897 15 4 15H13C14.103 15 15 14.103 15 13C15 11.897 14.103 11 13 11ZM13 14H4C3.448 14 3 13.551 3 13C3 12.449 3.448 12 4 12H4.5C4.776 12 5 11.776 5 11.5V10C5 9.449 5.448 9 6 9H7.5C7.776 9 8 8.776 8 8.5V5.5C8 5.224 7.776 5 7.5 5H5.5C4.673 5 4 4.327 4 3.5C4 2.673 4.673 2 5.5 2H8.5C9.327 2 10 2.673 10 3.5V8.5C10 8.776 10.224 9 10.5 9H11C11.552 9 12 9.449 12 10V11H7.5C7.224 11 7 11.224 7 11.5C7 11.776 7.224 12 7.5 12H13C13.552 12 14 12.449 14 13C14 13.551 13.552 14 13 14ZM7 3.5C7 3.776 6.776 4 6.5 4C6.224 4 6 3.776 6 3.5C6 3.224 6.224 3 6.5 3C6.776 3 7 3.224 7 3.5Z"/></svg>
      </Link>
      <a href="https://github.com/JasonLandis/Math2Python">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
      </a>
      <button style={{ fontSize: 16 }} onClick={toggleTheme}>
        { theme === 'dark' ? 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" /><path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" /><path d="M19 11h2m-1 -1v2" /></svg>
        }
      </button>
    </nav>
  )
}
