import { useState } from 'react';
import { XCircle } from 'lucide-react';

export default function App() {
  // Use state to manage a list of notifications.
  const [notifications, setNotifications] = useState([
    { id: 1, text: "You have a new message from a customer.", isRead: false },
    { id: 2, text: "Your order #1234 has been shipped.", isRead: false },
    { id: 3, text: "New product 'Vintage Lamp' is now available!", isRead: true },
    { id: 4, text: "Your shopping cart is waiting for you.", isRead: false },
  ]);

  // Function to mark a single notification as read.
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  // Function to mark all notifications as read.
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  // Function to clear all notifications.
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <div className="relative">
              {/* Only show the unread count badge if there are unread notifications */}
              {notifications.some(notif => !notif.isRead) && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {notifications.filter(n => !n.isRead).length}
                </span>
              )}
            </div>
            Notifications
          </h2>
          <span className="text-sm font-medium text-gray-500">
            {notifications.filter(notif => !notif.isRead).length} unread
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={markAllAsRead}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
            aria-label="Mark all notifications as read"
          >
            Mark all as read
          </button>
          <button
            onClick={clearAllNotifications}
            className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors duration-300"
            aria-label="Clear all notifications"
          >
            Clear all
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-4 rounded-lg flex items-start justify-between gap-4 transition-all duration-300 ${
                  notif.isRead
                    ? "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    : "bg-blue-50 text-gray-800 shadow hover:bg-blue-100"
                }`}
              >
                <div className="flex-1">
                  <p className="text-sm leading-snug">
                    {notif.text}
                  </p>
                </div>
                {!notif.isRead && (
                  <button
                    onClick={() => markAsRead(notif.id)}
                    className="shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                    aria-label="Mark notification as read"
                  >
                    {/* Updated the component name from LuXCircle to XCircle */}
                    <XCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              <p>You're all caught up!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
