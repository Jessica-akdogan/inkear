
import Button from '../ui/button'
import { FileText, Upload } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'



type PdfViewerProps = {
  file: File | null;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PdfViewer = ({ file, handleUpload }: PdfViewerProps) => {
  return (
 <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="section-title flex items-center justify-center gap-2">
                    <FileText className="w-6 h-6 text-inkaer-blue" />
                    PDF Viewer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="min-h-[200px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    {file ? (
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-inkaer-blue mx-auto mb-2" />
                        <p className="font-sora font-medium text-gray-900">{file.name}</p>
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
                      onChange={handleUpload}
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
  )
}

export default PdfViewer