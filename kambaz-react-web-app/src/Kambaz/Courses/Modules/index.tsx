export default function Modules() {
    return (
      <div>
        {/* TODO(A1):Implement Collapse All button, View Progress button, etc. */}

        {/*  Collapse All button */}
        <button id="wd-collapse-all" onClick={() => alert("Collapse All functionality not yet implemented")}>
          Collapse All
        </button>

        {/*  View Progress button */}
        <button id="wd-view-progress" onClick={() => alert("View Progress functionality not yet implemented")}>
          View Progress
        </button>

        {/*  Publish All dropdown */}
        <select id="wd-publish-all" onChange={() => alert("Publish All functionality not yet implemented")}>
          <option value="">Publish All</option>
          <option value="publish-now">Publish Now</option>
          <option value="schedule-publish">Schedule Publish</option>
        </select>

        {/*  +Module button */}
        <button id="wd-add-module" onClick={() => alert("+Module functionality not yet implemented")}>
          +Module
        </button>

        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and</li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  