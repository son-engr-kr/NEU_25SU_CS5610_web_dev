import { Button } from "react-bootstrap";

export default function CourseStatus() {
  // DONE(A2): 1.4.6 Restyle the Course Status
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div className="d-grid gap-2">
        <div className="d-flex gap-2">
          <Button variant="secondary" size="lg" className="flex-grow-1">
            Unpublish
          </Button>
          <Button variant="secondary" size="lg" className="flex-grow-1">
            Publish
          </Button>
        </div>
        <div className="mt-4">
          <div className="d-grid gap-2">
            <Button variant="secondary" size="lg" className="w-100">
              Import Existing Content
            </Button>
            <Button variant="secondary" size="lg" className="w-100">
              Import from Commons
            </Button>
            <Button variant="secondary" size="lg" className="w-100">
              Choose Home Page
            </Button>
            <Button variant="secondary" size="lg" className="w-100">
              View Course Stream
            </Button>
            <Button variant="secondary" size="lg" className="w-100">
              New Announcement
            </Button>
            <Button variant="secondary" size="lg" className="w-100">
              New Analytics
            </Button>
            <Button variant="secondary" size="lg" className="w-100">
              View Course Notifications
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}