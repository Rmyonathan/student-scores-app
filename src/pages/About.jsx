const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">About This Application</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-4">
            This Student Scores Management application was developed as a final project for the React course. 
            It demonstrates the implementation of CRUD operations using React hooks and context API for state management.
          </p>
          <p className="text-gray-700 mb-4">
            The application uses:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>React with functional components and hooks</li>
            <li>Context API for state management</li>
            <li>React Router for navigation</li>
            <li>Tailwind CSS for styling</li>
            <li>RESTful API integration for data operations</li>
          </ul>
          <p className="text-gray-700">
            All data is stored on a remote server and accessible via API endpoints, allowing for 
            persistent data storage and retrieval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;