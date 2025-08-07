import React, { useState } from "react";

const FormWithSteps = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    industry: "",
    regions: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("industry", formData.industry);
    data.append("regions", formData.regions);
    data.append("file", formData.file);

    try {
      const res = await fetch("https://your-api.com/upload", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      console.log("Uploaded:", json);
    } catch (err) {
      console.error("Error uploading:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-base-100 rounded-lg shadow-md space-y-6">

      {/* Step Progress UI */}
      <ul className="steps w-full mb-6">
        <li className={`step ${step >= 1 ? "step-primary" : ""}`}>Get Started</li>
        <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Create Brief</li>
        <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Resources</li>
        <li className={`step ${step >= 4 ? "step-primary" : ""}`}>Deal Structure</li>
      </ul>

      {/* Step 1: Deal Info */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">Add deal title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Choose industry</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="select select-bordered"
            >
              <option value="">-- Select --</option>
              <option value="Tech">Tech</option>
              <option value="Fashion">Fashion</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>

          {/* File Upload */}
          <div className="form-control">
            <label className="label">Upload thumbnail</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input file-input-bordered"
              accept="image/*"
            />
            {formData.file && (
              <img
                src={URL.createObjectURL(formData.file)}
                alt="Preview"
                className="mt-4 w-32 h-32 object-cover border rounded"
              />
            )}
          </div>
        </div>
      )}

      {/* Step 2: Regions */}
      {step === 2 && (
        <div className="form-control">
          <label className="label">Choose regions</label>
          <input
            type="text"
            name="regions"
            value={formData.regions}
            onChange={handleChange}
            className="input input-bordered space-x-6"
          />
          <select
              type="text"
              name="regions"
              value={formData.regions}
              onChange={handleChange}
              className="select select-bordered"
            >
              <option value="">-- Select --</option>
              <option value="Tech">Tech</option>
              <option value="Fashion">Fashion</option>
              <option value="Gaming">Gaming</option>
            </select>
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between pt-6">
        {step > 1 && (
          <button className="btn btn-outline" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}
        {step < 2 ? (
          <button className="btn btn-primary ml-auto" onClick={() => setStep(step + 1)}>
            Next
          </button>
        ) : (
          <button className="btn btn-success ml-auto" onClick={()=> setStep(step + 1)}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default FormWithSteps;
