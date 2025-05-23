import ReactIconsSampler from "./ReactIcons";

export default function Base() {
    return (
        <div>
            {/* 2.1.19 */}
            <div id="wd-css-flex">
                <h2>Flex</h2>
                <div className="wd-flex-row-container">
                    <div className="wd-bg-color-yellow">Column 1</div>
                    <div className="wd-bg-color-blue">Column 2</div>
                    <div className="wd-bg-color-red">Column 3</div>
                </div>
            </div>

            <div id="wd-css-flex">
                <h2>Flex</h2>
                <div className="wd-flex-row-container">
                    <div className="wd-bg-color-yellow">
                        Column 1</div>
                    <div className="wd-bg-color-blue">
                        Column 2</div>
                    <div className="wd-bg-color-red
                    wd-flex-grow-1">
                        Column 3</div>
                </div>
            </div>
            <div id="wd-css-flex">
                <h2>Flex</h2>
                <div className="wd-flex-row-container">
                    <div className="wd-bg-color-yellow 
                    wd-width-75px">
                        Column 1</div>
                    <div className="wd-bg-color-blue">
                        Column 2</div>
                    <div className="wd-bg-color-red
                    wd-flex-grow-1">
                        Column 3</div>
                </div>
            </div>

            {/* 2.2 Decorating Documents with React Icons */}
            <ReactIconsSampler />

        </div>
    )
}