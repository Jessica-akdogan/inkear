import Button from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ChatInput } from '../ui/chat-input';

type SubmitExplanationProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
};

const SubmitExplanation = ({ value, onChange, onSubmit }: SubmitExplanationProps) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="section-title">Submission Explanation</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  <ChatInput
                     value={value}
                    onChange={onChange}
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
  )
}

export default SubmitExplanation