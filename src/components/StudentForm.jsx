import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentForm = () => {
  const { formData, editMode, handleChange, handleSubmit, handleCancel } = useContext(StudentContext);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">{editMode ? 'Edit Student' : 'Add New Student'}</h2>
      <div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter student name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Mata kuliah</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter course name"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-1">Nilai</label>
          <input
            type="number"
            id="score"
            name="score"
            value={formData.score}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter score (0-100)"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleSubmit}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            {editMode ? 'Update' : 'Submit'}
          </button>
          {editMode && (
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentForm;