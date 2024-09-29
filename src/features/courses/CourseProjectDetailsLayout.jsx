import { Button } from "@/components/ui/button";

const CourseProjectDetailsLayout = ({ project }) => {
  const { instructor, project_name, description, files, submission_due_date } =
    project;

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full max-w-4xl px-4 py-12 mx-auto md:px-6 md:py-16">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold md:text-4xl">{project_name}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Instructor</h2>
            <p className="text-muted-foreground">{instructor}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Submission Due Date</h2>
            <p className="text-muted-foreground">
              {formatDate(submission_due_date)}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Files</h2>
            <div className="space-y-4">
              {files.map((file) => (
                <div key={file.id} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 rounded-md bg-muted aspect-square md:w-12">
                    {file.type === "docx" ? (
                      <FileSpreadsheetIcon className="w-5 h-5" />
                    ) : (
                      <FileIcon className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{file.description || "File"}</p>
                    <p className="text-sm text-muted-foreground">
                      File type: {file.type.toUpperCase()}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(file.path, "_blank")}
                  >
                    Download
                  </Button>
                </div>
              ))}
            </div>
            <div
              className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
              style={{
                background:
                  "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProjectDetailsLayout;

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function FileSpreadsheetIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M8 17h2" />
      <path d="M14 17h2" />
    </svg>
  );
}
