"use client";

import { useState, useEffect } from "react";
import { auth } from "../../lib/firebase";
import { deleteUser } from "firebase/auth";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User } from "firebase/auth";
import Navbar from "@/components/navbar";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const router = useRouter();


useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
    if (user) {
      setEmail(user.email || "");
      setPhotoURL(user.photoURL || "");
      if (user.displayName) {
        const parts = user.displayName.split(" ");
        setFirstName(parts[0]);
        setLastName(parts.slice(1).join(" ")); 
      }
    } else {
    // router.push("/login");
    }
    setLoading(false);
    });

    return () => unsubscribe();
    }, [router]);

  const handleDelete = async () => {
    setError(null);
    const user = auth.currentUser;
    if (user) {
      try {
        await deleteUser(user);
        router.push('/signup');
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <>
    <div className="bg-white">
          <Navbar></Navbar>
    
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <h1 className="text-xl font-bold mb-6">Your Profile</h1>
            {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                {error}
            </div>
            )}
            <div className="flex flex-col items-center space-y-4">
            {photoURL && (
                <img
                src={photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
                />
            )}
            <div className="w-full grid grid-cols-2 gap-4">
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    First Name
                </label>
                <input
                    type="text"
                    value={firstName}
                    disabled
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Last Name
                </label>
                <input
                    type="text"
                    value={lastName}
                    disabled
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                </div>
            </div>
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                Email
                </label>
                <input
                type="email"
                value={email}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            </div>
            <button
            onClick={handleDelete}
            className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
            Delete Account
            </button>
        </div>
    </div>
    </>
  );
}
