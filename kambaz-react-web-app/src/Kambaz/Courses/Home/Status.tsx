export default function CourseStatus() {
  // DONE(A2): 1.4.6 Restyle the Course Status
    return (
      <div id="wd-course-status">
        <h2>Course Status</h2>
        <div>
          <button>Unpublish</button>
        </div>
        <div>
          <button>Publish</button>
        </div>
        {/* DONE(A1): Complete on your own 1.4.6 */}
        <div>
          <button>Import Existing Content</button>
        </div>
        <div>
          <button>Import from Commons</button>
        </div>
        <div>
          <button>Choose Home Page</button>
        </div>
        <div>
          <button>View Course Stream</button>
        </div>
        <div>
          <button>New Announcement</button>
        </div>
        <div>
          <button>New Analytics</button>
        </div>
        <div>
          <button>View Course Notifications</button>
        </div>
      </div>
    );
}