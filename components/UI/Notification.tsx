"use client";

import {
  motion,
  AnimatePresence,
  MotionProvider,
} from "@/utils/MotionProvider";
import { CheckCircle, AlertCircle } from "lucide-react";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
}

const Notification = ({ message, type, isVisible }: NotificationProps) => {
  const styles = {
    success: {
      background: "bg-mint",
      text: "text-gray-900",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    error: {
      background: "bg-red-100",
      text: "text-red-800",
      icon: <AlertCircle className="w-5 h-5" />,
    },
  };

  const { background, text, icon } = styles[type];

  return (
    <MotionProvider>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-4 right-4 ${background} ${text} px-4 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2 text-sm md:text-base max-w-[90vw] md:max-w-md`}
          >
            {icon}
            <p>{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionProvider>
  );
};

export default Notification;
