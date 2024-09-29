import React from "react";
import { useParams } from "react-router-dom";
import { useGet } from "@/cache/reactquery/useGet";
import Layout from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Markup } from "@/components/hover.dev/code/Markup";
import { PulseLine } from "@/components/hover.dev/utils/PulseLine";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DeleteIcon, EditIcon, OptionIcon } from "lucide-react";
import { IconStack3Filled } from "@tabler/icons-react";
import TagsList from "./TagsList";
import PostTagsList from "./PostTagsList";
import CreateAnswer from "./CreateAnswer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BlogCommentList from "../communityPosts/BlogCommentList";

const categorizeFiles = (files) => {
  return files.reduce(
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

const BlogPostDetailsCode = () => {
  const { postId } = useParams();
  const { user } = useAuth();
  const { data, isLoading, error } = useGet(
    "blog post details",
    `/problem/get/${postId}`,
    {}
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.problem) return <div>No post found</div>;

  const {
    id,
    user_id,
    full_name,
    answers,
    title,
    content,
    code_snippets,
    image,
    date,
    time,
    tags,
    files,
  } = data.problem;
  console.log(data.problem);
  console.log(tags);
  const { images, videos, documents, audio, others } = categorizeFiles(files);
  console.log(JSON.stringify(user?.user?.id) === JSON.stringify(user_id));

  return (
    <Layout>
      <div className="px-2 pb-12 pt-44">
        <Card className="max-w-3xl pt-3 mx-auto">
          <CardHeader>
            <div className="flex items-center pb-2 space-x-4 border-b-2">
              <Avatar className="w-12 h-12">
                <AvatarImage src={image} />
                <AvatarFallback>{full_name}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col flex-grow">
                {/* Added flex-grow to expand remaining space */}
                <div className="text-lg font-bold">{full_name}</div>
                <div className="pt-1 text-xs text-muted-foreground">{time}</div>
              </div>

              <div className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md top-2 left-2 bg-primary text-primary-foreground">
                {date}
              </div>
              {parseInt(user?.user?.id) === parseInt(user_id) && (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className=""
                        title="More options"
                      >
                        <IconStack3Filled className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <DeleteIcon className="w-4 h-4 mr-2" />
                        Delete post
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </div>

            <div className="px-6 pb-3 mb-6">
              <h2 className="pt-2 text-5xl font-bold">{title}</h2>
              <p className="mt-4 text-xl text-gray-500 sm:text-2xl">
                {content}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <PostTagsList tags={tags} />
          </CardContent>
          <CardContent>
            {code_snippets && (
              <div className="px-12 -mx-6 overflow-x-scroll no-scrollbar">
                <p> Code: </p>
                <Markup code={code_snippets} lang="javascript" />
              </div>
            )}
          </CardContent>
          <PulseLine />
          {files.length > 0 && (
            <div className="px-6 mt-6">
              <h3 className="text-xl font-bold">Files</h3>
              {images.length > 0 && (
                <div>
                  <h4 className="mt-4 text-lg font-semibold">Images</h4>
                  <div className="flex flex-wrap">
                    {images.map((file) => (
                      <img
                        src={file.path}
                        alt={file.name}
                        key={file.id}
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
                    <video
                      src={file.path}
                      controls
                      key={file.id}
                      className="mb-2"
                    />
                  ))}
                </div>
              )}
              {documents.length > 0 && (
                <div>
                  <h4 className="mt-4 text-lg font-semibold">Documents</h4>
                  {documents.map((file) => (
                    <a
                      href={file.path}
                      key={file.id}
                      className="block mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {file.name}
                    </a>
                  ))}
                </div>
              )}
              {audio.length > 0 && (
                <div>
                  <h4 className="mt-4 text-lg font-semibold">Audio</h4>
                  {audio.map((file) => (
                    <audio
                      src={file.path}
                      controls
                      key={file.id}
                      className="mb-2 "
                    />
                  ))}
                </div>
              )}
              {others.length > 0 && (
                <div>
                  <h4 className="mt-4 text-lg font-semibold">Others</h4>
                  {others.map((file) => (
                    <a
                      href={file.path}
                      key={file.id}
                      className="block mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {file.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
          <CardContent>
            <BlogCommentList comments={answers} />
          </CardContent>
          <CardFooter>
            <Dialog className="">
              <DialogTrigger asChild className="flex max-w-5xl mx-auto ">
                <Button variant="outline" className="w-full">
                  Add Reply
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] md:max-w-[600px] px-5  ">
                <div className="">
                  <CreateAnswer id={id} />
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default BlogPostDetailsCode;
