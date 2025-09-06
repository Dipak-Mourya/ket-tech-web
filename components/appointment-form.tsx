"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { AppToast } from "@/lib/app-toast";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppointmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  buttonText?: string;
}

export function AppointmentForm({
  isOpen,
  onClose,
  buttonText = "Book Your Appointment",
}: AppointmentFormProps) {
  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    services: string;
    message: string;
    access_key?: string;
    subject?: string;
    botcheck?: string;
  };

  type FormErrors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    services?: string;
    message?: string;
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ✅ Validation
  const validateFields = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.firstName) newErrors.firstName = "First name is required.";
    if (!data.lastName) newErrors.lastName = "Last name is required.";
    if (!data.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!data.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!data.services) newErrors.services = "Please select a service.";
    if (!data.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  // ✅ Submit Handler with Web3Forms
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateFields(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: "896c1b75-94db-41f6-abdd-cc57ed60df3d",
          subject: "New Appointment Booking - Interior Design Services",
          botcheck: "",
        }),
      });

      const json = await response.json();

      if (response.ok) {
        AppToast.success("Appointment booked successfully! We'll contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          services: "",
          message: "",
        });
        setErrors({});
        onClose();
      } else {
        AppToast.error(
          json.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      AppToast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };
  const handleClose = () => {
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      services: "",
      message: "",
    });
    setErrors({});
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999]  overflow-auto" style={{ zIndex: 99999 }}>
      {/* Background blur overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content wrapper */}
      <div className="relative flex min-h-full items-center justify-center p-4 " style={{ zIndex: 99999 }}>
        <div className="relative w-full max-w-4xl" style={{ zIndex: 99999 }}>
          <Card className="shadow-2xl relative bg-[#fff6f8]" style={{ zIndex: 99999 }}>
          <CardHeader className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 cursor-pointer  hover:bg-primary/90"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>
            <CardTitle className="font-sans xl:text-2xl lg:xl sm:xl text-center pr-12 my-3">
              {buttonText}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="access_key"
                value="896c1b75-94db-41f6-abdd-cc57ed60df3d"
              />
              <input
                type="hidden"
                name="subject"
                value="New Appointment Booking - Interior Design Services"
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
              />
              
              {/* Name fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-sans">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="font-sans text-black bg-white"
                  />
                  {errors.firstName && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-sans">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="font-sans text-black bg-white"
                  />
                  {errors.lastName && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </div>
                  )}
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="font-sans text-black bg-white"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-sans">
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="font-sans text-black bg-white"
                  />
                  {errors.phone && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </div>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="services" className="font-sans">
                  Services *
                </Label>
                <Select
                  value={formData.services}
                  onValueChange={(value) => {
                    handleChange({
                      target: { name: "services", value },
                    } as React.ChangeEvent<HTMLSelectElement>);
                  }}
                >
                  <SelectTrigger
                    id="services"
                    className="font-sans w-full bg-white text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 z-[99999999]"
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="z-[99999]" style={{ zIndex: 99999 }}>
                    <SelectItem value="Residential Interiors">
                      Residential Interiors
                    </SelectItem>
                    <SelectItem value="Office & Workspace Design">
                      Office & Workspace Design
                    </SelectItem>
                    <SelectItem value="Retail & Commercial Interiors">
                      Retail & Commercial Interiors
                    </SelectItem>
                    <SelectItem value="Modular Kitchens & Wardrobes">
                      Modular Kitchens & Wardrobes
                    </SelectItem>
                    <SelectItem value="3D Design & Visualization">
                      3D Design & Visualization
                    </SelectItem>
                    <SelectItem value="Turnkey Projects">
                      Turnkey Projects
                    </SelectItem>
                    <SelectItem value="Renovation & Remodeling">
                      Renovation & Remodeling
                    </SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
                {errors.services && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.services}
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="font-sans">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type your message..."
                  className="font-sans text-black bg-white"
                />
                {errors.message && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-foreground text-accent-foreground font-sans cursor-pointer font-medium"
                >
                  {isSubmitting ? "Booking..." : "Book Appointment"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  disabled={isSubmitting}
                  onClick={resetForm}
                  className="flex-1 font-sans font-medium cursor-pointer"
                >
                  Reset
                </Button>
               
              </div>
            </form>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
