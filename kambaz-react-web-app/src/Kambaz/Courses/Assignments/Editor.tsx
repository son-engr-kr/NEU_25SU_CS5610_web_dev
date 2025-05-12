export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of your
        Web application running on Netlify. The landing page should include the following:
        Your full name and section Links to each of the lab assignments Link to the Kanvas
        application Links to all relevant source code repositories
        The Kanvas application should include a link to navigate back to the landing page.
      </textarea>
      <br />




      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>



          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        {/* DONE(A1): 1.4.8 Complete on your own */}

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-Group">Assignment Group</label>
          </td>
          <td align="left" valign="top">
            <select id="wd-Group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-DisplayGradeAs">Display Grade as</label>
          </td>
          <td align="left" valign="top">
            <select id="wd-DisplayGradeAs">
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-SubmissionType">Submission Type</label>
          </td>
          <td align="left" valign="top">
            <select id="wd-SubmissionType">
              <option value="Online">Online</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-OnlineEntryOptions">Online Entry Options</label>
            <div id="wd-OnlineEntryOptions">
              <label>
                <input type="checkbox" value="TextEntry" /> Text Entry
              </label><br />
              <label>
                <input type="checkbox" value="WebsiteURL" /> Website URL
              </label><br />
              <label>
                <input type="checkbox" value="MediaRecordings" /> Media Recordings
              </label><br />
              <label>
                <input type="checkbox" value="StudentAnnotation" /> Student Annotation
              </label><br />
              <label>
                <input type="checkbox" value="FileUploads" /> File Uploads
              </label>
            </div>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-AssignTo">Assign</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-AssignTo">Assign to</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          </td>
          <td align="left" valign="top">
            <input id="wd-points" value="Everyone" />
          </td>
        </tr>


        <tr>
          <td align="right" valign="top">
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-Due">Due</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
          </td>
          <td align="left" valign="top">
            {/* Date Picker for Due Date in MM/DD/YYYY format */}
            <input type="date" id="wd-due-date" pattern="\d{2}/\d{2}/\d{4}" placeholder="MM/DD/YYYY" defaultValue="2025-05-13" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-Due">Available from</label>
          </td>

          <td align="left" valign="top">
            <label htmlFor="wd-Due">Until</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          </td>
          <td align="left" valign="top">
            {/* Date Picker for Due Date in MM/DD/YYYY format */}
            <input type="date" id="wd-available-from" pattern="\d{2}/\d{2}/\d{4}" placeholder="MM/DD/YYYY" defaultValue="2025-05-13"/>
          </td>

          <td align="left" valign="top">
            {/* Date Picker for Due Date in MM/DD/YYYY format */}
            <input type="date" id="wd-until" pattern="\d{2}/\d{2}/\d{4}" placeholder="MM/DD/YYYY" defaultValue="2025-05-13"/>
          </td>
        </tr>

        <tr>
          <td colSpan={3}>
            <hr />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          </td>
          <td align="right" valign="top">
            {/* Cancel button */}
            <button id="wd-cancel-button">Cancel</button>
          </td>
          <td align="right" valign="top">
            {/* Save button */}
            <button id="wd-save-button">Save</button>
          </td>
        </tr>



      </table>
    </div>
  );
}
