// import React, { useState } from "react";
// import { Form } from "react-bootstrap";

// export function EditMode(): React.JSX.Element {
//     const [edit, setEdit] = useState<boolean>(false);
//     const [name, setName] = useState<string>("Your Name");
//     const [isStudent, setIsStudent] = useState<boolean>(true);

//     // function txtformat(name: string, isStudent: boolean): string {
//     //     return `${name} is ${isStudent ? "a student" : "not a student"}`;
//     // }
//     return (
//         <div>
//             <Form.Check
//                 type="switch"
//                 label="switch mode?"
//                 id="edit-mode-switch"
//                 checked={edit}
//                 onChange={(event) => {
//                     setEdit(event.target.checked);
//                 }}
//             />

//             {edit ?
//                 <div>
//                     <Form.Group controlId="Edit">
//                         <Form.Label>Name:</Form.Label>
//                         <Form.Control
//                             value={name}
//                             onChange={(event) => {
//                                 setName(event.target.value);
//                             }}
//                         ></Form.Control>
//                         <Form.Check
//                             type="checkbox"
//                             label="student"
//                             checked={isStudent}
//                             onChange={(event) => {
//                                 setIsStudent(event.target.checked);
//                             }}
//                         />
//                     </Form.Group>
//                 </div>
//             :   <div>
//                     {name} is {isStudent ? "a student" : "not a student"}
//                 </div>
//             }
//         </div>
//     );
// }

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function formatText(name: string, student: boolean): string {
        return `${name} is ${student ? "a student" : "not a student"}`;
    }

    return (
        <div>
            <Form.Group controlId="editModeSwitch">
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={(event) => {
                        setEditMode(event.target.checked);
                    }}
                />
            </Form.Group>

            {editMode ?
                <div>
                    <Form.Group controlId="editName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="editStudent">
                        <Form.Check
                            type="checkbox"
                            label="student?"
                            checked={isStudent}
                            onChange={(event) => {
                                setIsStudent(event.target.checked);
                            }}
                        />
                    </Form.Group>
                </div>
            :   <div>{formatText(name, isStudent)}</div>}
        </div>
    );
}
