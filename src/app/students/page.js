import Link from "next/link";


const page = () => {
    const students = [
        { name: 'habibur', id: 1, roll: 101 },
        { name: 'Rana', id: 2, roll: 101 },
        { name: 'Robule', id: 3, roll: 101 },
        { name: 'Harun', id: 4, roll: 101 },
    ]
    return (
        <div>
            <ul>
                {
                    students.map(student => <li
                        key={student.id}
                    >
                        <Link href={`students/${student.id}`}>{student.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default page;