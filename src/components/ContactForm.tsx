import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

type FormStep = 1 | 2 | 3 | 4;

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    date: "",
    description: "",
    referral: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as FormStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as FormStep);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Form submitted! We'll get back to you soon.");
    console.log("Form data:", formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="projectType">Project Type *</Label>
              <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="videography">Videography</SelectItem>
                  <SelectItem value="studio-rental">Studio Rental</SelectItem>
                  <SelectItem value="content-creation">Content Creation</SelectItem>
                  <SelectItem value="event-coverage">Event Coverage</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <Select onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1k">Under $1,000</SelectItem>
                  <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-plus">$10,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="date">Preferred Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                placeholder="Tell us about your project, vision, and goals..."
                rows={6}
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="referral">How did you hear about us?</Label>
              <Select onValueChange={(value) => handleInputChange("referral", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="referral">Friend Referral</SelectItem>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="event">Event/Workshop</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-fade-in text-center">
            <div className="flex justify-center">
              <div className="bg-accent text-accent-foreground rounded-full p-4">
                <Check className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Review Your Information</h3>
              <p className="text-muted-foreground">Make sure everything looks good before submitting</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-left space-y-3">
              <div><span className="font-semibold">Name:</span> {formData.name}</div>
              <div><span className="font-semibold">Email:</span> {formData.email}</div>
              {formData.phone && <div><span className="font-semibold">Phone:</span> {formData.phone}</div>}
              {formData.projectType && <div><span className="font-semibold">Project Type:</span> {formData.projectType}</div>}
              {formData.budget && <div><span className="font-semibold">Budget:</span> {formData.budget}</div>}
              {formData.date && <div><span className="font-semibold">Preferred Date:</span> {formData.date}</div>}
              {formData.description && (
                <div>
                  <span className="font-semibold">Description:</span>
                  <p className="text-sm mt-1">{formData.description}</p>
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book our studio or start your creative project with us
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-[var(--shadow-elegant)]">
          <CardHeader>
            <CardTitle className="font-display text-2xl">
              Step {currentStep} of 4
            </CardTitle>
            <div className="flex gap-2 mt-4">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    step <= currentStep ? "bg-accent" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {renderStep()}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-2" />
                    Previous
                  </Button>
                )}
                {currentStep < 4 ? (
                  <Button
                    type="button"
                    variant="hero"
                    onClick={nextStep}
                    className={currentStep === 1 ? "ml-auto" : ""}
                  >
                    Next
                    <ChevronRight className="ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" variant="hero" className="ml-auto">
                    Submit
                    <Check className="ml-2" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
