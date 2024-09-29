import { Button } from "@/components/ui/button";

const CourseDetailsCard = ({ courseData }) => {
  const { instructor, course, folder_name, files } = courseData;
  console.log(courseData);
  const categorizedFiles = files.reduce(
    (acc, file) => {
      const { type } = file;
      if (["jpg", "png", "jpeg"].includes(type)) {
        acc.images.push(file);
      } else if (["mp4", "avi", "mov"].includes(type)) {
        acc.videos.push(file);
      } else if (["pdf", "doc", "docx", "xls", "xlsx"].includes(type)) {
        acc.documents.push(file);
      } else if (["mp3", "wav"].includes(type)) {
        acc.audio.push(file);
      } else {
        acc.others.push(file);
      }
      return acc;
    },
    { images: [], videos: [], documents: [], audio: [], others: [] }
  );
  return (
    <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
      <div className="grid gap-6">
        {Object.entries(categorizedFiles).map(([category, files]) => {
          if (files.length === 0) return null;
          let icon;
          let categoryName;
          switch (category) {
            case "images":
              icon = (
                <img
                  src="/placeholder.svg"
                  alt="Placeholder"
                  className="object-cover w-full h-full"
                />
              );
              categoryName = "Images";
              break;
            case "videos":
              icon = <PlayIcon className="w-5 h-5" />;
              categoryName = "Videos";
              break;
            case "documents":
              icon = <FileIcon className="w-5 h-5" />;
              categoryName = "Documents";
              break;
            case "audio":
              icon = <MicIcon className="w-5 h-5" />;
              categoryName = "Audio";
              break;
            default:
              icon = <FileIcon className="w-5 h-5" />;
              categoryName = "Others";
          }

          return (
            <div
              key={category}
              className="overflow-hidden rounded-lg shadow-lg bg-background"
            >
              <div className="px-6 py-4 border-b">
                <h2 className="text-xl font-semibold">{categoryName}</h2>
              </div>
              <div className="divide-y">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-4 px-6 py-4"
                  >
                    <div className="flex-shrink-0 p-2 rounded-md bg-primary text-primary-foreground">
                      {category === "images" ? (
                        <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md">
                          <img
                            src={file.path}
                            alt={file.description || "Image"}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        icon
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">
                        {file.description || "No Description"}
                      </h3>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetailsCard;
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

function MicIcon(props) {
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
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function PlayIcon(props) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
