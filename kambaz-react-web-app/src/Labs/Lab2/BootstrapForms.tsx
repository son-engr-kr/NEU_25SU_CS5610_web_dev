import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

import { FormControl } from "react-bootstrap";

export default function Base() {
    return (
        <div>
            {/* 2.3.10 */}
            <div id="wd-css-styling-forms">
                <h2>Forms</h2>
                <FormGroup className="mb-3" controlId="wd-email">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="name@example.com" />
                </FormGroup>
                <FormGroup className="mb-3" controlId="wd-textarea">
                    <FormLabel>Example textarea</FormLabel>
                    <FormControl as="textarea" rows={3} />
                </FormGroup>
            </div>

            {/* 2.3.11 */}
            <div id="wd-css-styling-dropdowns">
                <h3>Dropdowns</h3>
                <FormSelect>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </FormSelect>
            </div>

        </div>
    )
}