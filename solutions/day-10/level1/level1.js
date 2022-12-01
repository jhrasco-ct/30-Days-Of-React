// 1. What is the importance of React Folder Structure and File Naming
//  For scalability, maintainability, ease of working on files and easy to understand structure.

// 2. How do you export file
// By adding the keyword "export" before let or const to make a named export.
// e.g.
export const Component1 = () => {};
export default Component2 = () => {};

// 3. How do you import file
// By using the "import" keyword.
// e.g.
import Component1 from "./src/Component";
import "./styles/index.css";

// 4. Make a component or module and export it as named or default export
export const SampleComponent = () => <div>Sample Title</div>;

// 5. Make a component or module and import it
import SampleComponent from "./SampleComponent";

// 6. Change all the components you have to different folder structure
// Please refer to the Level 2 challenge.
