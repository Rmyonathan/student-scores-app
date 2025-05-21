import { createContext, useState, useEffect } from 'react';

// Create context
export const StudentContext = createContext();

// Context provider component
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    score: 0
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // API URL
  const API_URL = 'https://6678f9f40bd45250562081d9.mockapi.io/api/student-score';

  // Fetch all students
  const fetchStudents = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setStudents(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch a single student for editing
  const fetchStudent = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error('Failed to fetch student');
      const data = await response.json();
      setFormData({
        name: data.name,
        course: data.course,
        score: data.score
      });
      setEditMode(true);
      setCurrentId(id);
    } catch (err) {
      setError(err.message);
    }
  };

  // Create a new student
  const createStudent = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Failed to create student');
      
      // Reset form and refresh the list
      setFormData({ name: '', course: '', score: 0 });
      fetchStudents();
    } catch (err) {
      setError(err.message);
    }
  };

  // Update a student
  const updateStudent = async () => {
    try {
      const response = await fetch(`${API_URL}/${currentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Failed to update student');
      
      // Reset form, exit edit mode, and refresh the list
      setFormData({ name: '', course: '', score: 0 });
      setEditMode(false);
      setCurrentId(null);
      fetchStudents();
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a student
  const deleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete student');
        
        // Refresh the list
        fetchStudents();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  // Calculate grade based on score
  const calculateGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    return 'D';
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'score' ? parseInt(value) || 0 : value
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    if (formData.name && formData.course) {
      editMode ? updateStudent() : createStudent();
    }
  };

  // Cancel edit mode
  const handleCancel = () => {
    setFormData({ name: '', course: '', score: 0 });
    setEditMode(false);
    setCurrentId(null);
  };

  // Load data on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        students,
        isLoading,
        error,
        formData,
        editMode,
        fetchStudent,
        deleteStudent,
        handleChange,
        handleSubmit,
        handleCancel,
        calculateGrade
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};