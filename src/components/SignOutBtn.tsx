"use client"

import { signOut } from "next-auth/react";
import { CiLogin } from 'react-icons/ci';

export default function SignOutBtn() {
    return (<button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
        onClick={() => signOut()}>
        <CiLogin size={25} />
    </button>);
}