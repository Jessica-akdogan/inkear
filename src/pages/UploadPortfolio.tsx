
import React, { lazy, useState } from 'react';
import { toast } from 'sonner';
import BackgroundDecor from '@/components/auth/BackgroundDecor';
import FlickeringGridWrapper from '@/components/auth/FlickeringGridWrapper';

const StepViewer = lazy(() => import('@/components/uploadPortfolio/StepViewer'));
const PdfViewer = lazy(() => import('@/components/uploadPortfolio/PdfViewer'));
const SubmitExplanation = lazy(() => import('@/components/uploadPortfolio/SubmitExplanation'));

const UploadPortfolio = () => {
  const [stepFile, setStepFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [explanation, setExplanation] = useState('');

  const handleStepUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setStepFile(file);
      toast.success('STEP file uploaded successfully');
    }
  };

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPdfFile(file);
      toast.success('PDF file uploaded successfully');
    }
  };

  const handleSubmit = () => {
    if (!stepFile || !pdfFile || !explanation.trim()) {
      toast.error('Please upload both files and provide an explanation');
      return;
    }
    
    toast.success('Project submitted successfully!');
    console.log('Submitting project:', { stepFile, pdfFile, explanation });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
  <FlickeringGridWrapper/>

      <BackgroundDecor />

      <div className="relative z-10">
  
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="section-title mb-4">
                Upload Your Portfolio
              </h1>
              <p className="section-subtitle max-w-3xl mx-auto">
                Submit your engineering projects and showcase your technical skills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <StepViewer file={stepFile} handleUpload={handleStepUpload} />
             <PdfViewer file={pdfFile} handleUpload={handlePdfUpload} />
            </div>
            <SubmitExplanation 
               value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                onSubmit={handleSubmit}
            />
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default UploadPortfolio;
         