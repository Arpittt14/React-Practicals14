
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedData({
      name: name,
      email: email,
      course: course
    });
  }

  return (
    <div style={{
      maxWidth: "500px",
      margin: "40px auto",
      padding: "25px",
      fontFamily: "Arial",
      border: "1px solid #ccc",
      borderRadius: "10px"
    }}>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Student Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <br /><br />

        <label>Email Address:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <br /><br />

        <label>Select Course:</label>
        <br />
        <select
          value={course}
          onChange={(event) => setCourse(event.target.value)}
          required
        >
          <option value="">-- Select Course --</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="BSc IT">BSc IT</option>
          <option value="MCA">MCA</option>
        </select>

        <br /><br />

        <button type="submit">Register Student</button>
      </form>

      {submittedData && (
        <div style={{
          marginTop: "25px",
          padding: "15px",
          backgroundColor: "#e8f5e9",
          borderRadius: "8px"
        }}>
          <h2>Registration Successful!</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
        </div>
      )}
    </div>
  );
}

export default App;
