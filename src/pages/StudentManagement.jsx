import StudentTable from '../components/StudentTable';
import StudentForm from '../components/StudentForm';

const StudentManagement = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Student Scores Management</h1>
      <div className="max-w-6xl mx-auto">
        <StudentTable />
        <StudentForm />
      </div>
    </div>
  );
};

export default StudentManagement;