import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <div>
        <p>Name: Hyoungseo Son (son.hyo@northeastern.edu)</p>
        <p>Section: CS5610 SU25 41980</p>
        <p>GitHub: <a href="https://github.com/son-engr-kr/NEU_25SU_CS5610_web_dev/tree/main/kambaz-react-web-app" target="_blank">NEU_25SU_CS5610_web_dev/kambaz-react-web-app</a></p>
      </div>
      <TOC />
      { /* Routes change the contents based on the URL */ }
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
      </Routes>
    </div>
);}
