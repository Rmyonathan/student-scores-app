import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-purple-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Student Scores App</Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-purple-200">Home</Link></li>
              <li><Link to="/students" className="hover:text-purple-200">Students</Link></li>
              <li><Link to="/about" className="hover:text-purple-200">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;