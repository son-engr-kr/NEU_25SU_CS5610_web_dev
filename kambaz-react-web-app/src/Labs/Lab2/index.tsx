import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margin from "./Margin";
import Corders from "./Corders";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import { Container } from "react-bootstrap";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
export default function Lab2() {
  return (
    <Container>
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      Style attribute allows configuring look and feel right on the element.
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>

        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element's CLASS attribute
        </p>

        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>

      </div>

      {/* 2.1.5 */}
      {/* this is parent element with selector
      .wd-selector-1

      .wd-selector-2 is a direct child of
      .wd-selector-1

      .wd-selector-3 is  a direct child of
      .wd-selector-2 and a descendant of
      .wd-selector-1


      .wd-selector-4 is a direct child of
      .wd-selector-3 and is a descendant of
      .wd-selector-2 and is a descendant of
      .wd-selector-1

      */}

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3<br />
              meaning the descendant of some ancestor.<br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span><br />
              You can combine these relationships to create specific
              styles depending on the document structure
            </p>
          </div>
        </div>
      </div>
      {/* 2.1.7 */}
      <ForegroundColors />
      {/* 2.1.8 */}
      <BackgroundColors />
      {/* 2.1.9 */}
      <Borders />

      {/* 2.1.10 */}
      <Padding />
      {/* 2.1.10 */}
      <Margin />
      {/* 2.1.11 */}
      <Corders />
      {/* 2.1.12 */}
      <Dimensions />
      {/* 2.1.13 */}
      <Positions />
      {/* 2.1.16 */}
      <Zindex />
      {/* 2.1.17 */}
      <Float />
      {/* 2.1.18 */}
      <GridLayout />
      {/* 2.1.19 */}
      <Flex />

      {/* 2.3.3, 2.3.4 */}
      <BootstrapGrids />

      {/* 2.3.5 */}
      <ScreenSizeLabel />

      {/* 2.3.6 */}
      <BootstrapTables />

      {/* 2.3.8, 2.3.9 */}
      <BootstrapLists />

      {/* 2.3.10 */}
      <BootstrapForms />

    </Container>


  );
}
