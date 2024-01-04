import StudentTable from "@/components/StudentTable";
import { students } from "@/data/students";

export default function Home() {
  return (
    <div className="container mx-auto p-3">
      <h1 className="text-5xl mb-5">{`Students' List`}</h1>
      <StudentTable students={students} />
    </div>
  );
}
