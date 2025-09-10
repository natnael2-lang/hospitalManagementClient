import animationGif from './archive.gif';
import './ContentArchive.css';
import NavBar from './Navbar.js';
import {HeaderTitle, SearchBar, SearchResults} from './ContentArchiveComponents.js';
import Footer from './Footer.js';

function ContentArchive() {
  return (
      <>
        <NavBar class="uniq"></NavBar>
        <div className="upperComponents">
        <div className="left-content">
          <HeaderTitle />
          <SearchBar />
        </div>
        <div className="animation-container">
          <img src={animationGif} alt="Animation" className="animation-gif" />
        </div>
      </div>
        <SearchResults/>
        <Footer />
      </>
  );
}



export default ContentArchive;
