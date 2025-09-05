"use client";

import type React from "react";
import { useState } from "react";
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

interface ContactFormProps {
  sectionTitle?: string;
  sectionDescription?: string;
  formTitle: string;
}

export function ContactForm({
  sectionTitle,
  sectionDescription,
  formTitle,
}: ContactFormProps) {
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
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setStatus("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: "97745d79-bd88-42c0-bd6d-fa51d2d1516e",
          subject: "New Contact Form Submission - Interior Design Services",
          botcheck: "",
        }),
      });

      const json = await response.json();

      if (response.ok) {
        AppToast.success("Thank you for contacting us!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          services: "",
          message: "",
        });
        setErrors({});
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
    setStatus("");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            {sectionTitle}
          </h2>
          <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-sans text-2xl text-center mt-4">
                {formTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="hidden"
                  name="access_key"
                  value="97745d79-bd88-42c0-bd6d-fa51d2d1516e"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission - Interior Design Services"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: "none" }}
                />
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
                      className="font-sans w-full bg-white text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
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
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-sans">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="font-sans text-black bg-white"
                  />
                  {errors.message && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-row md:justify-start md:items-center gap-4 my-4">
                  <Button
                    type="submit"
                    size="sm"
                    disabled={isSubmitting}
                    className="md:w-32 w-32 bg-foreground text-accent-foreground font-sans font-medium cursor-pointer"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    disabled={isSubmitting}
                    className="md:w-32 w-32 bg-foreground text-white font-sans font-medium cursor-pointer"
                    onClick={() => {
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        services: "",
                        message: "",
                      });
                      setErrors({});
                      setStatus("");
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
