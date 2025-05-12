export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
        id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <select><option>Edit</option></select> </h3>
      <ul id="wd-assignment-list">
        {/* DONE(A1): 1.4.7 Complete On Your Own */}
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A1 - ENV + HTML
          </a>
          <p>Multiple Modules | <strong>Not avaiable until</strong> May 6 at 12:00am |</p>
          <p><strong>Due</strong> May 13 at 11:59pm | 100pts</p>
        </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A2 - CSS + BOOTSTRAP
          </a>
          <p>Multiple Modules | <strong>Not avaiable until</strong> May 13 at 12:00am |</p>
          <p><strong>Due</strong> May 20 at 11:59pm | 100pts</p>
        </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A3 - JAVASCRIPT + REACT
          </a>
          <p>Multiple Modules | <strong>Not avaiable until</strong> May 20 at 12:00am |</p>
          <p><strong>Due</strong> May 27 at 11:59pm | 100pts</p>
        </li>
      </ul>

      {/* Quizzes Section */}
      <h3 id="wd-quizzes-title">
        QUIZZES 10% of Total <select><option>Edit</option></select>
      </h3>
      <ul id="wd-quiz-list">
        <li><a href="#">Q1 - HTML</a><br/>Multiple Modules | Not Available Yet</li>
        <li><a href="#">Q2 - CSS</a><br/>Multiple Modules | Not Available Yet</li>
        <li><a href="#">Q3 - JS, ES6</a><br/>Multiple Modules | Not Available Yet</li>
        <li><a href="#">Q4 - NODE</a><br/>Multiple Modules | Not Available Yet</li>
        <li><a href="#">A5 - MONGO</a><br/>Multiple Modules | Not Available Yet</li>
      </ul>

      {/* Exams Section */}
      <h3 id="wd-exams-title">
        EXAMS 20% of Total <select><option>Edit</option></select>
      </h3>
      <ul id="wd-exam-list">
        <li><a href="#">Midterm</a><br/>Multiple Modules | Not Available Yet</li>
        <li><a href="#">Final</a><br/>Multiple Modules | Not Available Yet</li>
      </ul>

      {/* Project Section */}
      <h3 id="wd-project-title">
        PROJECT 30% of Total <select><option>Edit</option></select>
      </h3>
      <ul id="wd-project-list">
        <li><a href="#">Project</a><br/>Multiple Modules | Not Available Yet</li>
      </ul>
    </div>
  );
}
