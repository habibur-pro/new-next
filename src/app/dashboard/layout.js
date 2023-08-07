"use client"
import Link from "next/link";
import './dashboard.css'
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
    const pathName = usePathname()




    return <div>

        <ul className="menu">
            <li><Link href='/dashboard/user_dashboard'>User Dashboard</Link></li>
            <li><Link href='/dashboard/admin_dashboard'>Admin Dashboard</Link></li>
        </ul>

        {children}
    </div>
};

export default layout;