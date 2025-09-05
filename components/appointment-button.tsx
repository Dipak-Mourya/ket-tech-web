"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "./appointment-form";
import { Calendar } from "lucide-react";

interface AppointmentButtonProps {
  buttonText?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showIcon?: boolean;
}

export function AppointmentButton({
  buttonText = "Book Appointment",
  variant = "default",
  size = "default",
  className = "",
  showIcon = true,
}: AppointmentButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <Button
        onClick={openForm}
        variant={variant}
        size={size}
        className={className}
      >
        {showIcon && <Calendar className="mr-2 h-4 w-4" />}
        {buttonText}
      </Button>
      
      <AppointmentForm
        isOpen={isFormOpen}
        onClose={closeForm}
        buttonText={buttonText}
      />
    </>
  );
}
