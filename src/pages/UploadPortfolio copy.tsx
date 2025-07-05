
import React, { useState } from 'react';
import  Button  from '@/components/ui/button';
import { ChatInput } from '@/components/ui/chat-input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, File } from 'lucide-react';
import { toast } from 'sonner';
import BackgroundDecor from '@/components/auth/BackgroundDecor';
import FlickeringGridWrapper from '@/components/auth/FlickeringGridWrapper';

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
        {/* <LoggedInNavbar /> */}
        
        {/* Main Content */}
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
              {/* STEP File Viewer */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="section-title flex items-center justify-center gap-2">
                    <File className="w-6 h-6 text-inkaer-blue" />
                    STEP File Viewer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="min-h-[200px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    {stepFile ? (
                      <div className="text-center">
                        <File className="w-16 h-16 text-inkaer-blue mx-auto mb-2" />
                        <p className="font-sora font-medium text-gray-900">{stepFile.name}</p>
                        <p className="section-p text-gray-500">STEP file uploaded</p>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500">
                        <File className="w-16 h-16 mx-auto mb-2 opacity-50" />
                        <p className="section-p">No STEP file uploaded</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      type="file"
                      id="step-upload"
                      accept=".step,.stp"
                      onChange={handleStepUpload}
                      className="hidden"
                    />
                    <Button
                      onClick={() => document.getElementById('step-upload')?.click()}
                      className="btn-responsive w-full bg-gradient-inkaer hover:opacity-90 text-white "
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload STEP File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* PDF Viewer */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="section-title flex items-center justify-center gap-2">
                    <FileText className="w-6 h-6 text-inkaer-blue" />
                    PDF Viewer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="min-h-[200px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    {pdfFile ? (
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-inkaer-blue mx-auto mb-2" />
                        <p className="font-sora font-medium text-gray-900">{pdfFile.name}</p>
                        <p className="section-p text-gray-500">PDF file uploaded</p>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500">
                        <FileText className="w-16 h-16 mx-auto mb-2 opacity-50" />
                        <p className="section-p">No PDF file uploaded</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      type="file"
                      id="pdf-upload"
                      accept=".pdf"
                      onChange={handlePdfUpload}
                      className="hidden"
                    />
                    <Button
                      onClick={() => document.getElementById('pdf-upload')?.click()}
                      className="btn-responsive w-full bg-gradient-inkaer hover:opacity-90 text-white"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Submission Explanation */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="section-title">Submission Explanation</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <ChatInput
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder="Explain your project, design decisions, and technical approach..."
                    className="min-h-32 text-xs xs:text-base resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                  />
                  <div className="flex items-center justify-end p-3 pt-0">
                    <Button
                      type="submit" 
                      className="bg-gradient-inkaer text-xs xs:text-base hover:opacity-90 text-white font-sora font-semibold"
                    >
                      Submit Project
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default UploadPortfolio;
