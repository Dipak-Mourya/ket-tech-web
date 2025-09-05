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

interface Service {
  id: string;
  name: string;
  price: number;
}

const services: Service[] = [
  { id: "residential-interiors", name: "Residential Interiors", price: 60000 },
  { id: "office-workspace-design", name: "Office & Workspace Design", price: 75000 },
  { id: "retail-commercial-interiors", name: "Retail & Commercial Interiors", price: 80000 },
  { id: "modular-kitchens-wardrobes", name: "Modular Kitchens & Wardrobes", price: 50000 },
  { id: "3d-design-visualization", name: "3D Design & Visualization", price: 40000 },
  { id: "turnkey-projects", name: "Turnkey Projects", price: 100000 },
  { id: "renovation-remodeling", name: "Renovation & Remodeling", price: 70000 },
];

export function CostCalculator() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [contactType, setContactType] = useState<'email' | 'phone' | null>(null);
  const [errors, setErrors] = useState<{contact?: string}>({});

  const getSelectedServicePrice = () => {
    const service = services.find((s) => s.id === selectedService);
    return service?.price || 0;
  };

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
    if (validateEmail(value)) return 'email';
    if (validatePhone(value)) return 'phone';
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

    if (type === 'email') {
      setErrors({ contact: undefined });
    } else if (type === 'phone') {
      setErrors({ contact: undefined });
    } else {
      // Check if it could be a partial email or phone
      const emailRegex = /^[^\s@]*@[^\s@]*$/;
      const phoneRegex = /^[6-9]?\d{0,9}$/;
      
      if (emailRegex.test(value)) {
        setErrors({ contact: "Please enter a complete email address" });
      } else if (phoneRegex.test(value.replace(/\D/g, ''))) {
        setErrors({ contact: "Please enter a complete 10-digit phone number" });
      } else {
        setErrors({ contact: "Please enter a valid email or phone number" });
      }
    }
  };

  const handleWhatsApp = () => {
    const price = getSelectedServicePrice();
    const selectedServiceName =
      services.find((s) => s.id === selectedService)?.name || "";

    const contactLabel = contactType === 'email' ? 'Email' : 'Phone';
    const message = `Hi! I'm ${name}. I'm interested in your interior design services.

Selected Service: ${selectedServiceName}
Estimated Cost: ₹${price.toLocaleString()}
${contactLabel}: ${contact}

Please provide me with a detailed quote.`;

    const whatsappUrl = `https://wa.me/919051618504?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const price = getSelectedServicePrice();
  const hasSelection = selectedService && name.trim() !== "" && contact && contactType && !errors.contact;

  return (
    <div className="bg-slate-50 backdrop-blur-sm rounded-lg p-6 shadow-xl max-w-sm w-full">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Get Instant Quote
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
          className={`w-full mt-2 bg-white text-black ${errors.contact ? 'border-red-500' : ''}`}
        />
        {contactType && (
          <p className="text-green-600 text-xs mt-1">
            ✓ Valid {contactType === 'email' ? 'email' : 'phone number'} detected
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
              {services.map((service) => (
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

      {/* Estimated Cost */}
      {selectedService && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">
              Estimated Cost:
            </span>
            <span className="md:text-2xl text-lg font-bold text-blue-600">
              ₹{price.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            * This is an estimate. Final price may vary based on requirements.
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        disabled={!hasSelection}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {hasSelection ? "Get Quote on WhatsApp" : "Select service to get quote"}
      </Button>
    </div>
  );
}
