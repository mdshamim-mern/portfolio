"use client"; 

import { useRef, useState } from "react";
import { createProject } from "@/actions/projectActions"; 
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ProjectForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setStatus("Saving project...");
    
    const result = await createProject(formData);
    
    if (result.success) {
      setStatus("Project added successfully!");
      formRef.current?.reset(); 
    } else {
      setStatus("Failed to add project.");
    }
    setIsLoading(false);
  };

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Project Title" name="title" id="title" required placeholder="E-commerce App" />
        <Input label="Image URL" name="image" id="image" required placeholder="https://cloudinary.com/..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input label="Tech Stack (comma separated)" name="techStack" id="techStack" required placeholder="React, Node.js, MongoDB" />
        <Input label="Live Link" name="liveLink" id="liveLink" required placeholder="https://..." />
        <Input label="GitHub Link" name="githubLink" id="githubLink" required placeholder="https://github.com/..." />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="description" className="text-sm font-semibold text-gray-700 mb-2">Description</label>
        <textarea 
            name="description" 
            id="description" 
            rows={3} 
            required 
            className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 w-full resize-none"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="challenges" className="text-sm font-semibold text-gray-700 mb-2">Challenges Faced</label>
          <textarea name="challenges" id="challenges" rows={3} required className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 w-full resize-none"></textarea>
        </div>
        
        <div className="flex flex-col mb-4">
          <label htmlFor="futurePlans" className="text-sm font-semibold text-gray-700 mb-2">Future Plans</label>
          <textarea name="futurePlans" id="futurePlans" rows={3} required className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 w-full resize-none"></textarea>
        </div>
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? "Saving..." : "Add Project"}
        </Button>
      </div>

      {status && (
        <p className={`mt-4 font-medium text-center ${status.includes("successfully") ? "text-green-600" : "text-blue-600"}`}>
          {status}
        </p>
      )}
    </form>
  );
}