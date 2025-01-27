"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "@/app/styles/Scrollbar.module.css";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const [isMobile, setIsMobile] = useState(false); // Detect if the device is mobile
  const [posts, setPosts] = useState([]); // Store posts data

  // Fetch posts from the API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/posts", {
          cache: 'no-store', // Revalidate the data every 10 seconds
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch the data: ${res.statusText}`);
        }

        const data = await res.json();
        setPosts(data);

        
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Detect mobile devices and adjust sidebar state
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        setIsSidebarOpen(true); // Ensure sidebar is always open on larger screens
      }
    };

    handleResize(); // Check on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev); // Toggle sidebar for mobile

  return (
    <>
      {/* Toggle Button for Mobile */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-20 left-4 z-50 bg-gray-700 text-white px-4 py-2 rounded-md"
        >
          {isSidebarOpen ? "-" : <FontAwesomeIcon icon={faBars} />}
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-screen bg-gray-100 overflow-y-auto transition-transform duration-300 ${
          isMobile
            ? isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : "translate-x-0"
        } ${isMobile ? "w-48" : "w-64"} ${styles.customScrollbar}`}
      >
        <nav className="p-4 pt-5 pb-20">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Posts</h2>
          <ul className="space-y-2">
            {posts.length > 0 ? (
              posts.map((post: any) => (
                <li key={post.id}>
                  <Link
                    href={`/post/${post.id}`}
                    className="block p-3 rounded-lg hover:bg-white transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{post.name}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.title}</p>
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-500">No posts available.</p>
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
}
