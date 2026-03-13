import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, enterEditMode]=useState<boolean>(false);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>){
        enterEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="in-edit-mode-check"
                label="Edit?"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ?
                <><Form.Group controlId="studentNane">
                    <Form.Label>Enter Student Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group><Form.Check
                        type="checkbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={(event) => {setIsStudent(event.target.checked)}} /></>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
