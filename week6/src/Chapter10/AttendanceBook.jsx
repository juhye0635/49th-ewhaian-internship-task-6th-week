import React from "react";

const students = [
    {
        // 학생들의 id가 key값으로 사용됨
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>; 
            })}
        </ul>
    );
}

export default AttendanceBook;