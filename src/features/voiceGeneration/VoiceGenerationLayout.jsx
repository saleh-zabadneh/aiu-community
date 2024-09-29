// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

import { LampDemo } from "@/components/aceternity/Lamp";
import Layout from "@/components/layout/Layout";

// import { Textarea } from "@/components/ui/textarea";
const VoiceGenerationLayout = () => {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-background">
    //   <div className="w-full max-w-md px-4 space-y-4">
    //     <h1 className="text-3xl font-bold text-primary">PDF to Voice</h1>
    //     <p className="text-muted-foreground">
    //       Upload a PDF file and we will generate a downloadable voice file for
    //       you.
    //     </p>
    //     <form className="space-y-4">
    //       <div className="m-2">
    //         <Label htmlFor="pdf-file">PDF File</Label>
    //         <Input id="pdf-file" type="file" accept=".pdf" required />
    //       </div>
    //       <div className="m-2">
    //         <Label htmlFor="pdf-file">PDF File</Label>
    //         <Textarea
    //           placeHolder="this is generated text"
    //           id="pdf-file"
    //           type="file"
    //           accept=".pdf"
    //           required
    //         />
    //       </div>
    //       <Button type="submit" className="w-full">
    //         Convert to Voice
    //       </Button>
    //     </form>
    //     <div className="flex flex-col items-center justify-center space-y-4">
    //       <div className="text-primary" />
    //       <p className="text-muted-foreground">Processing your PDF file...</p>
    //       <Link
    //         href="#"
    //         download
    //         className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    //         prefetch={false}
    //       >
    //         Download Voice File
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="">
        <LampDemo />
      </div>
    </>
  );
};

export default VoiceGenerationLayout;
