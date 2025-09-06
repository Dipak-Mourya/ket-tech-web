"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { Claculatorservices } from "@/data";

interface CostCalculatorProps {
  heading?: string;
}

export function CostCalculator({
  heading = "Get Your Instant Quote",
}: CostCalculatorProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [contactType, setContactType] = useState<"email" | "phone" | null>(
    null
  );
  const [errors, setErrors] = useState<{ contact?: string }>({});

  const handleClearService = () => {
    setSelectedService("");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const detectContactType = (value: string) => {
    if (validateEmail(value)) return "email";
    if (validatePhone(value)) return "phone";
    return null;
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContact(value);

    if (!value) {
      setContactType(null);
      setErrors({ contact: undefined });
      return;
    }

    const type = detectContactType(value);
    setContactType(type);

    if (type === "email") {
      setErrors({ contact: undefined });
    } else if (type === "phone") {
      setErrors({ contact: undefined });
    } else {
      // Check if it could be a partial email or phone
      const emailRegex = /^[^\s@]*@[^\s@]*$/;
      const phoneRegex = /^[6-9]?\d{0,9}$/;

      if (emailRegex.test(value)) {
        setErrors({ contact: "Please enter a complete email address" });
      } else if (phoneRegex.test(value.replace(/\D/g, ""))) {
        setErrors({ contact: "Please enter a complete 10-digit phone number" });
      } else {
        setErrors({ contact: "Please enter a valid email or phone number" });
      }
    }
  };

  const handleWhatsApp = () => {
    const selectedServiceName =
      Claculatorservices.find((s) => s.id === selectedService)?.name || "";
    const contactLabel = contactType === "email" ? "Email" : "Phone";
    const message = `Hi! I'm ${name}.\nI'm interested in your interior design services.\n\nSelected Service: ${selectedServiceName}\n${contactLabel}: ${contact}\n\nPlease provide me with a detailed quote.`;

    const whatsappUrl = `https://wa.me/919051618504?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const hasSelection =
    selectedService &&
    name.trim() !== "" &&
    contact &&
    contactType &&
    !errors.contact;

  return (
    <div className="bg-slate-50 backdrop-blur-sm rounded-lg p-6 shadow-xl max-w-sm w-full">
      <h3 className="text-2xl font-serif font-bold text-primary mb-6 text-center">
        {heading}
      </h3>

      {/* Name Input */}
      <div className="mb-6">
        <Label htmlFor="name" className="font-sans text-accent">
          Your Name *
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-2 text-black bg-white"
        />
      </div>

      {/* Email/Phone Input */}
      <div className="mb-6">
        <Label htmlFor="contact" className="font-sans text-accent">
          Email or Phone Number *
        </Label>
        <Input
          id="contact"
          type="text"
          size={10}
          placeholder="Enter your email or phone number"
          value={contact}
          onChange={handleContactChange}
          className={`w-full mt-2 bg-white text-black ${
            errors.contact ? "border-red-500" : ""
          }`}
        />
        {contactType && (
          <p className="text-green-600 text-xs mt-1">
            ✓ Valid {contactType === "email" ? "email" : "phone number"}{" "}
            detected
          </p>
        )}
        {errors.contact && (
          <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
        )}
      </div>

      {/* Services Selection */}
      <div className="mb-6">
        <Label htmlFor="services" className="font-sans text-accent">
          Services *
        </Label>
        <div className="relative mt-2">
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger
              id="services"
              className="font-sans w-full bg-white text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {Claculatorservices.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedService && (
            <button
              onClick={handleClearService}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Clear selection"
            >
              <X className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            </button>
          )}
        </div>
      </div>

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        disabled={!hasSelection}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {hasSelection ? "Get Quote on WhatsApp" : "Enter details to continue"}
      </Button>

      {/* Reset Button */}
      {hasSelection && (
        <Button
          onClick={() => {
            setName("");
            setContact("");
            setSelectedService("");
            setContactType(null);
            setErrors({});
          }}
          className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-4 cursor-pointer"
        >
          Reset
        </Button>
      )}
    </div>
  );
}
