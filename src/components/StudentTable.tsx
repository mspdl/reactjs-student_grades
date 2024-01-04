import { Student } from "@/types/Student";

type StudentTableProps = {
  students: Student[];
};

const StudentTable = ({ students }: StudentTableProps) => {
  return (
    <div>
      <table className="w-full border border-gray-600 rounded-md overflow-hidden">
        <thead>
          <tr className="text-left border-b border-gray-600 bg-gray-800">
            <th className="p-3">Name</th>
            <th className="p-3">Status</th>
            <th className="p-3">Grade 1</th>
            <th className="p-3">Grade 2</th>
            <th className="p-3">Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <img src={student.avatar} alt={student.name} />
                <div>
                  <div>{student.name}</div>
                  <div>{student.email}</div>
                </div>
              </td>
              <td>
                {student.active && <div>Active</div>}
                {!student.active && <div>Inactive</div>}
              </td>
              <td>{student.grade1}</td>
              <td>{student.grade2}</td>
              <td>
                {student.active
                  ? ((student.grade1 + student.grade2) / 2).toFixed(1)
                  : "--"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
