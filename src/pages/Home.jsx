import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-purple-700 mb-6">Welcome to Student Scores Management</h1>
          <p className="text-lg text-gray-600 mb-8">
            A simple application to manage student scores and track academic performance.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Features</h2>
            <ul className="text-left list-disc list-inside space-y-2 mb-6">
              <li>View a list of all students with their scores and grades</li>
              <li>Add new students with course information and scores</li>
              <li>Update existing student information</li>
              <li>Delete students from the database</li>
              <li>Automatic grade calculation based on scores</li>
            </ul>
            <Link 
              to="/students" 
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Manage Students
            </Link>
          </div>
          <div className="text-gray-500">
            <p>Click on "Manage Students" to get started with managing your student data.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;