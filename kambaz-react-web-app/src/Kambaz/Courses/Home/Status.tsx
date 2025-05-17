import { Button } from "react-bootstrap";

export default function CourseStatus() {
  // DONE(A2): 1.4.6 Restyle the Course Status
  // DONE(A2): 2.4.5 Styling the Home Screen 
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div className="d-grid gap-2">
        {/* Publish/Unpublish Section */}
        <div className="d-flex gap-2">
          <Button variant="secondary" size="lg" className="flex-grow-1">
            Unpublish
          </Button>
          <Button variant="success" size="lg" className="flex-grow-1">
            Publish
          </Button>
        </div>

        {/* Import Section */}
        <div className="mt-4">
          <div className="d-grid gap-2">
            <Button variant="secondary" size="lg" className="w-100 text-start">
              Import Existing Content
            </Button>
            <Button variant="secondary" size="lg" className="w-100 text-start">
              Import from Commons
            </Button>
            <Button variant="secondary" size="lg" className="w-100 text-start">
              Choose Home Page
            </Button>
            <Button variant="secondary" size="lg" className="w-100 text-start">
              View Course Stream
            </Button>
          </div>
        </div>

        {/* Course Tools Section */}
        <div className="mt-4">
          <div className="d-grid gap-2">
            <Button variant="secondary" size="lg" className="w-100 text-start">
              New Announcement
            </Button>
            <Button variant="secondary" size="lg" className="w-100 text-start">
              New Analytics
            </Button>
            <Button variant="secondary" size="lg" className="w-100 text-start">
              View Course Notifications
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}