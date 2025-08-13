"use client";

import { useState } from "react";
import Button from "./Button";
import Notification from "./Notification";

interface NotificationState {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
}

const Form = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationState | null>(
    null
  );

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type, isVisible: true });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch("/api/subscribe", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       showNotification(data.message, "success");
  //       setEmail("");
  //     } else {
  //       showNotification(data.message, "error");
  //     }
  //   } catch (error) {
  //     showNotification(
  //       "Sorry, something went wrong. Please try again.",
  //       "error"
  //     );
  //     console.error("Subscription error:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // Form submission handler (demo mode)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showNotification(
      "Demo only: This form does not save or send your data.",
      "success"
    );
    setEmail("");
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:flex-row md:bg-white md:rounded-full md:overflow-hidden md:w-[90%] mx-auto max-w-3xl"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className="bg-white py-2 px-6 rounded-lg w-full md:outline-0"
          disabled={isLoading}
          aria-label="Email address"
        />
        <Button
          type="submit"
          variant="secondary"
          className="w-full md:w-auto flex-shrink-0 md:rounded-full"
          aria-label="Get the Free Budget Kit Now"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Get the Free Budget Kit Now"}
        </Button>
        <p className="text-[10px] text-center -mt-4 md:absolute md:-bottom-1/3 md:right-30">
          No spam. Unsubscribe anytime.
        </p>
      </form>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          isVisible={notification.isVisible}
        />
      )}
    </div>
  );
};

export default Form;
