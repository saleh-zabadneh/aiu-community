import { Markup } from "@/components/hover.dev/code/Markup";
import { PulseLine } from "@/components/hover.dev/utils/PulseLine";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
const categorizeFiles = (files) => {
  return files?.reduce(
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
};

const BlogCommentList = ({ comments }) => {
  const { user } = useAuth();

  const allFiles = comments?.flatMap((comment) => comment.files) || [];

  // Categorize the extracted files
  const { images, videos, documents, audio, others } =
    categorizeFiles(allFiles);
  console.log(
    JSON.stringify(user?.user?.id) === JSON.stringify(comments.user_id)
  );

  return (
    <>
      {comments?.map((comment) => (
        <div className="flex items-start gap-4" key={comment.id}>
          <Avatar className="border">
            <AvatarImage src={comment.image} />
            <AvatarFallback>{comment.full_name}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-medium" title={comment.full_name}>
                {comment.full_name}
              </div>
              <p className="text-xs text-muted-foreground">
                <time>{comment.created_at}</time>
              </p>
            </div>
            <p>{comment.comment}</p>
            <div className="max-w-48 md:max-w-md lg:max-w-xl">
              {comment.code_snippets && (
                <div className="px-12 -mx-6 overflow-x-scroll no-scrollbar">
                  <p> Code: </p>
                  <Markup code={comment.code_snippets} lang="javascript" />
                </div>
              )}
            </div>
            <PulseLine />
            {comments?.files?.length > 0 && (
              <div className="px-6 mt-6">
                <h3 className="text-xl font-bold">Files</h3>
                {images.length > 0 && (
                  <div>
                    <h4 className="mt-4 text-lg font-semibold">Images</h4>
                    <div className="flex flex-wrap">
                      {images.map((file) => (
                        <img
                          src={file}
                          alt={file}
                          key={file}
                          className="mb-2 max-h-[15rem] rounded-md"
                        />
                      ))}
                    </div>
                  </div>
                )}
                {videos.length > 0 && (
                  <div>
                    <h4 className="mt-4 text-lg font-semibold">Videos</h4>
                    {videos.map((file) => (
                      <video src={file} controls key={file} className="mb-2" />
                    ))}
                  </div>
                )}
                {documents.length > 0 && (
                  <div>
                    <h4 className="mt-4 text-lg font-semibold">Documents</h4>
                    {documents.map((file) => (
                      <a
                        href={file}
                        key={file}
                        className="block mb-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {file}
                      </a>
                    ))}
                  </div>
                )}
                {audio.length > 0 && (
                  <div>
                    <h4 className="mt-4 text-lg font-semibold">Audio</h4>
                    {audio.map((file) => (
                      <audio src={file} controls key={file} className="mb-2 " />
                    ))}
                  </div>
                )}
                {others.length > 0 && (
                  <div>
                    <h4 className="mt-4 text-lg font-semibold">Others</h4>
                    {others.map((file) => (
                      <a
                        href={file}
                        key={file}
                        className="block mb-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {file}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCommentList;
