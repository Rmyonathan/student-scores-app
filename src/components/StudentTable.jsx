import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Pencil, Trash2 } from 'lucide-react';

const StudentTable = () => {
  const { students, isLoading, error, fetchStudent, deleteStudent, calculateGrade } = useContext(StudentContext);

  if (isLoading) {
    return <div className="text-center py-4">Loading student data...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  if (students.length === 0) {
    return <div className="text-center py-4">No students found. Add a new student below.</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-purple-600">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">NO</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">NAMA</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">MATA KULIAH</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">NILAI</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">INDEX NILAI</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ACTION</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student, index) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.course}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.score}</td>
              <td className="px-6 py-4 whitespace-nowrap">{calculateGrade(student.score)}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <button
                    onClick={() => fetchStudent(student.id)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded flex items-center"
                  >
                    <Pencil size={16} className="mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;